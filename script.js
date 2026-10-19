const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Ao sair da escola, você se depara com uma nova tecnologia, um chat que consegue responder dúvidas e gerar imagens e áudios realistas. Qual é seu primeiro pensamento?",
    alternativas: [
      "Isso é assustador!",
      "Isso é maravilhoso!"
    ],
  },
  {
    enunciado:
      "Sua professora pede um trabalho sobre o uso da IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      "Utilizo uma ferramenta de IA para encontrar informações e facilitar meu entendimento.",
      "Escrevo com base nas minhas conversas, pesquisas e conhecimentos."
    ],
  },
  {
    enunciado:
      "Em um debate sobre o futuro do trabalho, como você se posiciona?",
    alternativas: [
      "A IA pode criar novas oportunidades e melhorar habilidades humanas.",
      "Precisamos proteger os trabalhadores que podem perder seus empregos."
    ],
  },
  {
    enunciado:
      "Você precisa criar uma imagem que represente sua opinião sobre a IA. O que faz?",
    alternativas: [
      "Crio uma imagem usando uma ferramenta de design, como o Paint.",
      "Crio uma imagem utilizando um gerador de imagens de IA."
    ],
  },
  {
    enunciado:
      "Seu grupo usa IA para fazer um trabalho, mas o texto ficou igual ao gerado pelo chat. O que você faz?",
    alternativas: [
      "Aceito o texto inteiro, pois utilizar a IA já é uma contribuição.",
      "Reviso o texto, verifico as informações e acrescento nossas próprias ideias."
    ],
  },
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
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
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");

    botaoAlternativas.textContent = alternativa;

    botaoAlternativas.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  historiaFinal += opcaoSelecionada + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
