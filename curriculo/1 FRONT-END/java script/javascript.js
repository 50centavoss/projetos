//alert('olá, mundo');

var numero = 25;

if(numero > 10){
    //alert('numero maior que 10');
}else {
    //alert('numero menor que 10');
    }

    var contador = 0;

    //enquanto contador for menor que 5 executa
    while(contador < 5){
       // alert('Numero: '+ contador );
        contador = contador + 5;
    }

    //criação de lista - Fulano 0, Ciclano 1, Deltrano 2
   // var nomes = ['Fulano', 'Ciclano', 'Deltrano'];

    //alert(nomes[0]);
 
    //nome.length = 3 
    for(contador=0; contador  < nomes.length; contador ++){ 
        //alert(nomes [contador]);

        if(nomes [contador]); 
           // alert('Pessoa Encontrada' )
    }

    //função

    function baixarEstoque(){
        alert("Baixou estoque!");
    }

    function movimentarCaixa(){
        alert("Caixa momentado");
    }

    function fazerVenda(){
        baixarEstoque();
        movimentarCaixa();

       //DOM -
        var titulo = document.getElementById('texto');
        titulo.innerHTML = "amo sr oregano my fã numero 1   52"
    }
        //objeto
      var pessoa = { idade:10, nome: 'Ricardo', altura: 1.50};
      alert(pessoa.idade);

    