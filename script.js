function gerarSenha() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-";
    const length = document.getElementById("length").value;
    if (length < 8 || length > 20) {
        mostrarMensagem("Digite um valor entre 8 e 20.");
        return;
    }
    
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres.charAt(randomIndex);
    }
    
    document.getElementById("senhaForte").value = password;
    mostrarMensagem("Senha gerada com sucesso!");
}

function copiar() {
    const valor = document.getElementById("senhaForte").value;
    if (valor) {
        navigator.clipboard.writeText(valor);
        mostrarMensagem("Senha copiada para a área de transferência!");
    } else {
        mostrarMensagem("Nenhuma senha foi gerada");
    }
}

function mostrarMensagem(texto) {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = texto;
}
