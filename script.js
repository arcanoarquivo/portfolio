function copiarTexto(texto, elemento) {
    navigator.clipboard.writeText(texto).then(() => {
        const aviso = elemento.querySelector('.aviso-copiado');
        
        // 1. Muda o texto e adiciona a classe de sucesso
        aviso.innerText = " (Copiado!)";
        aviso.classList.add('copiado');

        // 2. Depois de 2 segundos, remove a classe e volta o texto original
        setTimeout(() => {
            aviso.innerText = " (Clique para copiar)";
            aviso.classList.remove('copiado');
        }, 2000);
        
    }).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
    });
}