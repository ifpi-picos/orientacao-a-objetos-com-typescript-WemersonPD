import { PF } from "../../src/empresa/PF";

describe("PJ", () => {
  it("deve criar um pj", () => {
    const pf = new PF("Jesiel", 10000, "000.000.000-00");

    expect(pf.getNome()).toBe("Jesiel");
    // Outro exemplo de verificação do array
    expect(pf.getBeneficios()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          nome: expect.any(String),
        }),
      ])
    );
    expect(pf.getCpf()).toBe("000.000.000-00");
  });
});
