const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaFeedback = document.querySelector(".caixa-feedback");
const textoFeedback = document.querySelector(".texto-feedback");
const botaoProxima = document.querySelector(".botao-proxima");

const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const resumoEscolhas = document.querySelector(".resumo-escolhas");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

const progresso = document.querySelector(".progresso");
const numeroPergunta = document.querySelector("#numero-pergunta");
const porcentagem = document.querySelector("#porcentagem");
const barraProgresso = document.querySelector(".barra-progresso-preenchida");

const perguntas = [
  {
    enunciado:
      "Assim que sai da escola, você se depara com uma nova tecnologia: um chat capaz de responder dúvidas e gerar imagens e áudios hiper-realistas. Qual é seu primeiro pensamento?",

    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao:
          "Você demonstra cautela diante de uma tecnologia nova. Questionar os riscos da Inteligência Artificial é importante, pois precisamos avaliar a privacidade, a desinformação e os possíveis impactos antes de confiar nela."
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao:
          "Você demonstra entusiasmo com as possibilidades da tecnologia! A Inteligência Artificial pode ajudar na educação, na criatividade e na solução de problemas. O importante é aproveitar seus benefícios sem deixar de avaliar seus riscos."
      }
    ]
  },

  {
    enunciado:
      "Sua professora de tecnologia pede um trabalho sobre o uso da Inteligência Artificial em sala de aula. Qual atitude você toma?",

    alternativas: [
      {
        texto:
          "Utilizo uma ferramenta de IA para encontrar informações e entender melhor o assunto.",
        afirmacao:
          "Ótima iniciativa! A IA pode ser uma ferramenta útil para aprender e pesquisar. Para utilizá-la de forma responsável, confira as informações em fontes confiáveis e escreva o trabalho com suas próprias palavras."
      },
      {
        texto:
          "Faço o trabalho com minhas pesquisas, meus conhecimentos e as conversas com meus colegas.",
        afirmacao:
          "Você valoriza o pensamento próprio e a colaboração! Pesquisar, conversar e organizar suas ideias ajuda a desenvolver sua autonomia. Você também pode utilizar ferramentas tecnológicas como apoio, sem depender delas para pensar."
      }
    ]
  },

  {
    enunciado:
      "Durante um debate na escola, a turma discute como a Inteligência Artificial pode afetar os empregos do futuro. Como você se posiciona?",

    alternativas: [
      {
        texto:
          "A IA pode criar oportunidades de emprego e melhorar as habilidades humanas.",
        afirmacao:
          "Você enxerga as oportunidades da inovação! A IA pode criar novas profissões, facilitar tarefas e ampliar capacidades humanas. Para que esses benefícios sejam compartilhados, também é importante investir em educação e qualificação profissional."
      },
      {
        texto:
          "Precisamos proteger os trabalhadores que podem perder seus empregos para as máquinas.",
        afirmacao:
          "Você demonstra preocupação com a justiça social! A automação pode transformar profissões e prejudicar trabalhadores. A preparação para essas mudanças, a qualificação e políticas de proteção podem ajudar a tornar essa transição mais justa."
      }
    ]
  },

  {
    enunciado:
      "Você precisa criar uma imagem no computador que represente sua opinião sobre a Inteligência Artificial. O que você faz?",

    alternativas: [
      {
        texto:
          "Crio uma imagem utilizando uma ferramenta de design, como o Paint.",
        afirmacao:
          "Você escolheu desenvolver sua própria criação com uma ferramenta de design! Isso permite exercitar a criatividade e tomar decisões sobre cada detalhe da imagem. Ferramentas tradicionais continuam tendo muito valor no mundo digital."
      },
      {
        texto:
          "Crio uma imagem utilizando um gerador de imagens de Inteligência Artificial.",
        afirmacao:
          "Você decidiu experimentar uma nova possibilidade criativa! Os geradores de imagens podem ajudar a transformar ideias em imagens. É importante verificar as regras de uso, respeitar os direitos autorais e refletir sobre como a imagem foi produzida."
      }
    ]
  },

  {
    enunciado:
      "Seu grupo tem um trabalho de Biologia para entregar, e uma pessoa utiliza IA para escrever o texto inteiro. O resultado ficou exatamente igual ao gerado pelo chat. O que você faz?",

    alternativas: [
      {
        texto:
          "Aceito o texto inteiro, pois utilizar a IA já é uma contribuição para o trabalho.",
        afirmacao:
          "A IA pode ajudar bastante, mas aceitar um texto sem verificar seu conteúdo traz riscos. O texto pode conter erros e não representar o conhecimento do grupo. O melhor é conferir as informações, compreender o assunto e assumir a responsabilidade pelo trabalho."
      },
      {
        texto:
          "Reviso o texto, verifico as informações e acrescento as ideias do grupo.",
        afirmacao:
          "Excelente atitude! Você combina as possibilidades da tecnologia com o pensamento crítico e a colaboração. Revisar, verificar informações e contribuir com suas próprias ideias torna o trabalho mais confiável e ajuda todos a aprender."
      }
    ]
  }
];

