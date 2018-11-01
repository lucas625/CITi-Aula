entrada = input("digite a entrada: ")
retorno = []
aux = ""
entrada+=" "
for i in entrada:
    if i != " ":
        aux+=i
    else:
        retorno.append(aux)
        aux = ""
print(retorno)
