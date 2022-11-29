import { createHash } from 'crypto';

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash('umastrinqualquer'));

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha) {
        if (nome == this.nome && this.hash == criaHash(senha)) {
            console.log('usuario autenticado com sucesso');
            return true;
        } else {
            console.log('usuario ou senha incorreto');
            return false;
        }
    };
}

const usuario = new Usuario('joao manoel', 'minhasenha');

console.log(usuario);

//caso suceso
usuario.autentica('joao manoel', 'minhasenha');

//casos de fracassos
usuario.autentica('usuario1', 'minhasenha');
usuario.autentica('joao manoel', 'minhaSenha');
