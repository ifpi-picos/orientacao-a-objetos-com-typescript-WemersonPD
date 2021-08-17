import { Professor } from "../../src/curso/Professor";

describe("Professor", () => {
  it("deve criar um professor", () => {
    const jesiel = new Professor("Jesiel");

    expect(jesiel.getNome()).toBe("Jesiel");
  });
});
