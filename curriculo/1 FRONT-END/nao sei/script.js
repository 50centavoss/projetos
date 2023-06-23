
function buscar() {
    var cep = document.getElementById('cep').value;      //input de cep, do HTML
    var url ='https://viacep.com.br/ws/'+cep+'/json/';   //link de busca da api

    fetch(url)                                           //vai buscar a url
    .then(response => response.json())                   //assincrono, vai esperar um arquivo json
    .then(data => {                                      //vai esperar para verificar sem tem algum dado8797000
        // alert('funcionou');

        if(data.erro){
            document.getElementById('resultado').textContent = 'CEP não encontrado!';
        }else{
            document.getElementById('resultado').innerHTML = 
            '<strong> Cidade: </strong>'+ data.localidade +'<br>'
            +'<strong> Cep: </strong>'+ data.cep +'<br>'
            +'<strong> Logadouro: </strong>'+ data.logradouro +'<br>'
            +'<strong> bairro: </strong>'+ data.bairro +'<br>'
            +'<strong> Complemento: </strong>'+ data.complemento +'<br>'
            +'<strong> Estado: </strong>'+ data.uf +'<br>'
            +'<strong> Código IBGE: </strong>'+ data.ibge +'<br>';
        }

    }).catch(error => alert('deu errado: '+ error));     
}


