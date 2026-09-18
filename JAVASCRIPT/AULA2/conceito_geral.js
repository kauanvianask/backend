// Inicio Back End - Javascript

// Variáveis

//Antigo, pode ser redeclarado e mudar o valor
var nome = "Viana";
var idade = 16;
var idade = 17; //não vai gerar erro, mas vai mudar o valor da variável

//Moderno, não pode ser redeclarado, mas pode mudar o valor
let nome = "Viana";
nome = "Kauan"; //não vai gerar erro, mas vai mudar o valor da variável
// let nome = "Soares"; //vai gerar erro, pois a variável já foi declarada

//Constante, não pode ser redeclarado e nem mudar o valor
const pi = 3.14;
//pi = 3.40; //vai gerar erro, pois a constante não pode mudar o valor

//------------------------------
//Formas de escrever um codigo
//------------------------------

// Camel Case --- * A mais famosa
// - Primeira palavra minúscula, as demais palavras com a primeira letra maiúscula

// - let nomeCompleto; let idadeDoUsuario; functionCalcularIdade() {}

//----------------------------------------------------------------------------------

// pascal Case --- * A mais famosa
// - Todas as palavras com a primeira letra maiúscula
// class UsuarioSistema {
    // constructor(nome, idade) {
        //    this.nome = nome;
        //   this.idade = idade;
        //  }
        //};
//----------------------------------------------------------------------------------
// snake Case --- 
// Todas as palavras minúsculas, separadas por underline
// let nome_completo; let total_vendas;


        