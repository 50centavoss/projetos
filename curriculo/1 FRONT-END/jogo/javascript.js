var jogador = "x";                                                                     
                                                                    
function jogar(celula) {                                                                    
      //alert("funcionou!");                                                
                                                                                     
      if (celula.innerHTML == "") {                                               
                                                                           
            celula.innerHTML = jogador;                                              
                                                                                  
            if (jogador == "x") {                                                                
                  jogador = "o";                                                
                                                                                      
            } else {                                                                             
                  jogador = "x";                                  
                                                                               
            }                                                         
                                                                           
      }                                                               
                                                                   
}                                                               
                                                                      
function reiniciar() {                                               
      window.location.reload();                                         
}                                                                      
                                                                   
const nomes = [                                                      
];                                                                 
                                                                   
function gerarbatalha() {                                          
      const nome1 = nomes[Math.floor(Math.random() * nomes.length)];
      const nome2 = nomes[Math.floor(Math.random() * nomes.length)];
                                                               
      while (nome1 === nome2) {                                 
            gerarBatalha();                                    
      }                                                        
                                                               
      //escrever na tela                                             
      document.getElementById('jogador1').textContent = nome1;
      document.getElementById('jogador2').textContent = nome2;
                                                                  
                                                                
                                                               
}                                                                    
                                                         
function adicionar() {                                   
      var nome = document.getElementById("nome").value;  
      nomes.push(nome);                                  
                                                         
      listar();                                          
                                                         
}                                                        
                                                         
function listar() {                                      
      var listagem = document.getElementById("lista");   
            listagem.innerHTML = "";                     
                                                         
                   for(var i = 0; i < nomes.length; i++){
                  var item = document.createElement("li")
                                                         
                  var nomeitem = nomes[i];               
                  item.innerHTML = nomeitem;             
                  listagem.appendChild(item);            
                                                         
                                                         
      }                                            
}                                                         