import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
);

const dadosCriptografados = publicEncrypt(publicKey, Buffer.from('mensagem super secreta'));
console.log(dadosCriptografados.toString('hex'));

// --- tranmissao

const dadosDecrifrados = privateDecrypt(privateKey, dadosCriptografados);
console.log(dadosDecrifrados.toString('utf-8'));

// console.log(publicKey);
// console.log(privateKey);