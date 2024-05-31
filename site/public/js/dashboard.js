var idUsuario = sessionStorage.ID_USUARIO;
var nome = sessionStorage.NOME_USUARIO;
titulo.innerHTML = `Bem vindo(a) ${nome}`

// const grafico1 = document.getElementById('grafico1');
const grafico2 = document.getElementById('grafico2');
// const grafico3 = document.getElementById('grafico3');

// new Chart(grafico1, {
//     type: 'bar',
//     data: {
//         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
//         datasets: [{
//             label: 'Valores em horas',
//             backgroundColor: '#7F1D1D',
//             borderColor: '#7F1D1D',
//             data: [30, 29, 28, 25, 22, 23, 30, 24, 40, 43, 34, 35],
//         }],
//     }, options: {
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Horas jogadas por mês',
//                 font: {
//                     size: 12
//                 },
//                 padding: {
//                     top: 3,
//                     bottom: 3
//                 }
//             }
//         },
//     }
// });

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

// new Chart(grafico3, {
//     type: 'pie',
//     data: {
//         labels: ['Arthur', 'Jhon', 'Micah', 'Dutch'],
//         datasets: [{
//             backgroundColor: ['#E19494',
//                 '#A14A4A',
//                 '#831919',
//                 '#4F0F0F'],
//             data: [40, 30, 15, 15],
//         }],
//     }, options: {
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Top 4 - Personagens preferidos dos usuários',
//                 font: {
//                     size: 20
//                 },
//                 padding: {
//                     top: 3,
//                     bottom: 3
//                 }
//             }
//         },
//     }
// });

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

window.onload = function() {
    mostrarPersonagem();
    mostrarPersonagemMaisEscolhido();
    mostrarMaisJogados();
    mostrarMenosJogados();
    graficoMes();
    graficoPersonagens();
};