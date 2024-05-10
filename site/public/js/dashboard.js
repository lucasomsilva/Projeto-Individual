const grafico1 = document.getElementById('grafico1');
const grafico2 = document.getElementById('grafico2');

new Chart(grafico1, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Valores em Milhões',
            backgroundColor: 'rgb(255, 20, 147)',
            borderColor: 'rgb(255, 20, 147)',
            data: [30, 29, 28, 25, 22, 23, 30],
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
    },
});
