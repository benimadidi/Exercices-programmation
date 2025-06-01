
while True :

    try :

        nombre1 = float(input("saisir le nombre 1 : "))
        nombre2 = float(input("saisir le nombre 2 : "))
        operateur = input("choisir un opérateur (+,-,*,/) : ")

        if operateur == "+" :
            resultat = nombre1  + nombre2
        elif operateur == "-" :
            resultat = nombre1 - nombre2
        elif operateur == "*" :
            resultat = nombre1 * nombre2
        elif operateur == "/" :
            resultat = nombre1 / nombre2
        print("le resultat est de : ", resultat)

        continuer = input("voulez vous continuer ? ")
        if continuer.lower() != "oui" :
            break
        
    except ZeroDivisionError :
        print("erreur : division par 0 impossible !")
        continue
    except ValueError :
        print("entrer un nombre correct !")
        continue
    except NameError :
        print("veuilez choisir un opérateur !")
        continue


