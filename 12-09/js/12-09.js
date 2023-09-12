//Desafio MI-3
/*Criar uma lista de alunos com as propriedades: nome, email, n1,n2,n3
Percorra uma lista de 10 alunos e veja qual o aluno com a maior nota.*/
//listaAluno = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]

/*Dica1: Faça um vetor para preencher a lista de 10 alunos*/

//console.log("Teste de carregamento da página");

//Primeiro você precisa criar um objeto aluno
//objeto
//https://www.w3schools.com/js/js_random.asp
//Para evitar de escrever números de 0 à 10. Utilizaremos a função Random para gerar
//estes números = Math.floor(Math.random() * 10),
//n1 =  100;
let aluno = {
    nome: "Bruno Urbano Rodrigues",
    email: "bruno.rodrigues@ipog.edu.br",
    n1: Math.floor(Math.random() * 100)/10,
    n2: Math.floor(Math.random() * 100)/10,
    n3: Math.floor(Math.random() * 100)/10,
    //media: n1 //n1 is not defined
    //media: aluno.n1 //Cannot access 'aluno' before initialization
    media: 0
};

aluno.media = (aluno.n1+aluno.n2+aluno.n3)/3;

//console.log(aluno);

//vetor ou array
let listaAluno = [];

console.log(`Lista de alunos: ${listaAluno}`);

//Para imprimir objetos precisamos utilizar a função JSON.stringfy
//Para converter um texto em objeto utilizamos a função JSON.parse


//ENTRADA
for(let i=0;i<10;i++){

    let aluno = {
        nome: `Aluno ${i}`,
        email: `aluno${i}@ipog.edu.br`,
        n1: Math.floor(Math.random() * 100)/10,
        n2: Math.floor(Math.random() * 100)/10,
        n3: Math.floor(Math.random() * 100)/10,
        //media: n1 //n1 is not defined
        //media: aluno.n1 //Cannot access 'aluno' before initialization
        media: 0
    };

    listaAluno.push(aluno);
    //console.log(`Lista de alunos: ${listaAluno}`);

    /*setTimeout(() => {
        //listaAluno.push(aluno);
        console.log(`Objeto aluno: ${JSON.stringify(aluno)}`);
    }, 10000);*/

}

//console.log(`Lista de alunos: ${JSON.stringify(listaAluno)}`);

//PROCESSAMENTO - CALCULAR MÉDIA DE TODOS OS ALUNOS
let comprimentoVetor = listaAluno.length;

for(let i=0;i<comprimentoVetor;i++){
    //console.log(listaAluno[i].nome);

}

//for-in utiliza-se para OBJETO
for(let propriedade in aluno){
    //console.log(aluno[propriedade]); //aluno['nome'];
}

//for-of utiliza-se para LISTA
for(let aluno of listaAluno){
    //console.log(aluno.nome);

}

listaAluno.forEach(variavelQualquer=>{
    //console.log(variavelQualquer.nome);
});


//Fazer o cálculo da média
listaAluno.forEach(itemDaLista=>{
    itemDaLista.media = (itemDaLista.n1+itemDaLista.n2+itemDaLista.n3)/3;
    //https://www.w3schools.com/js/js_number_methods.asp
    itemDaLista.media =  itemDaLista.media.toFixed(2); //para imprimir apenas 2 casas decimais 
    //console.log(`Aluno: ${itemDaLista.nome} - média: ${itemDaLista.media}`);
});


//Imprimir o nome e a média do aluno
listaAluno.forEach(aluno => {
    console.log(`Aluno: ${aluno.nome} - média: ${aluno.media}`);
});





