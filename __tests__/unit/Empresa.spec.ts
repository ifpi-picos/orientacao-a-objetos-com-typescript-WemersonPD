import { Empresa } from "../../src/empresa/Empresa";
import { PF } from "../../src/empresa/PF";
import { PJ } from "../../src/empresa/PJ";

describe("Empresa", () => {
  it("deve criar um empresa", () => {
    const pj = new PJ("Wemerson", 3500, "00.000.000/0000-00");
    const pf = new PF("Jesiel", 10000, "000.000.000-00");

    const empresa = new Empresa("Mambee", [pj, pf]);

    expect(empresa.getNome()).toBe("Mambee");
    expect(empresa.getFunctionarios()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          salario: expect.any(Number),
        }),
      ])
    );
  });
});
