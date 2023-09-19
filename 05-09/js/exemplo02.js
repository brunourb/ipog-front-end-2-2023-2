/*
Desafio:
Faça um algorimo que identifique o aluno com as seguintes características:
* nome
* endereço
* e-mail
* telefone

Para cada aluno, é necessário calcular a nota em 3 partes
* n1
* n2
* n3

Ao final das notas, aplicar uma média aritmética e apresentar o valor;

*/

//Declaração de variável do aluno
//let nome, endereco, email, telefone;
let nome = "Bruno Urbano Rodrigues"; //texto ou literal
let endereco = "Rua do Além"; //texto ou literal
let email = "bruno.rodrigues@ipog.edu.br" ; //texto ou literal
let telefone = "62222222"; //texto ou literal
let aprovado = true; //boolean


//Declaração de variável para as notas (n1,n2,n3 e média);
let n1,n2,n3,media; //javascript não faz 'tipagem', ou seja, pré-determina o tipo da varíavel;
n1 = 8; //number
n2 = 7.9;  //number
n3 = 5.34;  //number
media = (n1+n2+n3) /3;  //number

let texto = `O aluno ${nome} foi aprovado ${aprovado} 
com as respectivas notas: (n1) = ${n1}, (n2) = ${n2}, (n3) = ${n3} e média igual a: ${media}`;

//console.log(texto);

//https://www.w3schools.com/js/js_datatypes.asp
/*JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object*/

/*The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date*/

/*Objeto em javascript é representado pelo símbolo {}
Vetor ou Array em javascript é representado pelo símbolo [];

Se você precisa exibir uma lista de objetos, 
então você irá precisar de juntar a declaração do vetor + objeto
listaObjetos = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
listaNumeros = [1,2,3,4,5,6];
listaTexto = ["texto 1","texto 2","texto 3","texto 4","texto 5",]
*/
                  //0   1 2    3 4  5 //índice
let listaNumeros = [10,34,99,400,65,100];

for(let i=0;i<listaNumeros.length;i++){
    //console.log(listaNumeros[i]);
}


//Desafio MI-2
//Precisamos criar um objeto aluno 
//com as características apresentadas acima

/*Exemplo de um objeto:*/
{}; //objeto
{propriedade: "valor"}; //string
{propriedade: true}; //boolean
{propriedade: 50}; //number
{propriedade: {}}; //object

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

let pessoa = {
    nome : "Bruno Urbano Rodrigues",
    endereco : "Rua do Além",
    email : "bruno.rodrigues@ipog.edu.br",
    telefone : "62222222",
    aprovado: true,
    notas: [8,7.9,5.34]
    /*n1: 8,
    n2: 7.9,
    n3: 5.34,
    media: (n1+n2+n3) /3*/

};
//console.log(`Pessoa: ${pessoa}`);
console.log(`pessoa: ${JSON.stringify(pessoa)}`);
console.log(`Média: ${(pessoa.notas)/3}`);

let variavelAcumulativa = 0.0;
//para percorrer um array/vetor vc precisa verificar o comprimento.
//Este comprimento dar-se-á pela propriedade .length
for(let i=0;i<pessoa.notas.length;i++){
    variavelAcumulativa+=pessoa.notas[i]; //forma adequada
    //variavelAcumulativa=variavelAcumulativa+pessoa.notas[i];
    console.log(pessoa.notas[i]);
}

pessoa.notas.forEach(qualquercoisa=>{
    console.log(qualquercoisa);
});

console.log(`A nota do aluno é: ${variavelAcumulativa/3}`);
console.log(`A nota do aluno é: ${variavelAcumulativa/pessoa.notas.length}`);

//Armazenar os dados de pessoa no navegador
localStorage.setItem('pessoa', JSON.stringify(pessoa)); //dado fica disponível para todo o navegador
sessionStorage.setItem('xpto', "teste session storage"); //dado fica disponível apenas na 'aba' vigente

//Desafio MI-3
/*Criar uma lista de alunos com as propriedades: nome, email, n1,n2,n3
Percorra uma lista de 10 alunos e veja qual o aluno com a maior nota.*/
//listaAluno = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]

/*Dica1: Faça um vetor para preencher a lista de 10 alunos
Dica2: Com o vetor preenchido, verificar qual o aluno com a maior nota.*/

let listaAlunos = [];
/*
listaAlunos.filter(aluno=>{
    aluno.notas;
});*/

for(let i=0;i<10;i++){
    //Returns a random integer from 0 to 9:
    notaAleatoriaN1 = Math.floor(Math.random() * 10);
    notaAleatoriaN2 = Math.floor(Math.random() * 10);
    notaAleatoriaN3 = Math.floor(Math.random() * 10);

    let pessoa = {
        nome : "Aluno "+i,
        endereco : "Endereço "+i,
        email : `aluno${i}@ipog.edu.br`,
        telefone : "62222222",
        aprovado: true,
        notas: [notaAleatoriaN1,notaAleatoriaN2, notaAleatoriaN3]
        /*n1: 8,
        n2: 7.9,
        n3: 5.34,
        media: (n1+n2+n3) /3*/
    
    };
    listaAlunos[i]= pessoa;
}

console.log(listaAlunos);
