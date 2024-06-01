function cadastrar() {

    var nomeVar = input_nome.value;
    var sobrenomeVar = input_sobrenome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_confirmacaoSenha.value;

    let contemArrobaPonto = emailVar.indexOf("@") > -1 && emailVar.indexOf(".") > -1;
    let senhaContemNumero = false;
    let contemCaractereEspecial = senhaVar.indexOf("#") > -1 || senhaVar.indexOf("_") > -1 || senhaVar.indexOf("$") > -1 || senhaVar.indexOf("&") > -1 || senhaVar.indexOf("@") > -1 || senhaVar.indexOf("*") > -1;

    for (let contadorNumero = 0; contadorNumero < senhaVar.length; contadorNumero++) {
        for (let contadorIndex = 0; contadorIndex < 9; contadorIndex++) {
            if (senhaVar.indexOf(contadorIndex) != -1) {
                senhaContemNumero = true;
            }
        }
    }

    if (
        nomeVar == "" ||
        sobrenomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == ""
    ) {
        cardErro.style.display = "block";
        cardErro.style.marginTop = "100px";
        mensagem_erro.innerHTML = "Todos os campos precisam estar preenchidos";

        return false;
    } else if (senhaVar != confirmacaoSenhaVar) {
        cardErro.style.display = "block";
        cardErro.style.marginTop = "100px";
        mensagem_erro.innerHTML = "As senhas são diferentes!";

        return false;
    } else if (contemArrobaPonto == false) {
        cardErro.style.display = "block";
        cardErro.style.marginTop = "100px";
        mensagem_erro.innerHTML = "Insira um e-mail válido!";

        return false;
    } else if (senhaVar.length < 8) {
        cardErro.style.display = "block";
        cardErro.style.marginTop = "100px";
        mensagem_erro.innerHTML = "A senha deve conter pelo menos 8 dígitos";

        return false;
    } else if (senhaContemNumero == false) {
        cardErro.style.display = "block";
        cardErro.style.marginTop = "100px";
        mensagem_erro.innerHTML = "A senha deve conter pelo menos 1 número";

        return false;
    } else if (contemCaractereEspecial == false) {
        cardErro.style.display = "block";
        cardErro.style.marginTop = "100px";
        mensagem_erro.innerHTML = "A senha deve conter pelo menos 1 caractere especial";

        return false;
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
}

function sumirMensagem() {
    cardErro.style.display = "none";
}