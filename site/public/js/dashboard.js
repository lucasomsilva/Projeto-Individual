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
            label: 'Valores em Milhões',
            backgroundColor: 'rgb(255, 20, 147)',
            borderColor: 'rgb(255, 20, 147)',
            data: [30, 29, 28, 25, 22, 23, 30, 24, 40, 43, 34, 35],
        }],
    },
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
                text: 'Personagem preferido dos usuários',
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

listaPerguntas = [
    '1 - Qual o nome do líder da gangue?'
];

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
