// NOSSA API DE CACHORROS

// Agora as fotos não são mais baixadas automaticamente!
// Elas DEVEM existir manualmente na pasta
// data/fotos

// Rotas:
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// Importando o express para criar o servidor
const express = require("express");
// Importar o CORS para permitir que o front-end acesse a API
const cors = require("cors");
// Importar o módulo de arquivos do Node.js
const fs = require("fs");
// Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças e as fotos
const cachorros = require("./data/dogs.json");

// Cria a aplicação com Express 
const app = express();
// Definir a porta onde o servidor vai funcionar
const PORT = 3000;

// Habilitar o uso do cors na aplicação
app.use(cors());

//=====================================================
// SERVIR ARQUIVOS ESTÁTICOS
//=====================================================

// Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos
// Exemplo: http://localhost:3000/fotos/husky/1.jpg
app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data", "fotos") // caminho real da pasta no servidor
    )
);

//=====================================================
// FUNÇÕES AUXILIARES
//=====================================================

// Função que recebe um array e retorna um item aleatório dele
function sortear(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

// =====================================================
// ROTAS DA API
// =====================================================

// ROTA 1: Cachorro aleatório
app.get("/api/cachorros/aleatorio", (req, res) => {
    // Pegar todas as fotos de todas as raças
    // Object.values pega os arrays de fotos e flat() transforma tudo em um único array
    const todasAsFotos = Object.values(cachorros).flat();

    // Sorteia uma foto aleatória
    const item = sortear(todasAsFotos);

    // Retorna a resposta em JSON
    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// ROTA 2: Cachorro por raça
// Exemplo: http://localhost:3000/api/cachorros/husky
app.get("/api/cachorros/:raca", (req, res) => {
    // Pega o parâmetro da URL (ex: husky) e converte para minúsculo
    const raca = req.params.raca.toLowerCase();

    // Se a raça não existir no arquivo JSON, retorna erro 404
    if (!cachorros[raca]) {
        res.status(404).json({
            status: "error",
            message: `Raça ${raca} não encontrada`
        });
        return;
    }

    // Sorteia uma foto da raça solicitada
    const item = sortear(cachorros[raca]);

    // Retorna a resposta em JSON
    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// =====================================================
// INICIA O SERVIDOR
// =====================================================

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📂 Coloque as fotos manualmente em: data/fotos/`);
});

