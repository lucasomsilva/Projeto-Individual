var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.post ("/registrarPersonagem", function (req, res) {
    personagemController.registrarPersonagem(req, res);
});

router.get ("/mostrarPersonagem/:idUsuario", function (req, res) {
    personagemController.mostrarPersonagem(req, res);
});

router.get ("/mostrarPersonagemMaisEscolhido", function (req, res) {
    personagemController.mostrarPersonagemMaisEscolhido(req, res);
});

module.exports = router;