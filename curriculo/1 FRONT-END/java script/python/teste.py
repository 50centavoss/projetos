nota1 = float(input("DIgite1"))
nota2 = float(input("DIgite2"))
nota3 = float(input("DIgite3"))
nota4 = float(input("DIgite4"))

#processamento de dados
final = (nota1 + nota2 + nota3 + nota4) /4

#saida
print(final)

if final < 60:
     print('reprovo')
elif final < 70:
    print('mediano')
elif final < 80:
    print('muito bom')
else: 
    print('exelente')