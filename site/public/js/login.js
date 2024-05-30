window.addEventListener('load', function getRandomImage() {
    document.section.style.backgroundImage = `url(${getRandomImage()})`;
});

function getRandomImage() {
    const listaImagens = [
        '../assets/img/imagens-aleatorias/imagem-2.jpg',
        '../assets/img/imagens-aleatorias/imagem-3.jpg',
        '../assets/img/imagens-aleatorias/imagem-4.jpg',
        '../assets/img/imagens-aleatorias/imagem-5.jpg',
        '../assets/img/imagens-aleatorias/imagem-6.jpg',
        '../assets/img/imagens-aleatorias/imagem-7.jpg',        
        '../assets/img/imagens-aleatorias/imagem-9.jpg',
        '../assets/img/imagens-aleatorias/imagem-10.jpg',
        '../assets/img/imagens-aleatorias/imagem-11.jpg',
        '../assets/img/imagens-aleatorias/imagem-12.jpg'
    ];

    const randomIndex = Math.floor(Math.random() * listaImagens.length);
    return images[randomIndex];
}

function entrar() {

    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    if (emailVar == "" || senhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "Insira seus dados para fazer login";

        return false;
    } else {
        setInterval(sumirMensagem, 5000)
        cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "Indo para a sua dashboard...";
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuario/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        }),
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!");

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;

                    setTimeout(function () {
                        window.location = "dashboard.html";
                    }, 1000);
                });
            } else {
                console.log("Houve um erro ao tentar realizar o login!");
                resposta.text().then(texto => {
                    console.error(texto);
                    cardErro.style.display = "block"
                    mensagem_erro.innerHTML = "Houve um erro ao tentar realizar o login";

                    return false;
                });
            }
        }).catch(function (erro) {
            console.log(erro);
        })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}