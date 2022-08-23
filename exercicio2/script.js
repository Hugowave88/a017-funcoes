



function imprimirParametros(num1, num2){
    const parametro = 2 + 5

   console.log(parametro)
}

imprimirParametros()

//-------------------------------------- B
const verificacao = (num1, num2) =>{
    if (num1>num2) {
        console.log(`O primeiro número é Maior que o segundo`)
    }else if (num2>num1){
        console.log(`O Segundo número é Maior que o primeiro`)
    }else if(num1===num2){
        console.log(`Os números são iguais`)
    }else{
        alert('Entrada inválida')
    }
    return verificacao
}

verificacao (num1, num2)

//--------------------------------------------

const string = (text) =>{
    console.log(`${text.toUpperCase()}`)
    console.log(`Tamanho da String: ${text.length} Caracteres`)
}

string(prompt('Digite aqui uma mensagem.'));

//------------------------------------------------