import { Curso } from "./curso/Curso";
import { Disciplina } from "./curso/Disciplina";
import { Professor } from "./curso/Professor";
import { PF } from "./empresa/PF";
import { PJ } from "./empresa/PJ";

// Curso
const jesiel = new Professor("Jesiel");
const web1 = new Disciplina("Web1 front-end", jesiel);
const web2 = new Disciplina("Web2 back-end", jesiel);

const welligton = new Professor("Welligton");
const mobile = new Disciplina("Mobile", welligton);

const curso = new Curso("web", [web1, web2]);

curso.addDisciplina(mobile);

console.log("Curso", curso);

const pj = new PJ("Wemerson", 3500, "00.000.000/0000-00");
const pf = new PF("Jesiel", 10000, "000.000.000-00");

console.log("Salario do PJ", pj.getSalarioLiguido());
console.log("Salario do PF", pf.getSalarioLiguido());
