const mensagemSecreta = 'alura';

function cifraMensagem(mensagem, movimentos) {
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0);

        return String.fromCharCode(codigoCaractere + movimentos);
    });
    return mensagemCifrada.join('');
}

function decifraMensagem(mensagem, movimentos) {
    const mensagemDecifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0);

        return String.fromCharCode(codigoCaractere - movimentos);
    });
    return mensagemDecifrada.join('');
}


const mensagemCifrada = cifraMensagem(mensagemSecreta, 4);

console.log(mensagemCifrada);

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 4);

console.log(mensagemDecifrada);
