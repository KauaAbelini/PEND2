const nome = document.getElementById('nome');
const salvar = document.getElementById('salvar');
const recuperar = document.getElementById('recuperar');
const remover = document.getElementById('remover');

const resultado = document.getElementById('resultado');

// SALVAR
salvar.addEventListener('click', function() {
    localStorage.setItem('nome', nome.value);

    resultado.textContent = "Nome salvo com sucesso!";
});

// RECUPERAR
recuperar.addEventListener('click', function() {
    const nomeRecuperado = localStorage.getItem('nome');

    if (nomeRecuperado) {
        resultado.textContent = `Nome recuperado: ${nomeRecuperado}`;
    } else {
        resultado.textContent = "Nenhum nome encontrado!";
    }
});

// EXCLUIR
remover.addEventListener('click', function() {
    localStorage.removeItem('nome');

    resultado.textContent = "Nome excluído com sucesso!";
});
