import { Disciplina } from "./Disciplina";

export class Curso {
  private nome: String;
  private disciplinas: Disciplina[];

  constructor(nome: String, disciplinas: Disciplina[]) {
    this.nome = nome;
    this.disciplinas = disciplinas;
  }

  public getNome(): String {
    return this.nome;
  }

  public setNome(nome: String): void {
    this.nome = nome;
  }

  public getDisciplinas(): Disciplina[] {
    return this.disciplinas;
  }

  public addDisciplina(disciplina: Disciplina): void {
    this.disciplinas.push(disciplina);
  }
}