let atual = 0;
let escolhas = [];

function atualizarProgresso() {
  const total = perguntas.length;
  const numeroAtual = Math.min(atual + 1, total);
  const percentual = Math.round((atual / total) * 100);

  numeroPergunta.textContent =
    `Pergunta ${numeroAtual} de ${total}`;

  porcentagem.textContent = `${percentual}%`;
  barraProgresso.style.width = `${percentual}%`;
}

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];

  caixaResultado.hidden = true;
  caixaFeedback.hidden = true;
  caixaAlternativas.hidden = false;

  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.replaceChildren();

  botaoProxima.textContent =
    atual === perguntas.length - 1
      ? "Ver resultado →"
      : "Próxima pergunta →";

  atualizarProgresso();

  perguntaAtual.alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement("button");

    const letra = document.createElement("span");
    letra.className = "letra-alternativa";
    letra.textContent = String.fromCharCode(65 + indice);

    const texto = document.createElement("span");
    texto.textContent = alternativa.texto;

    botao.append(letra, texto);

    botao.addEventListener("click", () => {
      selecionarAlternativa(alternativa);
    });

    caixaAlternativas.appendChild(botao);
  });
}

function selecionarAlternativa(alternativa) {
  escolhas[atual] = alternativa;

  caixaAlternativas.hidden = true;
  caixaFeedback.hidden = false;

  textoFeedback.textContent = alternativa.afirmacao;
}

function proximaPergunta() {
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "";
  caixaAlternativas.hidden = true;
  caixaFeedback.hidden = true;
  progresso.hidden = true;

  caixaResultado.hidden = false;
  resumoEscolhas.replaceChildren();

  textoResultado.textContent =
    "Ao longo desta jornada, você refletiu sobre os riscos, as oportunidades e a responsabilidade no uso da Inteligência Artificial. O futuro não depende apenas da tecnologia, mas também das decisões das pessoas que a desenvolvem e utilizam.";

  escolhas.forEach((escolha, indice) => {
    const item = document.createElement("article");
    item.className = "item-resumo";

    const titulo = document.createElement("strong");
    titulo.textContent = `Pergunta ${indice + 1}: ${escolha.texto}`;

    const mensagem = document.createElement("p");
    mensagem.textContent = escolha.afirmacao;

    item.append(titulo, mensagem);
    resumoEscolhas.appendChild(item);
  });

  barraProgresso.style.width = "100%";
  porcentagem.textContent = "100%";
  numeroPergunta.textContent = "Jornada concluída";
}

function reiniciarJogo() {
  atual = 0;
  escolhas = [];

  progresso.hidden = false;
  mostraPergunta();
}

botaoProxima.addEventListener("click", proximaPergunta);
botaoReiniciar.addEventListener("click", reiniciarJogo);

mostraPergunta();
