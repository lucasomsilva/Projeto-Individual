var idUsuario = sessionStorage.ID_USUARIO;

const listaDescricaoPersonagens = [
    'Você é uma pessoa complexa e profundamente reflexiva, que valoriza a lealdade e a moralidade, mesmo em meio a circunstâncias difíceis. Você acredita na possibilidade de mudança e é uma pessoa que se esforça para encontrar o equilíbrio entre o bem e o mal, a lealdade e a justiça.',

    'Você valoriza profundamente suas relações pessoais e faz o possível para proteger e cuidar daqueles que ama. Seu espírito aventureiro e sua capacidade de enfrentar o desconhecido com bravura são características que fazem de você uma pessoa única e admirável.',

    'Você é uma pessoa carismática e visionária, com um talento natural para liderar e inspirar os outros. Possui uma mente estratégica e está sempre em busca de um propósito maior além de seu entusiasmo e confiança serem contagiantes, porém nção enxergando as consequências de suas ações.',

    'Você é uma pessoa astuta e engenhosa, capaz de se adaptar rapidamente a diferentes situações. Sabe como manipular as circunstâncias além de ser muito determinado. Você pode ser visto como alguém que valoriza mais seus próprios interesses do que os dos outros',

    'Você é uma pessoa sagaz e experiente conhecido por sua paciência e diplomacia, com uma mente afiada e muita sabedoria. Um estrategista nato, planeja cuidadosamente seus movimentos. Sua capacidade de analisar situações complexas o tornam um conselheiro valioso e confiável.',

    'Você é uma pessoa inteligente e corajosa, com um espírito jovem e uma mente curiosa, sempre está buscando aprender e crescer. Sua energia e entusiasmo são contagiosos e sua capacidade de se conectar com os outros e ter uma amizade genuína faz de você um amigo valioso e leal.',

    'Você é capaz de enfrentar desafios difíceis com bravura e resiliência, visto como alguém que não recua diante da adversidade, além de ser alguém que valoriza sua liberdade e autonomia. Sua personalidade é marcada por uma combinação de força e compaixão',

    'Você é uma pessoa calma e centrada, com um grande senso de propósito e determinação. Você é capaz de manter a postura mesmo nas situações mais difíceis. Sua capacidade de pensar com clareza sob pressão e de tomar decisões certas faz de você alguém confiável e respeitado.',

    'Você é conhecido por sua natureza impulsiva e sua disposição para correr riscos. Você compartilha essas características, sendo alguém que não tem medo de tomar decisões difíceis, mesmo quando as probabilidades estão contra você, dendo determinado e tendo uma boa capacidade de liderança',

    'Você é uma pessoa descontraída e de espírito livre, que valoriza a liberdade e a simplicidade da vida. Prefere evitar conflitos e aproveitar o momento. Sua natureza pacífica e sua capacidade de encontrar alegria nas pequenas coisas fazem de você alguém que é fácil de se conviver.',

    'Você é uma pessoa gentil e compassiva, com um grande coração e uma disposição para ajudar os outros. Você é alguém que valoriza a empatia e a bondade. Conhecido por sua calma e sabedoria, e com uma combinação entre compaixão e coragem de ajudar o próximo.',

    'Você é uma pessoa extrovertida e cheia de vida, com um espírito aventureiro e uma personalidade cativante. Você é alguém que valoriza a liberdade e a diversão. Sua energia e entusiasmo são contagiantes, além de ser muito espontâneo e animado, se jogando de cabeça em novos desafios.'
];

