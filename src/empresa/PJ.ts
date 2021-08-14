import { Beneficio } from "./Beneficios";
import { Funcionario } from "./Funcionario";

export class PJ extends Funcionario {
  private cnpj: String;

  constructor(nome: String, salario: number, cnpj: String) {
    const planeDeSaude = new Beneficio("Plano de Saúde");

    super(nome, salario, [planeDeSaude]);
    this.cnpj = cnpj;
  }

  public getSalarioLiguido(): number {
    const salario = super.getSalarioBruto();
    const porcentagem = salario * 0.05;
    return salario - porcentagem;
  }

  public getCnpj(): String {
    return this.cnpj;
  }

  public setCnpj(cnpj: String): void {
    this.cnpj = cnpj;
  }
}
