class Produto {
    constructor(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    calcularPreco() {
        return this.preco - (this.preco * this.desconto / 100);
    }

    exibirNaTela() {
        const resultado = document.querySelector('#resultado');

        resultado.innerHTML = `
            <div>
                <p>Nome: ${this.nome}</p>
                <p>Preço: R$ ${this.calcularPreco().toFixed(2)}</p>
                <p>Desconto: ${this.desconto}%</p>
            </div>
        `;
    }
}


const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const desconto = document.querySelector('#desconto');
const botaocadastrar = document.querySelector('#botaocadastrar');


botaocadastrar.addEventListener('click', function() {

    const produto = new Produto(
        nome.value,
        Number(preco.value),
        Number(desconto.value),
    );

    localStorage.setItem("produto", JSON.stringify(produto));
    produto.exibirNaTela();
});

const dadosSalvos = localStorage.getItem("produto");

if (dadosSalvos) {

    const produtoSalvo = JSON.parse(dadosSalvos);

    const produto = new Produto(
        produtoSalvo.nome,
        produtoSalvo.preco,
        produtoSalvo.desconto,
    ); 

    produto.exibirNaTela();
} 