let num1 = +prompt('Digite um número.')
let num2 = +prompt('Digite outro número.')

const funcSoma = (num1, num2) => {
    let resultado1 = num1 + num2
    console.log(`${num1} + ${num2} = ${resultado1}`)
    return funcSoma
}
funcSoma(num1, num2)

const funcSubt = (num1, num2) => {
    let resultado2 = num1 - num2
    console.log(`${num1} - ${num2} = ${resultado2}`)
    return funcSubt
}
funcSubt(num1, num2)

const funcMultip = (num1, num2) => {
    let resultado3 = num1 * num2;
    console.log(resultado3);
    let num1 = +prompt('Digite um número.');
    let num2 = +prompt('Digite outro número.');


    const funcSoma = (num1, num2) => {
        let resultado1 = num1 + num2;
        console.log(`${num1} + ${num2} = ${resultado1}`);
        return funcSoma;
    }
    funcSoma(num1, num2)

    const funcSubt = (num1, num2) => {
        let resultado2 = num1 - num2;
        console.log(`${num1} - ${num2} = ${resultado2}`);
        return funcSubt;
    }
    funcSubt(num1, num2)

    const funcMultip = (num1, num2) => {
        let resultado3 = num1 * num2;

        console.log(funcMultip)
    }
