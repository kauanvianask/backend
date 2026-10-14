//============================================
// ELEMENTOS HTML (Ajustados com os IDs do index.html)
//============================================

const dogImage = document.getElementById("dogImage");
const breedName = document.getElementById("breedName");
const randomBtn = document.getElementById("randomBtn");
const searchBtn = document.getElementById("searchBtn");
const breedInput = document.getElementById("breedInput");
const dogArea = document.querySelector(".dog-area");

//============================================
// URL DA API
//============================================

const API = "http://localhost:3000/api/cachorros";

//============================================
// FUNÇÃO PRINCIPAL
//============================================

async function buscarCachorro(url) {
    dogArea.classList.add("loading");

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Resposta da API:", data);

        // Se a API retornar erro
        if (data.status === "error") {
            breedName.textContent = data.message;
            dogImage.src = "";
            return;
        }

        // Se a foto vier com sucesso
        dogImage.src = data.message;

        // Tenta extrair a raça a partir do caminho da URL (ex: http://localhost:3000/fotos/husky/1.jpg)
        const partes = data.message.split("/");
        // Pega a penúltima parte da URL ou o nome da foto caso não haja pasta
        const raca = partes[partes.length - 2] || partes[partes.length - 1].split(".")[0];

        if (raca && breedName) {
            breedName.textContent = raca.charAt(0).toUpperCase() + raca.slice(1);
        }

    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
        if (breedName) {
            breedName.textContent = "📳 Servidor offline - rode: node server.js";
        }
        dogImage.src = "";
    } finally {
        dogArea.classList.remove("loading");
    }
}

// ==========================================
// AÇÕES
// ==========================================

function cachorroAleatorio() {
    buscarCachorro(`${API}/aleatorio`);
}

function buscarPorRaca() {
    const raca = breedInput.value.trim().toLowerCase();

    if (!raca) {
        alert("Digite uma raça!");
        return;
    }

    buscarCachorro(`${API}/${raca}`);
}

// ==================================
// EVENTOS
// ==================================

randomBtn.addEventListener("click", cachorroAleatorio);
searchBtn.addEventListener("click", buscarPorRaca);
dogImage.addEventListener("click", cachorroAleatorio);

breedInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        buscarPorRaca();
    }
});

// CARREGA AO ABRIR A PÁGINA
cachorroAleatorio();

// No script.js antigo: document.getElementById("randomDogButton") $\rightarrow$ Isso retornava null e gerava o erro Cannot read properties of null no console.   