// Primeiro será criada uma função para decidir a escolha do computador, sempre retornando pedra, papel ou tesoura
let choices = ['pedra', 'papel', 'tesoura']
function getComputerChoice() {
    let randomizeChoice = Math.floor(Math.random() * choices.length);
    return randomChoice = choices[randomizeChoice];
}
// console.log(getComputerChoice());  - OK
// Depois será escrita uma função que irá jogar uma rodada, contendo 2 parametros, a escolha do jogador e a escolha do pc
// Deverá também retornar com uma string declarando o vencedor no seguinte formato: "You Lose! Paper beats Rock"
// A escolha do jogador deverá ser case-insensitive
// posiveis casos: jogador vence tesoura e ganha, jogador vence pedra e ganha, jogador vence papel e ganha, resto perde
// empate
function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === 'tesoura' && computerSelection.toLowerCase() === 'papel') ||
        (playerSelection.toLowerCase() === 'papel' && computerSelection.toLowerCase() === 'pedra') || 
        (playerSelection.toLowerCase() === 'pedra' && computerSelection.toLowerCase() === 'tesoura')) {
        return `Você ganhou! ${playerSelection} vence de ${computerSelection}.` 
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 'Você empatou! Você e o computador jogaram a mesma coisa.'
    } else {
        return `Você perdeu! ${computerSelection} vence de ${playerSelection}.`
    }
}

const playerSelection = 'papel';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
// Outra função deverá ser criada para jogar 5 rodadas do jogo. A partir desse ponto o usuário deverá escolher (use prompts)
