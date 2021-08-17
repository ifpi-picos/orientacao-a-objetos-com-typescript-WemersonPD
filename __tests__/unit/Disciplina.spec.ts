import { Curso } from "../../src/curso/Curso";
import { Disciplina } from "../../src/curso/Disciplina";
import { Professor } from "../../src/curso/Professor";

describe("Disciplina", () => {
  it("deve criar uma disciplina", () => {
    const jesiel = new Professor("Jesiel");
    const web1 = new Disciplina("web1", jesiel);
    const web2 = new Disciplina("web2", jesiel);

    const cursoWeb = new Curso("Web moderno", [web1, web2]);

    expect(cursoWeb.getDisciplinas()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          nome: "web1",
        }),
      ])
    );

    expect(cursoWeb.getNome()).toBe("Web moderno");
  });
});
