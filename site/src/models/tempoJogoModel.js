var database = require("../database/config");

function registrarTempoDeJogo(dataJogo, tempoDeJogo, fkUsuario) {
    console.log("TEMPO DE JOGO REGISTRADO COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarTempoDeJogo()", dataJogo, tempoDeJogo, fkUsuario);
    var instrucao = `
        INSERT INTO qtdJogos (dataJogo, tempoDeJogo, fkUsuario) VALUES ('${dataJogo}', '${tempoDeJogo}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarMesJogados(idUsuario) {
    console.log("ACESSEI O TEMPOJOGO MODEL para buscar quantidade de tempo que o usuário jogou por mês, function mostrarMesJogados()", idUsuario);

    var instrucao = `   
    SELECT COUNT(idJogo) FROM qtdJogos;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarTempoDeJogo,
    mostrarMesJogados
}