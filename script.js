const opcoes = ['pedra', 'papel', 'tesoura'];
let scorePlayer = 0;
let scoreComputer = 0;

const playerChoiceBox = document.getElementById('player-choice');
const computerChoiceBox = document.getElementById('computer-choice');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

function play(jogador) {
  const computador = opcoes[Math.floor(Math.random() * 3)];

  mostrarEscolhas(jogador, computador);
  const resultado = determinarResultado(jogador, computador);
  exibirResultado(resultado, jogador, computador);
}

function mostrarEscolhas(jogador, computador) {
  const emojis = {
    pedra: '🪨',
    papel: '📄',
    tesoura: '✂️'
  };

  playerChoiceBox.textContent = emojis[jogador];
  computerChoiceBox.textContent = emojis[computador];

  playerChoiceBox.classList.add('animar');
  computerChoiceBox.classList.add('animar');

  setTimeout(() => {
    playerChoiceBox.classList.remove('animar');
    computerChoiceBox.classList.remove('animar');
  }, 500);
}

function determinarResultado(j, c) {
  if (j === c) return 'Empate!';
  if (
    (j === 'pedra' && c === 'tesoura') ||
    (j === 'papel' && c === 'pedra') ||
    (j === 'tesoura' && c === 'papel')
  ) {
    scorePlayer++;
    return 'Você ganhou!';
  } else {
    scoreComputer++;
    return 'Você perdeu!';
  }
}

function exibirResultado(texto, j, c) {
  let efeito = '';

  if (texto === 'Empate!') {
    efeito = `Ambos escolheram ${j}.`;
  } else if (texto === 'Você ganhou!') {
    efeito = efeitoVitoria(j, c);
  } else {
    efeito = efeitoVitoria(c, j); // Invertido para mostrar o que o computador fez
  }

  resultDiv.textContent = `${texto} ${efeito}`;
  scoreDiv.textContent = `Você: ${scorePlayer} | Computador: ${scoreComputer}`;
}

function efeitoVitoria(vencedor, perdedor) {
  if (vencedor === 'pedra' && perdedor === 'tesoura') return 'A pedra quebrou a tesoura.';
  if (vencedor === 'papel' && perdedor === 'pedra') return 'O papel cobriu a pedra.';
  if (vencedor === 'tesoura' && perdedor === 'papel') return 'A tesoura cortou o papel.';
  return '';
}
