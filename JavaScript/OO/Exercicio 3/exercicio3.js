// Classe 
class Produto {

    // Construtor - Método especial para criar e inicializar objetos
    constructor(nome, preco, estoque) {


    // Atributos - Características do objeto
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;


    }

    // Métodos - Ações que o objeto pode realizar
    vender() {
        console.log(`O produto ${this.nome} está sendo vendido.`);
    }

    repor_estoque() {
        console.log(`O produto ${this.nome} está sendo reabastecido.`);
    }

    alterarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`${this.nome} teve seu preço alterado para R$ ${this.preco.toFixed(2)}.`);
    }
}

//Obejetos

// Criando um objeto da classe Produto
const produto1 = new Produto('Notebook', 3000.00, 10);
console.log("Produto 1: ", produto1);

// Criando outro objeto da classe Produto
const produto2 = new Produto('Smartphone', 2000.00, 20);
console.log("Produto 2: ", produto2);

// Produto 3
const produto3 = new Produto('Tablet', 1500.00, 15);
console.log("Produto 3: ", produto3);

console.log("============================");
console.log("Atributos do produto 1: ");
console.log("Nome: ", produto1.nome);
console.log("Preço: ", produto1.preco);
console.log("Estoque: ", produto1.estoque);
console.log("============================");
console.log("Atributos do produto 2: ");
console.log("Nome: ", produto2.nome);
console.log("Preço: ", produto2.preco);
console.log("Estoque: ", produto2.estoque);
console.log("============================");
console.log("Atributos do produto 3: ");
console.log("Nome: ", produto3.nome);
console.log("Preço: ", produto3.preco);
console.log("Estoque: ", produto3.estoque);
console.log("============================");

// Chamando métodos dos objetos
produto1.vender();
produto2.repor_estoque();
produto3.alterarPreco(1600.00);