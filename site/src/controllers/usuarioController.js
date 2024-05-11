var usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    }

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }

    if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }

    usuarioModel.cadastrar(nome, sobrenome, email, senha).then(function (resposta) {
        res.status(200).send("Cadastro criado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}