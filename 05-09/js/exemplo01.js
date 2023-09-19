//escopos de variáveis
//let --> utilziada para um contexto interno de uma funçao ou bloco
//const --> utilizada para valores imutáveis, ou seja, sem alteração
//var --> declaração de variável de escopo (acesso) global ao seu código javascript;

let a = 10;
let b = 12;
let soma = a+b;

const VALOR_CONSTANTE = 1;
//VALOR_CONSTANTE = 2; Este código apresenta erro, pois uma constante não pode ser alterada;

//Variáveis de acesso global (escopo) por todo o código javascript.
var nome = "Faculdade IPOG";
nome = "Código de exemplo";

//exibir um pop-up para o cliente no navegador;
console.log(soma);
soma = "Faculdade IPOG";
console.log(soma);

//Concatenção de string
//Quando 'pegamos' um parte de um texto e fazemos o 'merge' ou junção das partes
let nomeFaculdade = "Faculdade IPOG ";
let turma = "ADS2023-2";

console.log(nomeFaculdade+turma);

/*
Comentário em bloco
*/

//Comentário em linha

//https://www.w3schools.com/js/js_let.asp
//Declaração de uso da função LET

let acessoInteiroDoArquivo = "Exemplo de acesso a uma variável let"
console.log(acessoInteiroDoArquivo); //"Exemplo de acesso a uma variável let"

//Escopo pré-determinado
{
    let acessoInteiroDoArquivo = "Faculdade IPOG";
    console.log(acessoInteiroDoArquivo); //"Faculdade IPOG";
}


//variaveis
let n1 = 100;
let n2 = 100;
let n3 = (n1+n2)/2;
console.log("A nota de N3 é: " + n3);

//Isolando o escopo = O que quer dizer isto?
//Quer dizer que este código vai executar apenas o que estiver dentro das chaves
{
    let n1 = 90;
    let n2 = 40;
    let n3 = (n1+n2)/2;
    console.log("A nota de N3 é: " + n3);
}

//Utilização de uso de uma constante
const PI = 3.14;
console.log(PI);

//A instrução abaixo gera erro pois CONSTANTE deve ser INICIALIZADA
//const BASCARA_POSITIVO;
//BASCARA_POSITIVO = (-b + Math.sqrt(delta)/2*a);
let delta = 3;
const BASCARA_POSITIVO = (-b + Math.sqrt(delta)/2*a);
//Uso de concateção com texto + variável javascript
console.log(`O valor de báscara positivo é: ${BASCARA_POSITIVO}`);

const BASCARA_NEGATIVO = (-b - Math.sqrt(delta)/2*a);

//Uso de concateção com texto + variável javascript
console.log(`O valor de báscara negativo é: ${BASCARA_NEGATIVO}`);

