const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder todas as dúvidas que uma pessoa pode ter. Ele também gera imagens e áudios hiper-realistas. Qual é seu primeiro pensamento?",
    alternativas: [
      "Isso é assustador!",
      "Isso é maravilhoso!"
    ]
  },
  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), sua professora pede um trabalho sobre o uso da IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      "Utilizo uma ferramenta de IA para encontrar informações relevantes e facilitar meu entendimento.",
      "Escrevo o trabalho com base em conversas, pesquisas na internet e conhecimentos próprios."
    ]
  },
  {
    enunciado:
      "Em um debate sobre o impacto da IA no futuro do trabalho, como você se posiciona?",
    alternativas: [
      "A IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
      "Precisamos proteger os trabalhadores que podem perder seus empregos para as máquinas."
    ]
  },
  {
    enunciado:
      "Ao final da discussão, você precisa criar uma imagem que represente o que pensa sobre a IA. O que você faz?",
    alternativas: [
      "Crio uma imagem usando uma ferramenta de design, como o Paint.",
      "Crio uma imagem utilizando um gerador de imagens de IA."
    ]
  },
  {
    enunciado:
      "Seu grupo tem um trabalho de Biologia para entregar, e uma pessoa decidiu usar IA. Porém, o texto ficou exatamente igual ao gerado pelo chat. O que você faz?",
    alternativas: [
      "Aceito o texto inteiro, pois utilizar a IA já é uma contribuição.",
      "Reviso o texto, verifico as informações e acrescento nossas próprias ideias."
    ]
  }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
  textoResultado.textContent = "";
  botaoReiniciar.hidden = true;

  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";

  mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
  perguntaAtual.alternativas.forEach((alternativa) => {
    const botao = document.createElement("button");

    botao.textContent = alternativa;

    botao.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botao);
  });
}

function respostaSelecionada(opcaoSelecionada) {
  historiaFinal += opcaoSelecionada + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  caixaAlternativas.textContent = "";

  textoResultado.textContent =
    "O futuro da Inteligência Artificial também depende das nossas escolhas. " +
    historiaFinal;

  botaoReiniciar.hidden = false;
}

function reiniciarJogo() {
  atual = 0;
  historiaFinal = "";
  mostraPergunta();
}

botaoReiniciar.addEventListener("click", reiniciarJogo);

mostraPergunta();
