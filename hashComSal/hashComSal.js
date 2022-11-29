import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(senha) {
    const sal = randomBytes(16).toString('hex');
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal};${senhaHasheada}`;

}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(';');
    }

    autentica(nome, senha) {
        if (nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashIguais = timingSafeEqual(testeHash, hashReal);

            if (hashIguais) {
                console.log('Usuario autenticado');
                return true;
            } else {
                console.log('usuario ou senha invalidos');
                return false;
            }

        }
    };
}

const jm = new Usuario('joao manoel', 'senhaSecreta');

console.log(jm);

//teste de sucesso
jm.autentica('joao manoel', 'senhaSecreta');

//teste de insucesso
jm.autentica('joao manoel', 'yyyyyyyyy');
jm.autentica('joao', 'senhaSecreta');