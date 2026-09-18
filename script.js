/* =========================================================
GROOMING — SCRIPT PRINCIPAL
========================================================= */

/* =========================================================
PERGUNTAS
========================================================= */

const perguntas = [

{
    pergunta: "O que é grooming no contexto de abuso contra crianças e adolescentes?",
    alternativas: [
        "Um processo de aproximação e manipulação usado para ganhar a confiança da vítima e facilitar uma situação de abuso.",
        "Uma amizade saudável construída entre adolescentes que possuem interesses em comum.",
        "Uma técnica de estudo usada para melhorar a concentração de adolescentes.",
        "Uma forma de comunicação usada exclusivamente para fazer novas amizades pela internet."
    ],
    correta: 0,
    explicacao:
        "O grooming envolve aproximação, construção de confiança e manipulação com a finalidade de facilitar uma situação de abuso."
},

{
    pergunta: "Em quais situações o grooming pode acontecer?",
    alternativas: [
        "Somente em redes sociais e aplicativos de mensagens.",
        "Somente quando a vítima conhece pessoalmente o abusador antes da aproximação.",
        "Tanto em interações online quanto em situações presenciais.",
        "Somente em situações nas quais existe uma relação familiar entre as pessoas."
    ],
    correta: 2,
    explicacao:
        "O grooming pode acontecer pela internet ou presencialmente, dependendo da forma de aproximação e manipulação."
},

{
    pergunta: "Como uma pessoa que pratica grooming pode iniciar a aproximação com um adolescente?",
    alternativas: [
        "Criando proximidade e demonstrando atenção para estabelecer confiança.",
        "Revelando imediatamente toda a intenção de cometer um abuso.",
        "Evitando qualquer contato até receber informações pessoais da vítima.",
        "Fazendo ameaças desde o primeiro contato em todas as situações."
    ],
    correta: 0,
    explicacao:
        "A criação de proximidade e confiança pode fazer parte do processo gradual de grooming."
},

{
    pergunta: "Por que conquistar a confiança da vítima pode ser importante para quem pratica grooming?",
    alternativas: [
        "Porque a confiança pode facilitar a influência e diminuir a percepção de que existe uma situação de risco.",
        "Porque a confiança impede qualquer possibilidade de manipulação posterior.",
        "Porque uma relação de confiança significa que o comportamento do adulto é sempre seguro.",
        "Porque a vítima passa automaticamente a aceitar qualquer pedido feito pelo outro."
    ],
    correta: 0,
    explicacao:
        "A confiança pode tornar a manipulação mais eficaz e fazer com que comportamentos inadequados sejam mais difíceis de reconhecer."
},

{
    pergunta: "Qual situação representa melhor uma forma de manipulação que pode aparecer durante o grooming?",
    alternativas: [
        "A pessoa respeita os limites do adolescente e aceita qualquer resposta sem pressão.",
        "A pessoa cria dependência emocional e tenta fazer o adolescente acreditar que precisa daquela relação.",
        "A pessoa incentiva o adolescente a conversar com adultos de confiança sobre a relação.",
        "A pessoa mantém uma relação transparente sem tentar controlar as escolhas do adolescente."
    ],
    correta: 1,
    explicacao:
        "Criar dependência emocional pode aumentar a influência sobre a vítima e dificultar que ela reconheça ou interrompa a situação."
},

{
    pergunta: "Por que o grooming pode ser difícil de perceber enquanto está acontecendo?",
    alternativas: [
        "Porque a manipulação pode acontecer gradualmente e começar com comportamentos aparentemente positivos.",
        "Porque o grooming sempre acontece sem nenhuma forma de comunicação.",
        "Porque adolescentes nunca conseguem reconhecer comportamentos inadequados.",
        "Porque qualquer relação de amizade entre adolescente e adulto é grooming."
    ],
    correta: 0,
    explicacao:
        "A aproximação gradual pode fazer com que a situação inicialmente pareça normal ou até positiva, dificultando o reconhecimento da manipulação."
},

{
    pergunta: "Qual é o possível papel do segredo dentro de uma situação de grooming?",
    alternativas: [
        "Pode ser usado para afastar a vítima de pessoas que poderiam perceber ou interromper a situação.",
        "Serve sempre para proteger a vítima de qualquer perigo externo.",
        "Garante que a relação seja saudável e baseada em confiança.",
        "Impede qualquer tipo de influência sobre a vítima."
    ],
    correta: 0,
    explicacao:
        "A exigência de segredo pode contribuir para o isolamento e dificultar que outras pessoas percebam o que está acontecendo."
},

{
    pergunta: "Qual situação pode ser um sinal de alerta relacionado ao grooming?",
    alternativas: [
        "Um adulto incentiva o adolescente a conversar com seus responsáveis quando algo o deixa desconfortável.",
        "Uma pessoa insiste em manter uma relação escondida e tenta impedir que o adolescente conte a alguém.",
        "Um professor orienta o adolescente a procurar ajuda quando tiver dúvidas.",
        "Um responsável conversa abertamente com o adolescente sobre limites e segurança."
    ],
    correta: 1,
    explicacao:
        "A insistência em segredo e a tentativa de afastar o adolescente de pessoas de confiança podem ser sinais de alerta."
},

{
    pergunta: "Se um adolescente perceber que uma pessoa está tentando manipulá-lo ou fazendo pedidos que causam desconforto, qual atitude é mais adequada?",
    alternativas: [
        "Continuar a conversa sozinho para descobrir até onde a pessoa pretende chegar.",
        "Esconder a situação para não causar problemas para outras pessoas.",
        "Interromper a interação quando possível e procurar um adulto de confiança para pedir ajuda.",
        "Aceitar os pedidos para evitar que a pessoa fique irritada."
    ],
    correta: 2,
    explicacao:
        "Interromper a situação e procurar apoio ajuda a reduzir o isolamento e permite que outras pessoas contribuam para a proteção."
},

{
    pergunta: "Por que aprender sobre grooming pode ajudar na prevenção do abuso?",
    alternativas: [
        "Porque reconhecer estratégias de manipulação pode facilitar a identificação de sinais de alerta e a busca por ajuda.",
        "Porque conhecer o termo garante que uma pessoa nunca será vítima de abuso.",
        "Porque todo contato com desconhecidos é automaticamente uma situação de grooming.",
        "Porque o grooming pode ser identificado apenas quando ocorre uma ameaça explícita."
    ],
    correta: 0,
    explicacao:
        "Conhecer o processo de grooming ajuda a compreender estratégias de manipulação, reconhecer sinais de alerta e procurar apoio."
}

];

