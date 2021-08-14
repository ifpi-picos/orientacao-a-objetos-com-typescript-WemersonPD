import { Professor } from "./Professor";

export class Disciplina {
  private nome: String;
  private professor: Professor;

  constructor(nome: String, professor: Professor) {
    this.nome = nome;
    this.professor = professor;
  }

  public getNome(): String {
    return this.nome;
  }

  public setNome(nome: String): void {
    this.nome = nome;
  }

  public getProfessor(): Professor {
    return this.professor;
  }

  public setProfessor(professor: Professor): void {
    this.professor = professor;
  }
}
