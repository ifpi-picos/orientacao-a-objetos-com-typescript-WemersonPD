import { Beneficio } from "./Beneficios";
import { Funcionario } from "./Funcionario";

export class PF extends Funcionario {
  private cpf: String;

  constructor(nome: String, salario: number, cpf: String) {
    const planeDeSaude = new Beneficio("Plano de Saúde");
    const vr = new Beneficio("Vr");
    const ferias = new Beneficio("Férias");

    super(nome, salario, [planeDeSaude, vr, ferias]);
    this.cpf = cpf;
  }

  public getSalarioLiguido(): number {
    const salario = super.getSalarioBruto();
    const porcentagem = salario * 0.1;
    return salario - porcentagem;
  }

  public getCpf(): String {
    return this.cpf;
  }

  public setCpf(cpf: String): void {
    this.cpf = cpf;
  }
}
