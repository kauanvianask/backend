// Selecionando elementos

// Selecionando por ID
let Titulo = document.getElementById("Titulo");
let Subtitulo = document.getElementById("Subtitulo");
let Paragrafo = document.getElementById("Paragrafo");
let imagem = document.getElementById("Imageteste");
let caixas = document.getElementsByClassName("box");

console.log(Titulo);
console.log(Subtitulo);
console.log(Paragrafo);
console.log(imagem);

// Função para alterar conteúdo
function alterar() {
    Titulo.innerHTML = "Gaviões LHP🦅";
    Subtitulo.innerText = "Leal - Humildade - Procedimento";
    Paragrafo.innerText = "LHP é a sigla para Lealdade, Humildade e Procedimento, o lema oficial e a base ideológica da Gaviões da Fiel, maior torcida organizada do mundo. Funciona como um código de conduta que orienta o comportamento dos seus membros dentro e fora dos estádios. A Lealdade representa a fidelidade ao clube, aos companheiros e aos próprios valores; a Humildade reforça o respeito ao próximo e a preservação das raízes populares; e o Procedimento dita a postura correta, a retidão e a atitude diante da vida. Juntos, esses pilares formam uma filosofia urbana de união e respeito mútuo.";

    // Alterando elemento da classe
    caixas[0].innerText = "Primeiro parágrafo alterado";
    caixas[1].innerText = "Segundo parágrafo alterado";

    // Alterando imagem (
    imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHt7P7IG_1n6h17hMduRQb4wg2dPAmLuImHKf1tMHGs85ifIrpd5iQ7Zjr&s=10";
}

