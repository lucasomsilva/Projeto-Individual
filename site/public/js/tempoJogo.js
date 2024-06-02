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
                    if (resposta.mes) {
                        if (resposta.mes == 1) {
                            mes_mais_jogado.innerHTML = 'Janeiro';
                        } else if (resposta.mes == 2) {
                            mes_mais_jogado.innerHTML = 'Fevereiro';
                        } else if (resposta.mes == 3) {
                            mes_mais_jogado.innerHTML = 'Março';
                        } else if (resposta.mes == 4) {
                            mes_mais_jogado.innerHTML = 'Abril';
                        } else if (resposta.mes == 5) {
                            mes_mais_jogado.innerHTML = 'Maio';
                        } else if (resposta.mes == 6) {
                            mes_mais_jogado.innerHTML = 'Junho';
                        } else if (resposta.mes == 7) { 
                            mes_mais_jogado.innerHTML = 'Julho';
                        } else if (resposta.mes == 8) {
                            mes_mais_jogado.innerHTML = 'Agosto';
                        } else if (resposta.mes == 9) {
                            mes_mais_jogado.innerHTML = 'Setembro';
                        } else if (resposta.mes == 10) {
                            mes_mais_jogado.innerHTML = 'Outubro';
                        } else if (resposta.mes == 11) {
                            mes_mais_jogado.innerHTML = 'Novembro';
                        } else {
                            mes_mais_jogado.innerHTML = 'Dezembro';
                        }
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
                    if (resposta.mes) {
                        if (resposta.mes == 1) {
                            mes_menos_jogado.innerHTML = 'Janeiro';
                        } else if (resposta.mes == 2) {
                            mes_menos_jogado.innerHTML = 'Fevereiro';
                        } else if (resposta.mes == 3) {
                            mes_menos_jogado.innerHTML = 'Março';
                        } else if (resposta.mes == 4) {
                            mes_menos_jogado.innerHTML = 'Abril';
                        } else if (resposta.mes == 5) {
                            mes_menos_jogado.innerHTML = 'Maio';
                        } else if (resposta.mes == 6) {
                            mes_menos_jogado.innerHTML = 'Junho';
                        } else if (resposta.mes == 7) { 
                            mes_menos_jogado.innerHTML = 'Julho';
                        } else if (resposta.mes == 8) {
                            mes_menos_jogado.innerHTML = 'Agosto';
                        } else if (resposta.mes == 9) {
                            mes_menos_jogado.innerHTML = 'Setembro';
                        } else if (resposta.mes == 10) {
                            mes_menos_jogado.innerHTML = 'Outubro';
                        } else if (resposta.mes == 11) {
                            mes_menos_jogado.innerHTML = 'Novembro';
                        } else {
                            mes_menos_jogado.innerHTML = 'Dezembro';
                        }
                    }
                });
            });
        });
}

function mostrarMediaMissoes() {
    fetch(`/tempoJogo/mostrarMediaMissoes/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                resposta.forEach((resposta) => {
                    if (resposta.media) {
                        missoes_jogadas_mes.innerHTML = `${resposta.media}`;
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
                        label: 'Quantidades jogadas',
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
                            text: 'Quantidade de vezes jogadas em cada mês',
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

function totalJogos() {
    console.log(idUsuario)
    fetch(`/tempoJogo/totalJogos/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
            resposta.json()
                .then((json) => {
                    console.log(json);
                    console.log(json[0].qtdJogos);

                    var quantidade = json[0].quantidade;
                    console.log(quantidade);

                    var qtdTotal = document.getElementById("dentro_descricao")
                    qtdTotal.innerHTML = `<b>${quantidade}</b>`;

                    if (quantidade < 10) {
                        descricao_metricas.innerHTML = `Você é um <b style="color: #E19494;">jogador iniciante</b>! Você ainda precisa explorar mais o jogo! Red Dead Redemption tem muito a te oferecer ainda e é apenas o começo da sua longa jornada nesse mundo. `;
                    } else if (quantidade <= 20) {
                        descricao_metricas.innerHTML = `Você é um <b style="color: #D41936;">jogador casual</b>! Já está começando a se familiarizar com o jogo! Já sabe o nome de todos da gangue? Já tem o seu personagem preferido? Aos poucos vai entendendo e explorando cada vez mais o jogo, e descobrindo mais sobre a fauna do jogo.`;
                    } else if (quantidade <= 30) {
                        descricao_metricas.innerHTML = `Você é um <b style="color: #961C26;">jogador moderado</b>! Já explorou grande parte do mundo de Red Dead! Posso apostar que já está conhecendo cada pedaço do mapa, cada cidade e conhecendo todos os animais do mundo selvagem, além de claro, ter caçado alguns animais lendário `;
                    } else if (quantidade <= 40) {
                        descricao_metricas.innerHTML = `Você é um <b style="color: #7E1921;">jogador avançado</b>! Já fez muita coisa e tem tudo para ser o melhor explorador do jogo! Já passou por muitos perrengues no jogo e já sabe todos os segredos, um verdadeiro explorador e aventureiro. `;
                    } else {
                        descricao_metricas.innerHTML = `HARDCORE! Você é um <b style="color: #470A0A;">jogador hardcore</b>! Você com certeza, DOMINA o jogo como ninguém! Já coleciona animais lendários caçados e sabe mais do jogo do que os próprios desenvolvedores. Parabéns você faz parte da gangue van Der Linde.`;
                    }

                })
        })
        .catch(function (erro) {
            console.error('Erro desconhecido na API.');
        }
        );
}