/* =========================================================
VARIÁVEIS
========================================================= */

let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;

/* =========================================================
TROCAR DE TELA
========================================================= */

function mostrarTela(id) {

const secoes =
    document.querySelectorAll("main > section");

secoes.forEach(function (secao) {
    secao.classList.add("escondido");
});

const tela =
    document.getElementById(id);

if (!tela) {
    console.error("Tela não encontrada:", id);
    return;
}

tela.classList.remove("escondido");

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

reagirNox();

}

/* =========================================================
VOLTAR AO INÍCIO
========================================================= */

function mostrarInicio() {
mostrarTela("inicio");
}

/* =========================================================
INICIAR QUIZ
========================================================= */

function iniciarQuiz() {

perguntaAtual = 0;
pontuacao = 0;
respondeu = false;

const perguntaArea =
    document.querySelector(".pergunta-area");

const resultadoFinal =
    document.getElementById("resultadoFinal");

if (perguntaArea) {
    perguntaArea.classList.remove("escondido");
}

if (resultadoFinal) {
    resultadoFinal.classList.add("escondido");
}

mostrarTela("quiz");

carregarPergunta();

}

/* =========================================================
CARREGAR PERGUNTA
========================================================= */

function carregarPergunta() {

const pergunta =
    perguntas[perguntaAtual];

if (!pergunta) {
    mostrarResultadoFinal();
    return;
}

respondeu = false;

const elementoPergunta =
    document.getElementById("pergunta");

const alternativas =
    document.getElementById("alternativas");

const feedback =
    document.getElementById("feedback");

const resultadoFinal =
    document.getElementById("resultadoFinal");

const progresso =
    document.getElementById("progresso");

const barra =
    document.getElementById("barra");

const perguntaArea =
    document.querySelector(".pergunta-area");

elementoPergunta.textContent =
    pergunta.pergunta;

progresso.textContent =
    `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

const porcentagem =
    ((perguntaAtual + 1) /
    perguntas.length) * 100;

barra.style.width =
    `${porcentagem}%`;

alternativas.innerHTML = "";

feedback.classList.add("escondido");

feedback.classList.remove(
    "certo",
    "errado"
);

resultadoFinal.classList.add("escondido");

perguntaArea.classList.remove("escondido");

const botaoProxima =
    document.getElementById("botaoProxima");

if (botaoProxima) {

    botaoProxima.textContent =
        perguntaAtual === perguntas.length - 1
            ? "VER RESULTADO →"
            : "PRÓXIMA PERGUNTA →";
}

pergunta.alternativas.forEach(
    function (texto, indice) {

        const botao =
            document.createElement("button");

        botao.type = "button";

        botao.className =
            "alternativa";

        const letra =
            document.createElement("span");

        letra.className =
            "letra";

        letra.textContent =
            String.fromCharCode(
                65 + indice
            );

        const textoResposta =
            document.createElement("span");

        textoResposta.textContent =
            texto;

        botao.appendChild(letra);
        botao.appendChild(textoResposta);

        botao.addEventListener(
            "click",
            function () {
                verificarResposta(indice);
            }
        );

        alternativas.appendChild(botao);
    }
);

reagirNox();

}

/* =========================================================
VERIFICAR RESPOSTA
========================================================= */

function verificarResposta(indice) {

if (respondeu) {
    return;
}

respondeu = true;

const pergunta =
    perguntas[perguntaAtual];

const botoes =
    document.querySelectorAll(".alternativa");

const feedback =
    document.getElementById("feedback");

const resultado =
    document.getElementById("resultado");

const explicacao =
    document.getElementById("explicacao");

botoes.forEach(
    function (botao) {

        botao.disabled = true;
        botao.style.pointerEvents = "none";

    }
);

if (indice === pergunta.correta) {

    pontuacao++;

    botoes[indice]
        .classList
        .add("correta");

    resultado.textContent =
        "Muito bem!";

    feedback.classList.remove("errado");
    feedback.classList.add("certo");

    reagirNox("feliz");

}

else {

    botoes[indice]
        .classList
        .add("errada");

    botoes[pergunta.correta]
        .classList
        .add("correta");

    resultado.textContent =
        "Resposta incorreta!";

    feedback.classList.remove("certo");
    feedback.classList.add("errado");

    reagirNox("surpreso");
}

explicacao.textContent =
    pergunta.explicacao;

feedback.classList.remove("escondido");

setTimeout(
    function () {

        feedback.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    },
    180
);

}

/* =========================================================
PRÓXIMA PERGUNTA
========================================================= */

function proximaPergunta() {

if (!respondeu) {
    return;
}

perguntaAtual++;

if (
    perguntaAtual >=
    perguntas.length
) {

    mostrarResultadoFinal();

    return;
}

carregarPergunta();

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

}

/* =========================================================
RESULTADO FINAL
========================================================= */

function mostrarResultadoFinal() {

const alternativas =
    document.getElementById("alternativas");

const perguntaArea =
    document.querySelector(".pergunta-area");

const feedback =
    document.getElementById("feedback");

const resultadoFinal =
    document.getElementById("resultadoFinal");

const progresso =
    document.getElementById("progresso");

const barra =
    document.getElementById("barra");

const pontuacaoFinal =
    document.getElementById("pontuacaoFinal");

const barraResultado =
    document.getElementById("barraResultado");

const mensagemFinal =
    document.getElementById("mensagemFinal");

alternativas.innerHTML = "";

perguntaArea.classList.add("escondido");

feedback.classList.add("escondido");

resultadoFinal.classList.remove("escondido");

progresso.textContent =
    "Quiz concluído";

barra.style.width =
    "100%";

const porcentagem =
    Math.round(
        (pontuacao /
        perguntas.length) *
        100
    );

pontuacaoFinal.textContent =
    `Você acertou ${pontuacao} de ${perguntas.length} perguntas (${porcentagem}%).`;

barraResultado.style.width =
    `${porcentagem}%`;

if (porcentagem === 100) {

    mensagemFinal.textContent =
        "Excelente! Você demonstrou que entendeu muito bem o tema.";

}

else if (porcentagem >= 70) {

    mensagemFinal.textContent =
        "Muito bom! Você já conhece informações importantes para reconhecer situações de risco.";

}

else if (porcentagem >= 50) {

    mensagemFinal.textContent =
        "Você já aprendeu alguns pontos importantes. Vale a pena revisar o conteúdo e tentar novamente.";

}

else {

    mensagemFinal.textContent =
        "Continue aprendendo. Conhecer o tema ajuda a reconhecer situações de risco e procurar ajuda.";
}

reagirNox("feliz");

resultadoFinal.scrollIntoView({
    behavior: "smooth",
    block: "start"
});

}

/* =========================================================
REFAZER QUIZ
========================================================= */

function refazerQuiz() {
iniciarQuiz();
}

/* =========================================================
NOX
========================================================= */

const nox =
document.getElementById("nox");

const falaMascote =
document.getElementById("falaMascote");

let ultimoPiscar =
Date.now();

let proximoPiscar =
tempoPiscar();

function tempoPiscar() {

return (
    2000 +
    Math.random() * 3000
);

}

/* =========================================================
PISCAR
========================================================= */

function verificarPiscar() {

if (!nox) {
    return;
}

const agora =
    Date.now();

if (
    agora - ultimoPiscar >=
    proximoPiscar
) {

    piscar();

    ultimoPiscar =
        agora;

    proximoPiscar =
        tempoPiscar();
}

}

function piscar() {

if (!nox) {
    return;
}

nox.classList.remove("piscando");

void nox.offsetWidth;

nox.classList.add("piscando");

setTimeout(
    function () {

        nox.classList.remove("piscando");

    },
    220
);

if (
    Math.random() < .16
) {

    setTimeout(
        function () {

            piscar();

        },
        330
    );
}

}

setInterval(
verificarPiscar,
100
);

/* =========================================================
ESTADOS
========================================================= */

function limparEstadoNox() {

if (!nox) {
    return;
}

nox.classList.remove(
    "estado-feliz",
    "estado-surpreso",
    "estado-confuso"
);

}

function reagirNox(
tipo = "normal"
) {

if (!nox) {
    return;
}

limparEstadoNox();

if (tipo === "feliz") {

    nox.classList.add("estado-feliz");

    nox.dataset.state =
        "HAPPY";

    falarNox(
        "Boa! Você está mandando bem."
    );

}

else if (
    tipo === "surpreso"
) {

    nox.classList.add("estado-surpreso");

    nox.dataset.state =
        "SURPRISED";

    falarNox(
        "Hmm... vamos prestar atenção nisso."
    );

}

else if (
    tipo === "confuso"
) {

    nox.classList.add("estado-confuso");

    nox.dataset.state =
        "CURIOUS";

}

else {

    nox.dataset.state =
        "IDLE";
}

}

/* =========================================================
FALA DO NOX
========================================================= */

let timeoutFala;

function falarNox(texto) {

if (!falaMascote) {
    return;
}

clearTimeout(timeoutFala);

falaMascote.textContent =
    texto;

falaMascote.classList.add("visivel");

timeoutFala =
    setTimeout(
        function () {

            falaMascote.classList.remove(
                "visivel"
            );

        },
        3000
    );

}

/* =========================================================
CLIQUE NO NOX
========================================================= */

if (nox) {

nox.addEventListener(
    "click",
    function () {

        nox.dataset.state =
            "INTERACTING";

        piscar();

        const reacoes = [
            "feliz",
            "surpreso",
            "confuso"
        ];

        const reacao =
            reacoes[
                Math.floor(
                    Math.random() *
                    reacoes.length
                )
            ];

        reagirNox(reacao);

        setTimeout(
            function () {

                nox.dataset.state =
                    "IDLE";

                limparEstadoNox();

            },
            1100
        );
    }
);


nox.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Enter" ||
            evento.key === " "
        ) {

            evento.preventDefault();

            nox.click();
        }
    }
);

}

/* =========================================================
OLHOS ACOMPANHAM O MOUSE
========================================================= */

document.addEventListener(
"mousemove",
function (evento) {

    if (!nox) {
        return;
    }

    const rect =
        nox.getBoundingClientRect();

    const centroX =
        rect.left +
        rect.width / 2;

    const centroY =
        rect.top +
        rect.height / 2;

    const distancia =
        Math.sqrt(
            Math.pow(
                evento.clientX -
                centroX,
                2
            ) +
            Math.pow(
                evento.clientY -
                centroY,
                2
            )
        );

    if (distancia < 170) {

        const deslocamento =
            evento.clientX < centroX
                ? -2
                : 2;

        const olhoEsq =
            nox.querySelector(".olho-esq");

        const olhoDir =
            nox.querySelector(".olho-dir");

        if (
            olhoEsq &&
            olhoDir
        ) {

            olhoEsq.style.transform =
                `translateX(${deslocamento}px)`;

            olhoDir.style.transform =
                `translateX(${deslocamento}px)`;
        }
    }
}

);

/* =========================================================
RESET DOS OLHOS
========================================================= */

setInterval(
function () {

    if (!nox) {
        return;
    }

    const olhoEsq =
        nox.querySelector(".olho-esq");

    const olhoDir =
        nox.querySelector(".olho-dir");

    if (
        olhoEsq &&
        olhoDir
    ) {

        olhoEsq.style.transform = "";
        olhoDir.style.transform = "";
    }

},
1200

);

/* =========================================================
MICROANIMAÇÕES
========================================================= */

function microAnimacaoNox() {

if (!nox) {
    return;
}

const movimentos = [
    "feliz",
    "confuso",
    "surpreso",
    "normal"
];

const movimento =
    movimentos[
        Math.floor(
            Math.random() *
            movimentos.length
        )
    ];

if (
    movimento === "normal"
) {

    limparEstadoNox();

    nox.dataset.state =
        "IDLE";

    return;
}

reagirNox(movimento);

setTimeout(
    function () {

        limparEstadoNox();

        nox.dataset.state =
            "IDLE";

    },
    800
);

}

setInterval(
microAnimacaoNox,
6500
);

/* =========================================================
VOO
========================================================= */

function vooNox() {

if (!nox) {
    return;
}

if (
    document.hidden ||
    window.innerWidth < 500
) {

    return;
}

nox.dataset.state =
    "FLYING";

nox.classList.remove("voando");

void nox.offsetWidth;

nox.classList.add("voando");

setTimeout(
    function () {

        nox.classList.remove("voando");

        nox.dataset.state =
            "LANDING";

        setTimeout(
            function () {

                nox.dataset.state =
                    "IDLE";

            },
            500
        );

    },
    1800
);

}

setTimeout(
function () {
vooNox();
},
9000
);

setInterval(
function () {

    if (
        Math.random() < .35
    ) {

        vooNox();
    }

},
15000

);

/* =========================================================
MENSAGEM INICIAL
========================================================= */

setTimeout(
function () {

    falarNox(
        "Eu sou o Nox. Vamos aprender juntos?"
    );

},
1800

);

/* =========================================================
ESTADO INICIAL
========================================================= */

function mostrarTelaInicialNox() {

if (!nox) {
    return;
}

nox.dataset.state =
    "IDLE";

limparEstadoNox();

}

mostrarTelaInicialNox();