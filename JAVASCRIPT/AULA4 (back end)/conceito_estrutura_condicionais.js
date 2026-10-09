// Estrutura Condicionais (Tomando Decisões)
// As estruturas condicionais permitem executar diferentes blocos de código depedendo de uma condição

//if/else - Condicionais
// If - verifica se uma condição é verdadeira e executa o código dentro dele, se a condição for falsa, o else pode executar outro bloco de código

let idade = 18

if (idade >= 18){
    console.log("Você é maior de idade");
} else{
    console.log("Você é menor de idade");
}

// IF,ELSE IF, ELSE (multiplas condições)

let idade2 = 16

if (idade2 <12){
    console.log("Você é uma criaça👶🏽");
} else if(idade2 < 18) {
    console.log("Você é um adolescente 👦🏽");
} else {
    console.log("Você é um adulto🧑🏽");
    
}
