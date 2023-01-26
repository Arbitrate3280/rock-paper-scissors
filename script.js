// Primeiro será criada uma função para decidir a escolha do computador, sempre retornando pedra, papel ou tesoura
let choices = ['Pedra', 'Papel', 'Tesoura']
function getComputerChoice() {
    let randomizeChoice = Math.floor(Math.random() * choices.length);
    return randomChoice = choices[randomizeChoice];
}
// console.log(getComputerChoice());  - OK
// Depois será escrita uma função que irá jogar uma rodada, contendo 2 parametros, a escolha do jogador e a escolha do pc

// Deverá também retornar com uma string declarando o vencedor no seguinte formato: "You Lose! Paper beats Rock"
// A escolha do jogador deverá ser case-insensitive
// Outra função deverá ser criada para jogar 5 rodadas do jogo. A partir desse ponto o usuário deverá escolher (use prompts)
