// Cronêmetro no terminal

//  Parte 01: Preparando o terminal
// require = "traga para cá uma ferramenta pronta"
/// readline = "é a ferramenta do Node que sabe comversar com o teclado"
const readline = require('readline');

//process.stdin.setRawMode(true) = "entrada do teclado"
//esta linha manda o Node AVISAR o programa que toda vez que o usuário apertar uma tecla"
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// MENSAGEM DE BOAS VINDAS
console.log('CRONOMÊTRO INICIADO⏱️');
console.log('p = pausar/continuar | r = resetar | Ctrl + C = sair');

// Parte 2: A memória do cronômetro

// tempo guarda quantos segundos já se passaram
let tempo = 0;

// rdado é um interruptor de luz: true = contando, false = pausando
let rodando = true;

// Parte 3: Deixando o tempo bonito (mm:ss)

function formatar(total) {
    // math.floor = "arredonda para baixo"
    const min = Math.floor(total / 60);
    const seg = total % 60;

    // string transforma o número em texto
    // padStart = "se o texto tiver menos de 2 caracteres, coloca um 0 na frente"
    return String(min).padStart(2, '0') + ':' + String(seg).padStart(2, '0');
}


// Parte 4: O ❤️ do programa

// setInterval = "a cada 1000 milissegundos (1 segundo), faça isso"
// 1000 milissegundos = 1 segundo
setInterval(() => {   
    if (rodando) {
         // se o cronômetro estiver rodando, aumenta o tempo
        tempo++;
        console.clear();
        console.log('⏱️ ' + formatar(tempo));
    
    }

}, 1000);

// Parte 5: Ouvindo teclado

process.stdin.on('keypress', (letra, tecla)=> {
    if (tecla.name === 'p'){
        // O ! INVERTE o valor:
        rodando = !rodando;
        // Operador ternario: condição ? valor_se_verdadeiro : valor_se_falso
        // é um if de uma liha só 
        console.log(rodando ? '▶️ CONTINUANDO' : '⏸️ PAUSADO');

        // Senão, foi a tecla R?
    } else if (tecla.name === 'r'){
        tempo = 0;
        console.clear();
        console.log('⏱️ ' + formatar(tempo));
        console.log('🔄 REINICIADO');
    } else if (tecla.ctrl && tecla.name === 'c'){
        console.log('\n Até mais! 👋');
        process.exit();
    }
})
    
    
