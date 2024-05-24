const listaDescricaoPersonagens = [
    'Assim como Arthur Morgan, você é um indivíduo multifacetado com uma vida interior rica. Sua força, compaixão e complexidade fazem de você alguém que deixa um impacto duradouro nas pessoas ao seu redor. Continue sendo você mesmo!', 
    'Jhon Marston', 
    'Dutch van Der Linde', 
    'Micah Bell', 
    'Hosea Mattews',
    'Lenny Summers', 
    'Sadie Adler', 
    'Javier Escuella', 
    'Bil Williamson', 
    'Uncle', 
    'Charles Smith'
];

function selecionarPersonagem() {
    let personagemSelecionado = select_personagens.value;

    // paragrafo_personagem.innerHTML = "a";

    if (personagemSelecionado == "arthur") {
        paragrafo_personagem.innerHTML += `${listaDescricaoPersonagens[0]}`;
    } else if (personagemSelecionado == "jhon") {
        paragrafo_personagem.innerHTML += `${listaDescricaoPersonagens[0]}`;
    } else if (personagemSelecionado == "dutch") {
        paragrafo_personagem.innerHTML += `${listaDescricaoPersonagens[0]}`;
    } else if (personagemSelecionado == "micah") {
        paragrafo_personagem.innerHTML += `${listaDescricaoPersonagens[0]}`;
    } else if (personagemSelecionado == "hosea") {
        paragrafo_personagem.innerHTML += `${listaDescricaoPersonagens[0]}`;
    } else if (personagemSelecionado == "lenny") {
        paragrafo_personagem.innerHTML += `${listaDescricaoPersonagens[0]}`;
    } else if (personagemSelecionado == "sadie") {
        paragrafo_personagem.innerHTML += `${listaDescricaoPersonagens[0]}`;
    } else if (personagemSelecionado == "javier") {
        paragrafo_personagem.innerHTML += `${listaDescricaoPersonagens[0]}`;
    } else if (personagemSelecionado == "bill") {
        paragrafo_personagem.innerHTML += `${listaDescricaoPersonagens[0]}`;
    } else if (personagemSelecionado == "uncle") {
        paragrafo_personagem.innerHTML += `${listaDescricaoPersonagens[0]}`;
    } else if (personagemSelecionado == "charles") {
        paragrafo_personagem.innerHTML += `${listaDescricaoPersonagens[0]}`;
    }

    paragrafo_personagem.innerHTML = "n entrei no if n"
}

function nulo() {
    vazio.style.display = "none";
}







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
    const modal = document.getElementById('janela-modal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
            modal.classList.remove('abrir')
        }
    });

}

function abrirModalHoras() {
    const modal = document.getElementById('janela-modal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
            modal.classList.remove('abrir')
        }
    });
}
