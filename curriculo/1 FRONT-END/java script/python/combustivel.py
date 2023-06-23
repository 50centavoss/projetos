preçoAlcol = float(input("insira o valor do alcool:  "))
preçoGasolina = float(input("insira o valor da gasoina"))

resultado = preçoAlcol / preçoGasolina
print(resultado)

if resultado > 0.7:
    print("abasteça com alcool")
else:
     print("abasteça com gasolina")