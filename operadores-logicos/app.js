const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout 
});

console.log('Esse programa vai checar se você é maior de 18 e tem habilitação para entrar no kart.');
console.log('Além disso, precisamos verificar se você está na lista de reservas.');

readLine.question('Qual o ano do seu nascimento?' , ano => {
    if(ano > 2004){
        console.log('Você não tem 18 anos.');
    }else{
        readLine.question('Você tem habilitação? (Sim/Não)' , temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === 'SIM')){
                console.log('você não tem habilitação para entrar no kart.');
            }else{
                readLine.question('Qual seu nome?', nome =>{
                    switch(nome){
                        case 'Ivana' :
                            console.log('Bem vinda ao kart Ivana.');
                            break;
                        case 'Milena' :
                            console.log('Bem vinda ao kart Milena')
                            break;
                        default:
                            console.log('Seu nome não está na nossa lista de reserva.');    
                    }
                })
            }
        })
    }
})