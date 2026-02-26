function copiarPix() {
    const chave = "21975465645";
    navigator.clipboard.writeText(chave)
        .then(() => {
            alert("Chave PIX copiada com sucesso!");
        })
        .catch(() => {
            alert("Não foi possível copiar. Copie manualmente: " + chave);
        });
}
