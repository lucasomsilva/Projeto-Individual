function cadastrar() {

    var nomeVar = input_nome.value;
    var sobrenomeVar = input_sobrenome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_confirmacaoSenha.value;

    if (
        nomeVar == "" ||
        sobrenomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == ""
    ) {
        cardErro.style.display = "block";
        cardErro.style.marginTop = "100px";
        mensagem_erro.innerHTML =
            "Todos os campos precisam estar preenchidos";

        return false;
    } else if (senhaVar != confirmacaoSenhaVar) {
        cardErro.style.display = "block";
        cardErro.style.marginTop = "100px";
        mensagem_erro.innerHTML =
            "As senhas são diferentes!";

        return false;
    } else if (emailVar.indexOf('@') < 0 || emailVar.indexOf('.') < 0) {
        cardErro.style.display = "block";
        cardErro.style.marginTop = "100px";
        mensagem_erro.innerHTML =
            "Insira um e-mail válido!";

        return false;
    } else if (senhaVar.length < 8) {
        cardErro.style.display = "block";
        cardErro.style.marginTop = "100px";
        mensagem_erro.innerHTML = "A senha deve conter pelo menos 8 dígitos";

        // for (let posicao = 0; posicao <= senhaVar.length; posicao++) {
        //     if (senhaVar.indexOf(""))
        // }

    } else {
        setInterval(sumirMensagem, 5000);
        cardErro.style.display = "block";
        cardErro.style.marginTop = "100px";
        mensagem_erro.innerHTML =
            "Indo para o login...";


        fetch("/usuario/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                sobrenomeServer: sobrenomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    setTimeout(() => {
                        window.location = "login.html";
                    }, "2000");
                } else {
                    throw "Houve um erro ao tentar realizar o login!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            })
        return false;
    }
}x

function sumirMensagem() {
    cardErro.style.display = "none";
}