function copiarPix() {
    const chave = "email@exemplo.com";
    navigator.clipboard.writeText(chave)
        .then(() => {
            alert("Chave PIX copiada com sucesso!");
        })
        .catch(() => {
            alert("Não foi possível copiar. Copie manualmente: " + chave);
        });
}
