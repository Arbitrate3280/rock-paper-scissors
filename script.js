// Primeiro será criada uma função para decidir a escolha do computador, sempre retornando pedra, papel ou tesoura - OK
let choices = ['pedra', 'papel', 'tesoura']
function getComputerChoice() {
    let randomizeChoice = Math.floor(Math.random() * choices.length);
    return randomChoice = choices[randomizeChoice];
}
// console.log(getComputerChoice());  - 
// Depois será escrita uma função que irá jogar uma rodada, contendo 2 parametros, a escolha do jogador e a escolha do pc
// Deverá também retornar com uma string declarando o vencedor no seguinte formato: "You Lose! Paper beats Rock"
// A escolha do jogador deverá ser case-insensitive
// posiveis casos: jogador vence tesoura e ganha, jogador vence pedra e ganha, jogador vence papel e ganha, resto perde
// empate - OK
function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === 'tesoura' && computerSelection.toLowerCase() === 'papel') ||
        (playerSelection.toLowerCase() === 'papel' && computerSelection.toLowerCase() === 'pedra') || 
        (playerSelection.toLowerCase() === 'pedra' && computerSelection.toLowerCase() === 'tesoura')) {
        return `Você ganhou! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} vence de ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.` 
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 'Empate! Você e o computador jogaram a mesma coisa.'
    } else {
        return `Você perdeu! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} vence de ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`
    }
}

// const playerSelection = 'papel';
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))
// Outra função deverá ser criada para jogar 5 rodadas do jogo. A partir desse ponto o usuário deverá escolher (use prompts)
