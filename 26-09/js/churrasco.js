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
    //dados pessoa
    let txtNome = $("#txtNome").val();
    let txtTelefone = $("#txtTelefone").val();

    //dados da carne
    let txtNomeTipoCorte = $("#txtTipoCorte option:selected").text(); //pega o texto
    let txtTipoCorte = $("#txtTipoCorte").val(); //pega o número
    let txtQtdCarne = Number($("#txtQtdCarne").val());
    
    //dados da bebida
    let txtNomeBebida = $("#txtTipoBebida option:selected").text(); //pega o texto
    let txtTipoBebida = $("#txtTipoBebida").val();
    let txtQtdBebida = Number($("#txtQtdBebida").val());//pega o número

    //Próximo passo é armazenar os dados dentro de um vetor (lista)
    //let aluno = {propriedad: 'VALOR', nota: 10, booleano: true,};

    let pessoa = {
        nome: txtNome,
        telefone: txtTelefone,
        //objeto carne
        carne: {
            nome: txtNomeTipoCorte,
            tipoCorte: txtTipoCorte,
            quantidade: txtQtdCarne
        },
        //objeto bebida
        bebidas: {
            nome: txtNomeBebida,
            tipoBebida: txtTipoBebida,
            quantidade: txtQtdBebida
        }
    };

    //1. Recuperar a informação do localstorage
    //11.1 Verificar se o localStorage em informação
    //Estou inicializando o 'banco de dados' (localStorage, para verificar se ela existe)
    if(localStorage.getItem('pessoas') === null || 
    localStorage.getItem('pessoas') === '' || localStorage.getItem('pessoas') === undefined) {
        var data = [];
        localStorage.setItem('pessoas', JSON.stringify(data));
    }

    let dados = JSON.parse(localStorage.getItem('pessoas'));
    dados.push(pessoa);
    localStorage.setItem('pessoas',JSON.stringify(dados));

  });