const botao = document.querySelector("#buscarUsuarios");
const resultado = document.querySelector("#resultado");
const idUsuario = document.querySelector("#idUsuario");

// FETCH + THEN + CATCH

//    fetch("https://jsonplaceholder.typicode.com/users")
//      .then(resposta => resposta.json())
//      .then(dados => {
//         console.log(dados);
//     })
//          .catch(erro => {
//          console.error("Erro:", erro);
//      });

// botao.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(resposta => resposta.json())
//         .then(dados => {
//             resultado.innerHTML = "";

//             dados.forEach(usuario => {
//                 resultado.innerHTML += `
//                     <p>
//                         <strong>${usuario.name}</strong><br>
//                         ${usuario.email}
//                     </p>
//                     <hr>
//                 `;
//             });
//         });
// });

// ASYNC / AWAIT

// botao.addEventListener("click", async () => {
//     try {

//         const resposta = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const dados = await resposta.json();

//         resultado.innerHTML = "";

//         dados.forEach(usuario => {

//             resultado.innerHTML += `
//                 <p>
//                     <strong>${usuario.name}</strong><br>
//                     ${usuario.email}
//                 </p>
//                 <hr>
//             `;

//         });

//     } catch (erro) {
//         console.error("Erro:", erro);
//         resultado.innerHTML = "Erro ao carregar os usuários.";
//     }
// });

// COM CAMPO DE BUSCA
botao.addEventListener("click", async () => {
  const id = idUsuario.value;
  if (id === "") {
    resultado.innerHTML = "Digite um ID";
    return;
  }
  try {
    const resposta = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    if (!resposta.ok) {
      resultado.innerHTML = "Usuário não encontrado";
      return;
    }
    const dados = await resposta.json();
    resultado.innerHTML = ` 
    <p> 
        <strong>${dados.name}</strong><br> 
        Email: ${dados.email}<br> 
        Cidade: ${dados.address.city}<br> 
        Telefone: ${dados.phone} 
        </p> 
        <hr> 
        `;

        
  } catch (erro) {
    resultado.innerHTML = "Erro ao buscar o usuário.";
    console.error(erro);
  }
});
