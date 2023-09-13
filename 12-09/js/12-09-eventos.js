function executarFuncaoMouseOver(){
    console.log("Passei o mouse");
}

function executarFuncaoMouseOut(){
    console.log("Sai do texto");
}

function capturarEventoTeclado(event){
    console.log(event);
}

function executarEventoForm(event){
    //console.log(event);
}

function validarSenha(input,event){
    //para 'pegar' a referencia de um elemento no html usando javascript puro,
    //comumente utilizamos o identificador, vulgo ID.
    let senha = document.getElementById("txtSenha").value;
    let confirmaSenha = input.value;
    if(senha == confirmaSenha){
        console.log('Senha igual');
    }else{
        console.log('senha diferente')
    }
    //console.log(event);
}


