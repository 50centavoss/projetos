#Algoritimo que faz tabuada de número
numero = int (input("Insira o nunmero para a tabuada:   "))
def multiplicar(numero):
    for i in range(0,11):
     print(numero , "x", i , "=", numero * i)
        
#multiplicar(numero) 


def verificarPar(numero):
    if numero   % 2 == 0:
        print("É um numero par")
    else:
        print("É um numero impar")
        
verificarPar(numero)


    
    
    