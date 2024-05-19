function entrar() {

    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    if (emailVar == "" || senhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "Insira seus dados para fazer login";

        return false;
    }
    else {
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