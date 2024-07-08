function validarFormulario(event) {
    event.preventDefault();
    let nome = document.forms["assinaturaForm"]["nome"].value;
    let email = document.forms["assinaturaForm"]["email"].value;
    let telefone = document.forms["assinaturaForm"]["telefone"].value;
    let endereco = document.forms["assinaturaForm"]["endereco"].value;
    let numeroCartao = document.forms["assinaturaForm"]["numeroCartao"].value;
    let validadeCartao = document.forms["assinaturaForm"]["validadeCartao"].value;
    let cvv = document.forms["assinaturaForm"]["cvv"].value;

    if (nome == "" || email == "" || telefone == "" || endereco == "" || numeroCartao == "" || validadeCartao == "" || cvv == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (!validateCardNumber(numeroCartao)) {
        alert("Por favor, insira um número de cartão de crédito válido.");
        return false;
    }

    if (!validateCVV(cvv)) {
        alert("Por favor, insira um CVV válido.");
        return false;
    }

    alert("Assinatura realizada com sucesso! Bem-vindo à Safaribox.");
    document.forms["assinaturaForm"].submit();
}

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateCardNumber(numeroCartao) {
    let re = /^\d{16}$/;
    return re.test(numeroCartao);
}

function validateCVV(cvv) {
    let re = /^\d{3,4}$/;
    return re.test(cvv);
}