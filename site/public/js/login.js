function entrar() {

    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

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
            
                setInterval(sumirMensagem, 5000)
                cardErro.style.display = "block";
                mensagem_erro.innerHTML =
                    "Indo para a sua dashboard...";

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

                    return false;
                });
            }
        }).catch(function (erro) {
            console.log(erro);
        })

        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "E-mail ou senha inválidos";

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}