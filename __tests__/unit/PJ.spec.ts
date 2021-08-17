import { PJ } from "../../src/empresa/PJ";

describe("PJ", () => {
  it("deve criar um funcionario do tipo PJ", () => {
    const pj = new PJ("Wemerson", 3500, "00.000.000/0000-00");

    expect(pj.getNome()).toBe("Wemerson");
    expect(pj.getBeneficios()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          nome: "Plano de Saúde",
        }),
      ])
    );
    expect(pj.getCnpj()).toBe("00.000.000/0000-00");
  });
});
