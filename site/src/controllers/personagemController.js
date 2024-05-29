var personagemModel = require("../models/personagemModel");

function registrarPersonagem(req, res) {
    var personagem = req.body.personagemServer
    var fkUsuario = req.body.fkUsuarioServer;

    if (personagem == undefined) {
        res.status(400).send("O nome do personagem está undefined!");
    }
    if (fkUsuario == undefined) {
        res.status(400).send("A fkUsuario está undefined!");
    } 
    personagemModel.registrarPersonagem(personagem, fkUsuario).then(function (resposta) {
        res.status(200).send("Dados inserido com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function mostrarPersonagem(req, res) {
    var idUsuario = req.params.idUsuario;

    personagemModel.mostrarPersonagem(idUsuario).then((resposta) => {
        res.status(200).json(resposta);
    });
}

module.exports = {
    registrarPersonagem,
    mostrarPersonagem
};