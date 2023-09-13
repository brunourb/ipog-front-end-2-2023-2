function soma(a,b){
    return a+b;
}

//https://www.w3schools.com/js/tryit.asp?filename=tryjs_arrow_function
function nome(parametroA, parametroB){
    return;
}

nome(1,3);
//argumentos = são os valores passados para a função
//paramêtro é a especificação ou a varíavel que é indicada na assinatura do método
//assinatura do método é a declaração de uso ou a especificação do método nome(parametroA, parametroB)

let somatoria = (a,b) => a+b;
let calculo = () => Math.pow(2,5);

function potencia(){
    return Math.pow(2,5);
}

var valor = soma(1,3);
var valor2 = somatoria(2,3);


console.log(`O valor do somatório é: ${valor}`);
console.log(` O valor do somatório é ${valor2}`);

console.log(` O valor do somatório é ${somatoria(2,3)}`);

console.log(` O valor do somatório é ${calculo}`); //O valor do somatório é () => Math.pow(2,5)
console.log(` O valor do somatório é ${calculo()}`); //32