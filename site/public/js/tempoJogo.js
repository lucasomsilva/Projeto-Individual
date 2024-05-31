function registrarTempoDeJogo() {

    var dataJogo = input_data_jogo.value;
    var tempoDeJogo = hora_de_jogo.value;
    var qtdMissoes = input_qtd_missoes.value;

    if (
        dataJogo == "" ||
        tempoDeJogo == "" ||
        qtdMissoes == ""
    ) {
        return false;
    } else {
        fetch("/tempoJogo/registrarTempoDeJogo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dataJogoServer: dataJogo,
                tempoDeJogoServer: tempoDeJogo,
                qtdMissoesServer: qtdMissoes,
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

function mostrarMaisJogados() {
    fetch(`/tempoJogo/mostrarMaisJogados/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                resposta.forEach((resposta) => {
                    if (resposta.mesMaisJogado) {
                        mes_mais_jogado.innerHTML = `${resposta.mesMaisJogado}`;
                    }
                });
            });
        });
}

function mostrarMenosJogados() {
    fetch(`/tempoJogo/mostrarMenosJogados/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                resposta.forEach((resposta) => {
                    if (resposta.mesMenosJogado) {
                        mes_menos_jogado.innerHTML = `${resposta.mesMenosJogado}`;
                    }
                });
            });
        });
}

function graficoMes() {

    fetch(`/tempoJogo/graficoMes/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados');
            }
            return response.json();
        })
        .then(data => {
            const ctx = document.getElementById('grafico1');

            const meses = [
                'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
            ];


            const labels = data.map(item => meses[item.mes - 1]);
            const dados = data.map(item => item.qtd);

            console.log(labels, dados)

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Quantidades jogadas por mês',
                        data: dados,
                        backgroundColor: '#7F1D1D',
                        borderColor: '#7F1D1D',
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Horas jogadas por mês',
                            font: {
                                size: 20
                            },
                            padding: {
                                top: 3,
                                bottom: 3
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1,
                                precision: 0
                            }
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Erro no gráfico', error);
        });
}