var database = require("../database/config");

function registrarPersonagem(nome, fkUsuario) {
    console.log("PREFERÊNCIAS REGISTRADAS COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarLivro()", nome, fkUsuario);
    var instrucao = `
        INSERT INTO personagem (nome, fkUsuario) VALUES ('${nome}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

module.exports = {
registrarPersonagem};
