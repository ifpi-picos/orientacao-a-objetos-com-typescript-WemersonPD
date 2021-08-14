import { Curso } from "./Curso";
import { Disciplina } from "./Disciplina";
import { Professor } from "./Professor";

const jesiel = new Professor("Jesiel");
const web1 = new Disciplina("Web1 front-end", jesiel);
const web2 = new Disciplina("Web2 back-end", jesiel);

const welligton = new Professor("Welligton");
const mobile = new Disciplina("Mobile", welligton);

const melhorCurso = new Curso("web", [web1, web2]);

melhorCurso.addDisciplina(mobile);

console.log(melhorCurso);
