var express = require("express");
var router = express.Router();

var tempoJogoController = require("../controllers/tempoJogoController");

router.post ("/registrarTempoDeJogo", function (req, res) {
    tempoJogoController.registrarTempoDeJogo(req, res);
});

router.get ("/mostrarMaisJogados/:idUsuario", function (req, res) {
    tempoJogoController.mostrarMaisJogados(req, res);
});

router.get ("/mostrarMenosJogados/:idUsuario", function (req, res) {
    tempoJogoController.mostrarMenosJogados(req, res);
});

router.get ("/mostrarMediaMissoes/:idUsuario", function (req, res) {
    tempoJogoController.mostrarMediaMissoes(req, res);
});

router.get("/graficoMes/:idUsuario", function (req, res) {
    tempoJogoController.graficoMes(req, res);
});

router.get("/totalJogos/:idUsuario", function (req, res) {
    tempoJogoController.totalJogos(req, res);
});

module.exports = router;