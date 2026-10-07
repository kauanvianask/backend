// JSON significa Javascript Object Notation e é um formato de representação e troca

JSON É COMO FICHA DE CADASTRO.

FICHA FÍSICA:                             JSON:  
                                                                    
nome: João                                "nome": "João"
Idade: 17                                 "idade": "17"
Cidade: Guarulhos                         "cidade": "Guarulhos"

É um formato para ORGANIZAR DADOS que TODO MUNDO entende (qualquer imagem)

{
   "Cachorro": {
      "nome": "Scooby",
      "idade": 5,
      "raca": "Pastor Alemão",
      "vacinado": true,
      "peso": 20.5,
      "brinquedos": ["bola", "osso", "corda"],
      "cor": "Marrom",
      "dono": {
            "nome": "Viana",
            "idade": 17,
            "telefone": "11971064918"
            }
      }
   } 

<!-- EXPLICAÇÃO -->

// STRING (texto) - Sempre com aspas
"nome": "Scooby"
// NUMBER (Números) - Sem aspas
"idade": 5,
"peso": 20.5
// BOOLEAN (true/false)
"vacinado": true
// ARRAY (Lista) - com colchetes 
"brinquedos": ["bola", "osso", "corda"]
// OBJECT (Objeto) - Com chaves
 "dono": {
            "nome": "Viana",
            "idade": 17,
            "telefone": "11971064918"
            }
// NULL (vazio)
"dataFalecimento": null
