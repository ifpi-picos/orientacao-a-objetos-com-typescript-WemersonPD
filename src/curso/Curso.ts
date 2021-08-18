import { Disciplina } from "./Disciplina";

export class Curso {
  private nome: String;
  private disciplinas: Disciplina[] = [];

  constructor(nome: String) {
    this.nome = nome;
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

  public removeDisciplina(disciplina: Disciplina): Boolean {
    const disciplinaIndex = this.disciplinas.indexOf(disciplina);

    switch (disciplinaIndex) {
      case -1:
        return false;
      default:
        this.disciplinas.splice(disciplinaIndex, 1);
        return true;
    }
  }
}
