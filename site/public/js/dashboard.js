var idUsuario = sessionStorage.ID_USUARIO;
var nome = sessionStorage.NOME_USUARIO;
titulo.innerHTML = `Bem vindo(a) ${nome}`

function abrirModalPersonagem() {
    const modal = document.getElementById('janela-modal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
            modal.classList.remove('abrir')
        }
    });

}

function abrirModalQuiz() {
    const modal = document.getElementById('janela-modal2');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal2') {
            modal.classList.remove('abrir')
        }
    });

}

function abrirModalJogosMes() {
    const modal = document.getElementById('janela-modal3');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal3') {
            modal.classList.remove('abrir')
        }
    });
}

window.onload = function() {
    mostrarPersonagem();
    mostrarPersonagemMaisEscolhido();
    mostrarMaisJogados();
    mostrarMenosJogados();
    graficoMes();
    graficoPersonagens();
};