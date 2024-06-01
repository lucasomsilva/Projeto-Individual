var database = require("../database/config");

function registrarTempoDeJogo(dataJogo, tempoDeJogo, qtdMissoes, fkUsuario) {
    console.log("TEMPO DE JOGO REGISTRADO COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarTempoDeJogo()", dataJogo, tempoDeJogo, qtdMissoes, fkUsuario);
    var instrucao = `
        INSERT INTO qtdJogos (dataJogo, tempoDeJogo, qtdMissoes, fkUsuario) VALUES ('${dataJogo}', '${tempoDeJogo}', '${qtdMissoes}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarMaisJogados(idUsuario) {
    console.log("ACESSEI O TEMPOJOGO MODEL para buscar o mês que o usuário mais jogou, function mostrarMaisJogados()", idUsuario);

    var instrucao = `
    SELECT MONTH(dataJogo) AS mes FROM qtdJogos WHERE fkUsuario = ${idUsuario} AND dataJogo BETWEEN '2020-01-01' AND '2020-12-31' GROUP BY mes order by COUNT(idJogo) desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarMenosJogados(idUsuario) {
    console.log("ACESSEI O TEMPOJOGO MODEL para buscar o mês que o usuário menos jogou, function mostrarMenosJogados()", idUsuario);

    var instrucao = `
    SELECT MONTH(dataJogo) AS mes FROM qtdJogos WHERE fkUsuario = ${idUsuario} AND dataJogo BETWEEN '2020-01-01' AND '2020-12-31' GROUP BY mes order by COUNT(idJogo) asc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function graficoMes(idUsuario) {
    console.log("ACESSEI O TEMPOJOGO MODEL para buscar quantidade de vezes jogadas por mês, function graficoMes()", idUsuario);

    var instrucao = `   
    SELECT COUNT(idJogo) AS qtd, MONTH(dataJogo) AS mes FROM qtdJogos WHERE fkUsuario = ${idUsuario}
    AND dataJogo BETWEEN '2020-01-01' AND '2020-12-31' GROUP BY mes order by month(dataJogo);
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function totalJogos(idUsuario) {
    console.log("TEMPOJOGO MODEL ACESSADO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> \n\n function totalJogos()", idUsuario);
    var instrucao = `
    select count(idJogo) as quantidade from qtdJogos inner join usuario on fkUsuario = idUsuario where idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarTempoDeJogo,
    mostrarMaisJogados,
    mostrarMenosJogados,
    graficoMes,
    totalJogos
}