// Classe 
class Carro {

    // Construtor - Método especial para criar e inicializar objetos
    constructor(marca, modelo, ano, cor) {


    // Atributos - Características do objeto
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;

    }

    // Métodos - Ações que o objeto pode realizar
    ligar() {
        console.log("O carro está ligado.");
    }

    acelerar() {
        console.log("O carro está acelerando.");
    }

    frear() {
        console.log(`${this.modelo} está freando.`);
    }
}

//Obejetos

// Criando um objeto da classe Carro
const carro1 = new Carro('Hyundai', 'HB20', 2015, 'Preto');
console.log("Carro 1: ", carro1);

// Criando outro objeto da classe Carro
const carro2 = new Carro('BMW', 'M4', 2020, 'Preto');
console.log("Carro 2: ", carro2);

// Carro 3
const carro3 = new Carro('Chevrolet', 'Camaro', 2014, 'Amarelo');
console.log("Carro 3: ", carro3);

console.log("---------------------------");
console.log("Atributos do carro 1: ");
console.log("Marca: ", carro1.marca);
console.log("Modelo: ", carro1.modelo);
console.log("Ano: ", carro1.ano);
console.log("Cor: ", carro1.cor);
console.log("---------------------------");
console.log("Atributos do carro 2: ");
console.log("Marca: ", carro2.marca);
console.log("Modelo: ", carro2.modelo);
console.log("Ano: ", carro2.ano);
console.log("Cor: ", carro2.cor);
console.log("---------------------------");
console.log("Atributos do carro 3: ");
console.log("Marca: ", carro3.marca);
console.log("Modelo: ", carro3.modelo);
console.log("Ano: ", carro3.ano);
console.log("Cor: ", carro3.cor);
console.log("---------------------------");

// Chamando métodos dos objetos
carro1.ligar();
carro1.acelerar();
carro1.frear();