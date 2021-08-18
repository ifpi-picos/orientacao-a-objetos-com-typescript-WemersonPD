import { Curso } from "../../src/curso/Curso";
import { Disciplina } from "../../src/curso/Disciplina";
import { Professor } from "../../src/curso/Professor";

describe("Curso", () => {
  it("deve criar um curso com nome", () => {
    const curso = new Curso("Web moderno");

    expect(curso.getNome()).toBe("Web moderno");
  });

  it("deve verificar a quantidade de disciplinas sem nenhuma adicionada ao curso", () => {
    const curso = new Curso("Web moderno");

    expect(curso.getDisciplinas().length).toEqual(0);
  });

  it("deve verificar a quantidade de disciplinas com uma adicionada ao curso", () => {
    const jesiel = new Professor("Jesiel");

    const web1 = new Disciplina("Web1 front-end", jesiel);

    const curso = new Curso("Web moderno");
    curso.addDisciplina(web1);

    expect(curso.getDisciplinas().length).toEqual(1);
  });

  it("deve verificar a quantidade de disciplinas com mais de duas adicionada ao curso", () => {
    const jesiel = new Professor("Jesiel");
    const welligton = new Professor("Welligton");

    const web1 = new Disciplina("Web1 front-end", jesiel);
    const web2 = new Disciplina("Web2 back-end", jesiel);
    const mobile = new Disciplina("Mobile", welligton);

    const curso = new Curso("Web moderno");
    curso.addDisciplina(web1);
    curso.addDisciplina(web2);
    curso.addDisciplina(mobile);

    expect(curso.getDisciplinas().length).toBeGreaterThan(2);
  });

  it("deve remover disciplina quando nenhuma foi adiconada ainda", () => {
    const jesiel = new Professor("Jesiel");

    const web1 = new Disciplina("Web1 front-end", jesiel);

    const curso = new Curso("Web moderno");

    expect(curso.getDisciplinas().length).toEqual(0);
    expect(curso.removeDisciplina(web1)).toBeFalsy();
  });

  it("deve remover uma disciplina com apenas uma adicionada ao curso", () => {
    const jesiel = new Professor("Jesiel");

    const web1 = new Disciplina("Web1 front-end", jesiel);

    const curso = new Curso("Web moderno");
    curso.addDisciplina(web1);

    expect(curso.removeDisciplina(web1)).toBeTruthy();
    expect(curso.getDisciplinas().length).toEqual(0);
  });

  it("deve remover uma disciplica com mais de duas adiconadas", () => {
    const jesiel = new Professor("Jesiel");
    const welligton = new Professor("Welligton");

    const web1 = new Disciplina("Web1 front-end", jesiel);
    const web2 = new Disciplina("Web2 back-end", jesiel);
    const mobile = new Disciplina("Mobile", welligton);

    const curso = new Curso("Web moderno");
    curso.addDisciplina(web1);
    curso.addDisciplina(web2);
    curso.addDisciplina(mobile);

    expect(curso.removeDisciplina(web2)).toBeTruthy();
    expect(curso.getDisciplinas()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          nome: "Web1 front-end",
        }),
        expect.objectContaining({
          nome: "Mobile",
        }),
      ])
    );
  });
});
