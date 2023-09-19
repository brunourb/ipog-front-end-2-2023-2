/*
Classe de exemplo para utilizar o modo shorter do JQuery
*/

$(function(){

    //Esta funçao é idêntica a função document.ready pois carrega sempre no load da página
    // jQuery methods go here...

    console.log("Estou carregando os dados da página para manipular com JQuery");
    //let nome = $("#txtNome").val();
    //alert(`O texto digitado foi: ${nome}`);

  
  });

  //PULO DO GATO
  //Vamos criar uma função específica para buscar as informações
  //contidas no formulário

  //JQuery, por favor, busque o selector chamado frmCadastro
  //Por seguinte, na ação de submit, preciso que você passe um evento como argumento da função
  //Este evento será a ação de submit e preciso que você cancele a 'atualização' da página, para que
  //eu não perca os dados enviados
  //Form Events: submit, change, focus, blur
  $("#frmCadastro").submit(function(event){
    //Para evitar o envio do formulário utilizaremos a seguinte instrução:
    event.preventDefault();

    //Para 'debugar' as informações relacionadas a event https://www.w3schools.com/jsref/event_target.asp
    let element = event.target;
    //TODO Professor, verificar como pegar o nome do event enviado pelo JQuery
    console.log(`Acessando o formulário de cadastro | event: ${element.tagName}`);

    //Estamos buscando os dados do formulário
    let nome = $("#txtNome").val();
    let email = $("#txtEmail").val();

    //Estamos apresentado as informações para o usuário;
    alert(`Os valores digitados foram: ${nome} e ${email}`);


  });


  //$(selector).action()


