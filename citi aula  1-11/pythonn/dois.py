entrada = input("digite doido: ")
i = 0
teste = True
while i<=len(entrada)//2 and teste:
    if entrada[i] != entrada[len(entrada)-i-1]:
        teste = False
    i+=1
if teste:
    print("é palindromo")
else:
    print("n é palindromo")