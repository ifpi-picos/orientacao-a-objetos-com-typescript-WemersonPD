import { Beneficio } from "./Beneficios";

export abstract class Funcionario {
  private nome: String;
  private salario: number;
  private beneficios: Beneficio[];

  constructor(nome: String, salario: number, beneficios: Beneficio[]) {
    this.nome = nome;
    this.salario = salario;
    this.beneficios = beneficios;
  }

  public getNome(): String {
    return this.nome;
  }

  public setNome(nome: String): void {
    this.nome = nome;
  }

  public getBeneficios(): Beneficio[] {
    return this.beneficios;
  }

  public getSalarioBruto(): number {
    return this.salario;
  }
  public abstract getSalarioLiguido(): number;
}
