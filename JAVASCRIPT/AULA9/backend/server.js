// NOSSA API DE CACHORROS

// Agora as fotos não são mais baixadas automaticamente!
// Elas DEVEM existir manualmente na pasta
// data/fotos

// Rotas:
// GET/api/cachorros/aleatorio
// GET/api/cachorros/:raca

// Importando o express para cirar o servidor
const express = require("express");
// Importar o CORS para permitir que o front-end acesse a API
const cors = require("cors");
// Importar o modulo dos arquivos do Node.js
const fs = require("fs");
// Importa ultilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças e a fotos
const cachorros = require("./data/dogs.json");
// cria a aplicação com Express 
const app = express();
// Definir a porta onde o servidor vai funcionar
const PORT = 3000;
// Habilitar i ysi di cors na aplicação
app.use(cors());

//=====================================================
// SERVIR ARQUIVOS ESTÁTICOS
//=====================================================

// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo:
// http://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data", "fotos") //caminho real da pasta do servidor
    )
)

//=====================================================
// FUNÇÕES AUXILIARES
//=====================================================

// Função que recebe um array e retorna um item aleatorio dele
function sortear(array) {
    // gera um número aleatório entre 0 e o tamanho do array 
    // array.length - conta quantos itens tem no array
    // Math.floor() - arredonda para baixo
    // Math.random() - gera um número aleatório entre 0 e 1
    // math.random() * array.length - Multiplica o número aleatório pelo tamanho do array
    const i = Math.floor(Math.random() * array.length);
    // const i = guarda a posição na variavel i
    // retorna o item sorteado
    return array[i];
}



