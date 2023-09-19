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

  $("#texto").click(function(){
    let variavel = 'Texto de exemplo';
    console.log(`Concatenação (união) de texto com variável javascript ${variavel}`)
    console.log("Concatenação (união) de texto com variável javascript " +variavel);
    console.log('Concatenação (união) de texto com variável javascript ' +variavel);

    alert(`O valor do elemento selecionado é: ${$("#texto").text()}`)
  });

  $("#jqueryManipulacaoHtml").click(function(){
    console.log(`Conteúdo da div é: ${$("#jqueryManipulacaoHtml").html()}`)
  });

  $("#textoInput").click(function(){
    console.log(`O conteúdo do input é: ${ $("#textoInput").val() }`);
  });

  $("#lista_pokemon").click(function(){
    $.get("https://pokeapi.co/api/v2/pokemon/", function(resultado, status){
      
      let pokemon = JSON.parse(JSON.stringify(resultado));
      //console.log(pokemon); Imprime todo conteúdo
      console.log(`A quantidade de pokémons da lista é: ${pokemon.count}`);
      //console.log()

      for(let i=0;i<pokemon.results.length;i++){
        //console.log(pokemon.results[i].name);
        //console.log(pokemon.results[i].url);
        $("ol").append(`<li>${pokemon.results[i].name}</li>`);
      }

      //JSON.stringify(resultado) converte o resultado a consulta em texto;
      //JSON.Parse(resultado) convert o texto em objeto {}.
      //console.log("Data: " + JSON.stringify(resultado) + "\nStatus: " + status);
      //No javascript objeto é representado pelo símbolo {}
      //NO javsacript array (vetor) é representado pelo símbolo []
      //Então se você tem uma lista de objetos a representação é: [ {}, {}, {} ]
      //alert("Data: " + (resultado) + "\nStatus: " + status);
      //localStorage.setItem("banco_waldinei", JSON.stringify(resultado));
    });
  });

  /*
  $("#textoInput").onkeypress(function(){
    console.log(`O conteúdo do input é: ${ $("#textoInput").val() }`);
  });

  //Exercício
  //Alterar o conteúdo da o identificador p1 para o seguinte texto: 
  //"Texto de exemplo alterado" e mudar o css para verde cyan
  //usar o evento mouseenter

  /*$("#p1").mouseenter(function() {
    $("#p1").text("Texto de exemplo alterado").css('color', 'cyan')
  });

$('#manipulacaoTexto').mouseleave(function () { 
        $('#p1').css({'background':'green','color':'yellow','font-size':'40px'})
        $('#p1').text("Uhu! Consegui!")

   });
*/
  



