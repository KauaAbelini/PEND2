// Classe 
class Aluno {

    // Construtor - Método especial para criar e inicializar objetos
    constructor(nome, idade, curso, matricula) {


    // Atributos - Características do objeto
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.matricula = matricula;


    }

    // Métodos - Ações que o objeto pode realizar
    aprender() {
        console.log("O aluno está aprendendo.");
    }

    estudar() {
        console.log("O aluno está estudando.");
    }

    apresentar() {
        console.log(`${this.nome} está apresentando.`);
    }
}

//Obejetos

// Criando um objeto da classe Aluno
const aluno1 = new Aluno('Kauã Abelini', 18, 'Ds', '17171');
console.log("Aluno 1: ", aluno1);

// Criando outro objeto da classe Aluno
const aluno2 = new Aluno('Maria', 22, 'Medicina', '67676');
console.log("Aluno 2: ", aluno2);

// Aluno 3
const aluno3 = new Aluno('Pedro', 21, 'Direito', '11111');
console.log("Aluno 3: ", aluno3);

console.log("============================");
console.log("Atributos do aluno 1: ");
console.log("Nome: ", aluno1.nome);
console.log("Idade: ", aluno1.idade);
console.log("Curso: ", aluno1.curso);
console.log("Matrícula: ", aluno1.matricula);
console.log("============================");
console.log("Atributos do aluno 2: ");
console.log("Nome: ", aluno2.nome);
console.log("Idade: ", aluno2.idade);
console.log("Curso: ", aluno2.curso);
console.log("Matrícula: ", aluno2.matricula);
console.log("============================");
console.log("Atributos do aluno 3: ");
console.log("Nome: ", aluno3.nome);
console.log("Idade: ", aluno3.idade);
console.log("Curso: ", aluno3.curso);
console.log("Matrícula: ", aluno3.matricula);
console.log("============================");

// Chamando métodos dos objetos
aluno1.apresentar();
aluno2.apresentar();
aluno3.apresentar();