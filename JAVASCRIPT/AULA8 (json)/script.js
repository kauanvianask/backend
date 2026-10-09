// API DE FOTOS DE CACHORROS
// ENDEREÇO da API que vamos utilizar
const url = 'https://dog.ceo/api/breeds/image/random';

// Pegando os elementos do HTML
const fotoCachorro = document.getElementById('fotoCachorro');

// - Botão pelo seu ID
const btnGerarFoto = document.getElementById('btnNovaFoto');

// ===================================
// FUNÇÃO PARA PEGAR UMA NOVA FOTO 
// ===================================

async function buscarFoto() {
    // Fazendo a requisição para a API
    const resposta = await fetch(url);
    // converter a resposta da API para JSON
    const dados = await resposta.json();
    //mostrar no console os dados que vieram da API
    console.log(dados);
    //alterarmos o endereço da imagem para a nova foto que veio da API
    fotoCachorro.src = dados.message;
}

// ===================================
// Botão
// ===================================

// Quandoo usuário clicar no botão, vamos chamar a função buscarFoto()
btnNovaFoto.addEventListener('click', buscarFoto);

// Quando a página carregar, vamos chamar a função buscarFoto() para já mostrar uma foto de cachorro
buscarFoto();