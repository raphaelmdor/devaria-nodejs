const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = numero => {
    const resultado = Number.parseFloat (numero);
    if(!resultado){
        console.log('Número informado não é válido.');
    }
    return resultado;
}

const validarOperador = (operador) =>{
    switch(operador){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log('Operador informado não é válido.');
            return null;
    }
}

readLine.question('Favor informar número:', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);
    if(numeroValidado1){
        readLine.question('Favor informar outro número:', (numero2) =>{
            const vumeroValidado2 = validarNumeroInformado(numero2);

            if(numeroValidado2){
                readLine.question('Favor informar o operador', (operador) =>{
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+' console.log('operador selecionado adição resultado ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}');
                                break;
                            case '-' console.log('operador selecionado subtração resultado ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}');

                        }
                    }
                })
            }
        })
    }
})