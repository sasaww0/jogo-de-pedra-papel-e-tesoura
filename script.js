const opcoes = ['pedra', 'papel', 'tesoura'];
let scorePlayer = 0;
let scoreComputer = 0;

function play(escolhaJogador) {
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
  let resultado = '';

  if (escolhaJogador === escolhaComputador) {
    resultado = 'Empate!';
  } else if (
    (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
  ) {
    resultado = 'Você ganhou!';
    scorePlayer++;
  } else {
    resultado = 'Você perdeu!';
    scoreComputer++;
  }

  document.getElementById('result').innerText =
    `Você escolheu ${escolhaJogador}, o computador escolheu ${escolhaComputador}. ${resultado}`;
  document.getElementById('score').innerText =
    `Você: ${scorePlayer} | Computador: ${scoreComputer}`;
}
