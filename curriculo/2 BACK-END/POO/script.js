var nome1 = 'Paula'
var nome2 = 'Ruth'
var nome3 = 'Tiago'

var idade1 = 25;
var idade2 = 30;
var idade3 = 40;
function falar(nome, idade){
    alert("Pessoa criada: Olá meu nome é "+nome+" e tenho "+idade+" anos ")

}
falar(nome1, idade1);
falar(nome2, idade2);
falar(nome3, idade3);


class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade; 
    }
    falar(){
        alert("Pessoa criada: Olá meu nome é "+this.nome+" e tenho "+ this.idade+" anos ")
    }
}

var pessoa1 = new Pessoa('Asterisco', 71);
var pessoa2 = new Pessoa('Rodrigo', 50);
var pessoa3 = new Pessoa('Maicon', 48);
pessoa1.falar();
pessoa2.falar();
pessoa3.falar();






 