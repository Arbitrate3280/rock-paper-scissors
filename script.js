// Primeiro será criada uma função para decidir a escolha do computador, sempre retornando pedra, papel ou tesoura - OK
function getComputerChoice() {
    let choices = ['pedra', 'papel', 'tesoura']
    let randomizeChoice = Math.floor(Math.random() * choices.length);
    return randomChoice = choices[randomizeChoice];
}
// Depois será escrita uma função que irá jogar uma rodada, contendo 2 parametros, a escolha do jogador e a escolha do pc
// Deverá também retornar com uma string declarando o vencedor no seguinte formato: "You Lose! Paper beats Rock"
// A escolha do jogador deverá ser case-insensitive
// posiveis casos: jogador vence tesoura e ganha, jogador vence pedra e ganha, jogador vence papel e ganha, resto perde
// empate 
// Jogador não coloca algo válido
function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === 'tesoura' && computerSelection.toLowerCase() === 'papel') ||
        (playerSelection.toLowerCase() === 'papel' && computerSelection.toLowerCase() === 'pedra') || 
        (playerSelection.toLowerCase() === 'pedra' && computerSelection.toLowerCase() === 'tesoura')) {
        return `Você ganhou! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} vence de ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`; 
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 'Empate! Você e o computador jogaram a mesma coisa.';
    } else if ((playerSelection.toLowerCase() !== 'pedra') && (playerSelection.toLowerCase() !== 'papel') && (playerSelection.toLowerCase() !== 'tesoura')) {
        return 'ERRO! Você não escolheu uma jogada válida.';
    } else {
        return `Você perdeu! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} vence de ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`;
    }
}
// Outra função deverá ser criada para jogar 5 rodadas do jogo. A partir desse ponto o usuário deverá escolher (use prompts). 
// Primeiro um loop até que sejam jogadas 5 rodadas
// Vencedor de cada rodada será mostrado com console.log
// Cada rodada deverá ser contabilizada
// Ao finalizar a 5 rodada aparecerá uma mensagem declarando o vencedor e mostrando o placar.
function game() {
    let playerScore = 0;
    let computerScore = 0; 
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Pedra, Papel ou Tesoura?")
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection).includes('ganhou')) {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection).includes('perdeu')) {
            computerScore++;
        }
        console.log(`Jogador: ${playerScore} x Computador: ${computerScore}`)
    }
    let result = (playerScore > computerScore) ? 
        'Resultado: Parabéns! Você venceu o computador!' : 
        (playerScore < computerScore) ? 'Resultado: Que pena! Você perdeu do computador!' : 'Resultado: Você empatou com o computador.'
    console.log(result);
}

game();