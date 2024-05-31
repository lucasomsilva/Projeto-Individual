var tempoJogoModel = require("../models/tempoJogoModel");

function registrarTempoDeJogo(req, res) {
    var dataJogo = req.body.dataJogoServer;
    var tempoDeJogo = req.body.tempoDeJogoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (dataJogo == undefined) {
        res.status(400).send("O dataJogo está undefined!");
    }
    if (tempoDeJogo == undefined) {
        res.status(400).send("O tempoDeJogo está undefined!");
    }
    if (fkUsuario == undefined) {
        res.status(400).send("A fkUsuario está undefined!");
    }

    tempoJogoModel.registrarTempoDeJogo(dataJogo, tempoDeJogo, fkUsuario).then(function (resposta) {
        res.status(200).send("Dados inserido com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function mostrarMaisJogados(req, res) {
    var idUsuario = req.params.idUsuario;

    tempoJogoModel.mostrarMaisJogados(idUsuario).then((resposta) => {
        res.status(200).json(resposta);
    });
}

function mostrarMenosJogados(req, res) {
    var idUsuario = req.params.idUsuario;

    tempoJogoModel.mostrarMenosJogados(idUsuario).then((resposta) => {
        res.status(200).json(resposta);
    });
}

// function mostrarMediaMissoes(req, res) {
//     var idUsuario = req.params.idUsuario;

//     tempoJogoModel.mostrarMediaMissoes(idUsuario).then((resposta) => {
//         res.status(200).json(resposta);
//     });
// }

// function mostrarMaisJogados(req, res) {
//     var idUsuario = req.params.idUsuario;

//     tempoJogoModel.mostrarMaisJogados(idUsuario)
//         .then(
//             function (resultado) {
//                 if (resultado.length > 0) {
//                     res.status(200).json(resultado);
//                 } else {
//                     res.status(204).send("Nenhum resultado encontrado!");
//                 }
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log(
//                     "Houve um erro",
//                     erro.sqlMessage
//                 );
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }


function graficoMes(req, res) {
    var idUsuario = req.params.idUsuario;

    tempoJogoModel.graficoMes(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function totalJogos(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`estou na funcao listar quantidade de livros do controller`);
    tempoJogoModel.totalJogos(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);

                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    registrarTempoDeJogo,
    mostrarMaisJogados,
    mostrarMenosJogados,
    graficoMes,
    totalJogos
    // mostrarMediaMissoes
};