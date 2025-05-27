const buttons = document.querySelectorAll('.btn');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const animationDiv = document.getElementById('animation-container');

const options = ['pedra', 'papel', 'tesoura'];
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = options[Math.floor(Math.random() * 3)];
    const outcome = getOutcome(playerChoice, computerChoice);

    playAnimation(playerChoice, computerChoice, outcome);
    updateScore(outcome);
    displayResult(outcome, playerChoice, computerChoice);
  });
});

function getOutcome(player, computer) {
  if (player === computer) return 'empate';
  if (
    (player === 'pedra' && computer === 'tesoura') ||
    (player === 'papel' && computer === 'pedra') ||
    (player === 'tesoura' && computer === 'papel')
  ) {
    return 'vitoria';
  }
  return 'derrota';
}

function playAnimation(player, computer, outcome) {
  const emojis = {
    pedra: '🪨',
    papel: '📄',
    tesoura: '✂️'
  };

  let message = '';
  if (outcome === 'empate') {
    message = `Ambos escolheram ${emojis[player]}. Empate!`;
  } else if (outcome === 'vitoria') {
    message = animacaoCombate(player, computer, true);
  } else {
    message = animacaoCombate(computer, player, false);
  }

  animationDiv.innerHTML = `<div>${message}</div>`;
}

function animacaoCombate(vencedor, perdedor, playerWin) {
  const acoes = {
    pedra: { tesoura: 'quebrou' },
    papel: { pedra: 'cobriu' },
    tesoura: { papel: 'cortou' }
  };

  const emojis = {
    pedra: '🪨',
    papel: '📄',
    tesoura: '✂️'
  };

  const acao = acoes[vencedor]?.[perdedor] || 'venceu';

  const quem = playerWin ? 'Você' : 'O computador';
  return `${quem} usou ${emojis[vencedor]} e ${acao} ${emojis[perdedor]}.`;
}

function updateScore(outcome) {
  if (outcome === 'vitoria') playerScore++;
  else if (outcome === 'derrota') computerScore++;

  scoreDiv.textContent = `Você: ${playerScore} | Computador: ${computerScore}`;
}

function displayResult(outcome, player, computer) {
  const messages = {
    vitoria: 'Você ganhou!',
    derrota: 'Você perdeu!',
    empate: 'Empate!'
  };

  resultDiv.textContent = messages[outcome];
}
