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

// =====================================================
// ROTAS DA API
// =====================================================

// ROTA 1: Cachorro aleatório

app.get("/api/cachorros/aleatorio", (req, res) => {
    // req - request (requisição) - é o pedido que o cliente faz para o servidor, por exemeplo, "me mande um cachorro aleatório"
    // res - response (resposta) - é a resposta que o servidor envia para o cliente, ele envia o cachorro aleatório que foi pedido

    // pegar todas as fotos de todas as raças
    // object.values pega os valores do objeto
    // flat transforma tudo em um único array
    const todasAsFotos = Object.values(cachorros).flat();
});

// Sorteia uma foto aleatória
const item = sortear(todasAsFotos);
res.json({
    //status da resposta
    status: "sucess",
    //URL da imagem que foi sorteada
    message: `http://localhost:${PORT}/fotos/${item}`
});

// =====================================================
// ROTA 2: Cachorro por raça
// =====================================================

    // Exemplo de acesso
    // http://localhost:3000/api/cachorros/husky


app.get("/api/cachorros/:raca", (req, res) => {
    //pega o parametro da URL (ex: husky)
    const raca = req.params.raca.toLocaleLowerCase();
    //params = contém os parâmetros definidos na URL da rota
    //.raca = acessa o parâmetro "raca" definido na rota
    // toLocaleLowerCase() = transforma o valor em letras minúsculas
    if(!cachorros[raca]) {
        //cachorros[raca] = acessa o array de fotos da raça
        //!: significa "não", ou seja, se não existir a raça, retorna o erro
        // se nao existir a raça, retorna o erro 404
        res.status(404).json({
            status: "error",
            message: `Raça ${raca} não encontrada`
        })
        // encerra a execução da rota
        return;
    }

    //soretaia uma foto da raça solicitada
    const item = sortear(cachorros[raca]);

// retorna a resposta em JSON
    res.json({
        status: "sucess",
        message: `http://localhost:${PORT}/fotos/${item}`
    })

});