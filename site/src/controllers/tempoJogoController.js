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

function mostrarMesJogados(req, res) {
    var idUsuario = req.params.idUsuario;

    tempoJogoModel.mostrarMesJogados(idUsuario).then((resposta) => {
        res.status(200).json(resposta);
    });
}

module.exports = {
    registrarTempoDeJogo,
    mostrarMesJogados
};