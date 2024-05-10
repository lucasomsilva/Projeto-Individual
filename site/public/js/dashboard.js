const grafico1 = document.getElementById('grafico1');
// const ctx2 = document.getElementById('myChart2');

new Chart(grafico1, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Valores em Milhões',
            backgroundColor: 'rgb(255, 20, 147)',
            borderColor: 'rgb(255, 20, 147)',
            data: [30, 29, 28, 25, 22, 23],
        }],
    },
});

// new Chart(ctx2, {
//     type: 'bar',
//     data: {
//         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
//         datasets: [{
//             label: 'Temperatura Média',
//             backgroundColor: 'rgb(255, 20, 147)',
//             data: [22, 24, 27, 23, 20, 18],
//         }, {
//             label: 'Umidade Média',
//             backgroundColor: 'rgb(50,153,204)',
//             data: [90, 89, 93, 87, 88, 82],
//         }],
//     },
// });
