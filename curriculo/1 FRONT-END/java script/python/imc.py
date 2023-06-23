#enrada de dados
altura = float(input("Digite sua altura: "))
peso = float(input("Digite seu peso: "))

#processamento de dados
imc = peso / ( altura * altura )

#saida
print(imc)

if imc < 15:
     print('muito')
elif imc < 18.5:
    print('magreza leve')
    
elif imc < 24.9:
    print('Peso Normal')
elif imc < 29.9:
    print('Acima do peso')
elif imc < 39.8:
    print('Obesidade I')
elif imc < 40:
    print('Obesidade II')
else:
    print('Obesidade III')