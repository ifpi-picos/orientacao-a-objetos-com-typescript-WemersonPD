export class Beneficio {
  private nome: String;

  constructor(nome: String) {
    this.nome = nome;
  }

  public getNome(): String {
    return this.nome;
  }

  public setNome(nome: String): void {
    this.nome = nome;
  }
}
