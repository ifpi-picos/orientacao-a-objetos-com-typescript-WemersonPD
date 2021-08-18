import { Disciplina } from "../../src/curso/Disciplina";
import { Professor } from "../../src/curso/Professor";

describe("Disciplina", () => {
  it("deve criar uma disciplina", () => {
    const jesiel = new Professor("Jesiel");
    const web1 = new Disciplina("web1", jesiel);

    expect(web1.getProfessor()).toEqual(
      expect.objectContaining({
        nome: "Jesiel",
      })
    );
  });
});
