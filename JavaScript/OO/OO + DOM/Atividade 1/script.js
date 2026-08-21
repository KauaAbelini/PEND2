class Produto {
    constructor(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    calcularPreco() {
        return this.preco - (this.preco * this.desconto / 100);
    }
}


class Turma {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    excluirProduto(index) {
        this.produtos.splice(index, 1);
        this.exibirNaTela();
    }

    exibirNaTela() {

        const resultado = document.querySelector('#resultado');

        resultado.innerHTML = "";

        this.produtos.forEach((produto, index) => {

            resultado.innerHTML += `
                <div class="produto">
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: R$ ${produto.calcularPreco().toFixed(2)}</p>
                    <p>Desconto: ${produto.desconto}%</p>

                    <button onclick="turma.excluirProduto(${index})">
                        Excluir
                    </button>
                </div>
            `;
        });
    }
}


const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const desconto = document.querySelector('#desconto');
const botaocadastrar = document.querySelector('#botaocadastrar');

const turma = new Turma();

botaocadastrar.addEventListener('click', function() {

    const produto = new Produto(
        nome.value,
        Number(preco.value),
        Number(desconto.value)
    );

    turma.adicionarProduto(produto);
    turma.exibirNaTela();


    nome.value = "";
    preco.value = "";
    desconto.value = "";
});