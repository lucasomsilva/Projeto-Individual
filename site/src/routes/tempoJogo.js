var express = require("express");
var router = express.Router();

var tempoJogoController = require("../controllers/tempoJogoController");

router.post ("/registrarTempoDeJogo", function (req, res) {
    tempoJogoController.registrarTempoDeJogo(req, res);
});

router.get ("/mostrarMesJogados/:idUsuario", function (req, res) {
    tempoJogoController.mostrarMesJogados(req, res);
});

module.exports = router;