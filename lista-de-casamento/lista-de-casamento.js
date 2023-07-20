const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem vindo ao casamento de Raphael & Milena.')

readLine.question('Digite aqui o seu nome:', nome => {
    switch(nome){
        case 'Angelica' :
            console.log('Bem vindo e boa festa.')
            break;
        case 'Marquinho' :
            console.log('Bem vindo e boa festa.')
            break;
        case 'Alessandra' :
            console.log('Bem vindo e boa festa.')
            break;
        case 'Anderson' :
            console.log('Bem vindo e boa festa.')
             break;
        default: 
        console.log('Seu nome não está na lista de casamento.')
    }
})