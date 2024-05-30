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

function mostrarMesJogados() {
    fetch(`/tempoJogo/mostrarMesJogados/${idUsuario}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (resposta) {
            resposta.json().then((resposta) => {
                resposta.forEach((resposta) => {
                    if (resposta.dataJogo) {
                        mes_mais_jogado.innerHTML = `${resposta.dataJogo}`;
                    }
                });
            });
        });
}