import jwt from 'jsonwebtoken';

const chaveSecreta = 'chaveSuperSecreta';
const token = jwt.sign(
    {
        apelido: 'jm',
        curso: 'seguranca e node js'
    },
    chaveSecreta
);

console.log(token);


const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);