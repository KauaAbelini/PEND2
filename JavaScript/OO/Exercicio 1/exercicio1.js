// Objetos: Filme 1, FIlme 2, Filme 3
// Atributos: Nome, Ano, Diretor, Gênero, DUração, Classificação
// Métodos: Reproduzir, Pausar, Parar


// Classe Filme
class Filme {   
    constructor(nome, ano, diretor, genero, duracao, classificacao, dataEstreia, streaming) {

    this.nome = nome;
    this.ano = ano;
    this.diretor = diretor;
    this.genero = genero;
    this.duracao = duracao;
    this.classificacao = classificacao;
    this.data_estreia = dataEstreia;
    this.streaming = streaming;

    }

    // Métodos - Ações que o objeto pode realizar
    em_cartaz() {
        console.log(`${this.nome} está em cartaz agora`);
    }

    em_breve() {
        console.log(`${this.nome} estará disponível em breve nos cinemas em ${this.data_estreia}. Não perca!`);
    }

    indisponivel(streaming) {
    console.log(`${this.nome} não está mais em cartaz nos cinemas. Assista agora no ${streaming}.`);
}
   
}

//Obejetos

// Filme 1
const filme1 = new Filme('Homem-aranha New Day', '2026', "Jon Watts ", 'Ação', "2hr 24mn", "14 Anos",' 29 de julho de 2026', 'Disney+');
console.log("Filme 1: ", filme1);

// Filme 2
const filme2 = new Filme('Michael', '2026', 'Graham King', 'Documentário e Musical', '2hr 4mn', '14 Anos', '23 de abril de 2026', 'PrimeVideo');
console.log("Filme 2: ", filme2);
// Filme 3
const filme3 = new Filme('Vingadores Doomsday', '2026', 'Joe Russo e Anthony Russo', 'Ficção científica/Ação', "2h 45mn", "14 anos", "18 de dezembro de 2026");
console.log("Filme 3: ", filme3);

// Filme 4
const filme4 = new Filme('Batman-parte II', '2027', 'Matt Reeves', 'Ação e Suspense', '2hr 58mn', '14 Anos', ' 18 de fevereiro de 2028');
console.log("Filme 4: ", filme4);

console.log("============================");
console.log("Atributos do filme 1: ");
console.log("Nome: ", filme1.nome);
console.log("Ano: ", filme1.ano);
console.log("Diretor: ", filme1.diretor);
console.log("Gênero: ", filme1.genero);
console.log("Duração: ", filme1.duracao);
console.log("Classificação: ", filme1.classificacao);
console.log("============================");
console.log("Atributos do filme 2: ");
console.log("Nome: ", filme2.nome);
console.log("Ano: ", filme2.ano);
console.log("Diretor: ", filme2.diretor);
console.log("Gênero: ", filme2.genero);
console.log("Duração: ", filme2.duracao);
console.log("Classificação: ", filme2.classificacao);
console.log("============================");
console.log("Atributos do filme 3: ");
console.log("Nome: ", filme3.nome);
console.log("Ano: ", filme3.ano);
console.log("Diretor: ", filme3.diretor);
console.log("Gênero: ", filme3.genero);
console.log("Duração: ", filme3.duracao);
console.log("Classificação: ", filme3.classificacao);
console.log("============================");
console.log("Atributos do filme 4: ");
console.log("Nome: ", filme4.nome);
console.log("Ano: ", filme4.ano);
console.log("Diretor: ", filme4.diretor);
console.log("Gênero: ", filme4.genero);
console.log("Duração: ", filme4.duracao);
console.log("Classificação: ", filme3.classificacao);

// Chamando métodos dos objetos
filme1.em_cartaz();

filme2.indisponivel(filme2.streaming);

filme3.em_breve();

filme4.em_breve();