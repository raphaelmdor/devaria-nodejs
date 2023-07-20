const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const minhaPimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPimeiraConstanteString);
let leituraDeCampo;
readLine.question('Informe sua idade:', input => {
    leituraDeCampo = input
    console.log(`O usuário digitou: ${leituraDeCampo}`);
});
