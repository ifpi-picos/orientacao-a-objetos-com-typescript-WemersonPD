import { Funcionario } from "./Funcionario";

export class Empresa {
  private nome: String;
  private funcionarios: Funcionario[];

  constructor(nome: String, funcionarios: Funcionario[]) {
    this.nome = nome;
    this.funcionarios = funcionarios;
  }

  public getNome(): String {
    return this.nome;
  }

  public setNome(nome: String): void {
    this.nome = nome;
  }

  public getFunctionarios(): Funcionario[] {
    return this.funcionarios;
  }

  public setFuncionarios(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
  }
}