function selecionarPersonagem() {
    let selectPersonagens = document.getElementById('select_personagens');
    let personagemSelecionado = selectPersonagens.value;
    let paragrafoPersonagem = document.getElementById('paragrafo_personagem');

    if (personagemSelecionado === "Arthur") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[0]}`;
    } else if (personagemSelecionado === "Jhon") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[1]}`;
    } else if (personagemSelecionado === "Dutch") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[2]}`;
    } else if (personagemSelecionado === "Micah") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[3]}`;
    } else if (personagemSelecionado === "Hosea") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[4]}`;
    } else if (personagemSelecionado === "Lenny") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[5]}`;
    } else if (personagemSelecionado === "Sadie") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[6]}`;
    } else if (personagemSelecionado === "Javier") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[7]}`;
    } else if (personagemSelecionado === "Bill") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[8]}`;
    } else if (personagemSelecionado === "Uncle") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[9]}`;
    } else if (personagemSelecionado === "Charles") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[10]}`;
    } else if (personagemSelecionado === "Sean") {
        paragrafoPersonagem.innerHTML = `${listaDescricaoPersonagens[11]}`;
    }
}

function nulo() {
    vazio.style.display = 'none';
}

function registrarPersonagem() {

    let selectPersonagens = document.getElementById('select_personagens');
    let personagem = selectPersonagens.value;

    if (
        personagem == ""
    ) {
        return false;
    } else {
        fetch("/personagem/registrarPersonagem", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                personagemServer: personagem,
                fkUsuarioServer: idUsuario
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    console.log(resposta);

                    resposta.json().then(json => {
                        console.log(json);
                        console.log(JSON.stringify(json));
                    });

                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

        return false;
    }

}

function mostrarPersonagem() {
    fetch(`/personagem/mostrarPersonagem/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                resposta.forEach((resposta) => {
                    if (resposta.nome) {
                        personagem_escolhido.innerHTML = `${resposta.personagem}`;
                    }
                });
            });
        });
}

function registrarTempoDeJogo() {

    var mes = select_mes.value;
    var tempoDeJogo = hora_de_jogo.value;

    if (
        mes == "" ||
        tempoDeJogo == ""
    ) {
        return false;
    } else {
        fetch("/personagem/registrarTempoDeJogo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mesServer: mes,
                tempoDeJogoServer: tempoDeJogo,
                fkUsuarioServer: idUsuario
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    console.log(resposta);

                    resposta.json().then(json => {
                        console.log(json);
                        console.log(JSON.stringify(json));

                    });

                }
            })

            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

        return false;
    }
}

window.onload = function () {
    mostrarPersonagem();
};

var idUsuario = sessionStorage.ID_USUARIO;
var nome = sessionStorage.NOME_USUARIO;
titulo.innerHTML = `Bem vindo(a) ${nome}`

const grafico1 = document.getElementById('grafico1');
const grafico2 = document.getElementById('grafico2');
const grafico3 = document.getElementById('grafico3');

new Chart(grafico1, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Valores em horas',
            backgroundColor: '#7F1D1D',
            borderColor: '#7F1D1D',
            data: [30, 29, 28, 25, 22, 23, 30, 24, 40, 43, 34, 35],
        }],
    }, options: {
        plugins: {
            title: {
                display: true,
                text: 'Horas jogadas por mês',
                font: {
                    size: 12
                },
                padding: {
                    top: 3,
                    bottom: 3
                }
            }
        },
    }
});

new Chart(grafico2, {
    type: 'pie',
    data: {
        labels: ['Saudações', 'Conversar', 'Roubo', 'Hostilizar'],
        datasets: [{
            label: 'Em %',
            backgroundColor: ['#E19494',
                '#A14A4A',
                '#831919',
                '#4F0F0F'],
            data: [40, 30, 15, 15],
        }],
    }, options: {
        plugins: {
            title: {
                display: true,
                text: 'Interações com NPC',
                font: {
                    size: 12
                },
                padding: {
                    top: 3,
                    bottom: 3
                }
            }
        },
    }
});

new Chart(grafico3, {
    type: 'pie',
    data: {
        labels: ['Arthur', 'Jhon', 'Micah', 'Dutch'],
        datasets: [{
            backgroundColor: ['#E19494',
                '#A14A4A',
                '#831919',
                '#4F0F0F'],
            data: [40, 30, 15, 15],
        }],
    }, options: {
        plugins: {
            title: {
                display: true,
                text: 'Personagens preferidos dos usuários',
                font: {
                    size: 12
                },
                padding: {
                    top: 3,
                    bottom: 3
                }
            }
        },
    }
});

function abrirModalPersonagem() {
    const modal = document.getElementById('janela-modal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
            modal.classList.remove('abrir')
        }
    });

}

function abrirModalQuiz() {
    const modal = document.getElementById('janela-modal2');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal2') {
            modal.classList.remove('abrir')
        }
    });

}

function abrirModalJogosMes() {
    const modal = document.getElementById('janela-modal3');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal3') {
            modal.classList.remove('abrir')
        }
    });
}
