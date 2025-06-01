import modules_utilises 

print("Calculatrice algébrique")
print("-----------------------\n")

def fonctionnalites():
    print("1. Opérations fondamentales")
    print("2. Opérations particulières")
    print("3. Opérations exponentielles")
    
def operations():
    print("--------------------")
    print("1.L'addition")
    print("2.La soustraction")
    print("3.La multiplication")
    print("4.La division")
    print("5:Menu precédent")
    print("6:Menu principal")
    
def particulieres():
    print("--------------------")
    print("1.Le PPCM")
    print("2.Le PGCD")
    print("3.La division entière")
    print("4.Le modulo")
    print("5:Menu precédent")
    print("6:Menu principal")
    
fonctionnalites()
def calculatrice():
    while True:
        try:
            type= int(input("Faites votre choix: "))
            if type == 1:
                operations()
                choice = int(input("Faites votre choix! "))
                if choice== 1:
                    nombre1= float(input("Entrez le premier nombre : "))
                    nombre2= float(input("Entrez le second nombre : "))
                    somme = modules_utilises.addition(nombre1, nombre2)
                    print("La somme est de:",somme)
                    print("0:Menu precédent")
                    print("00:Menu principal")
                    auto=int(input("avez-vous fini votre calcul?"))
                    if auto== 0:
                        somme=somme
                        operations()
                        continue
                    else :
                        auto == 00
                        somme = somme
                        fonctionnalites()
                        continue
                    
                elif choice== 2:
                    nombre1 = float(input("Entrez le premier terme : "))
                    nombre2 = float(input("Entrez le second terme : "))
                    difference =modules_utilises.soustraction(nombre1, nombre2)
                    print("La difference est de:",difference)
                    
                elif choice== 3:
                    nombre1 = float(input("Entrez le premier terme : "))
                    nombre2 = float(input("Entrez le second terme : "))
                    produit = modules_utilises.multiplication(nombre1, nombre2)
                    print("Le produit est de:",produit)
                    
                elif choice==4:
                    nombre1 = float(input("Entrez le premier terme : "))
                    nombre2 = float(input("Entrez le second terme : "))
                    quotient = modules_utilises.division(nombre1, nombre2)
                    print("Le quotient est de:",quotient)
                    fonctionnalites()
                    continue
                else:
                    print("Choix invalide")
            elif type== 2:
                particulieres()
                choice= int(input("Faites votre choix!"))
                if choice == 1:
                    nombre1= int(input("Entrez le premier terme:"))
                    nombre2= int(input("Entrez le second terme:"))
                    if nombre1<nombre2 & nombre1%nombre2==0:
                       print("Le ppcm de",nombre1,"et",nombre2,"est",nombre2)
                    elif nombre1<nombre2 & nombre1%nombre2!=0:
                        print("Le ppcm de",nombre1,"et",nombre2,"est 1")
                    elif nombre1>nombre2 & nombre1%nombre2==0:
                        print("Le ppcm de", nombre1, "et", nombre2, "est", nombre1)
                    else:
                        nombre1>nombre2 & nombre1%nombre2!=0
                        print("Le ppcm de",nombre1,"et",nombre2,"est 1")
                elif choice == 2:
                    nombre1 = int(input("Entrez le premier terme:"))
                    nombre2 = int(input("Entrez le second terme:"))
                    if nombre1 < nombre2 & nombre1 % nombre2 == 0:
                        print("Le pgcd de",nombre1,"et", nombre2,"est", nombre1)
                    elif nombre1<nombre2 & nombre1%nombre2!= 0:
                        print("Le pgcd de",nombre1,"et",nombre2,"est 1")
                    elif nombre1>nombre2 & nombre1%nombre2!=0:
                        print("Le ppcm de",nombre1,"et",nombre2,"est 1")
                    else:
                        nombre1 > nombre2 & nombre1 % nombre2 == 0
                        print("Le pgcd de", nombre1, "et", nombre2, "est", nombre2)
                elif choice ==3:
                    nombre1 = int(input("Entrez le premier terme:"))
                    nombre2 = int(input("Entrez le second terme:"))
                    entier = nombre1//nombre2
                    print("La division entière donne:",entier)
                elif choice==4:
                    nombre1 = int(input("Entrez le premier terme:"))
                    nombre2 = int(input("Entrez le second terme:"))
                    module= nombre1%nombre2
                    print("Le modulo donne:",module)
                    fonctionnalites()
                    continue
                else:
                    print("Choix invalide!")
            elif type== 3:
                nombre=int(input("Entrez le nombre"))
                exposant=int(input("Entrez l'exposant"))
                expo= nombre ** exposant
                print(expo)
                fonctionnalites()
                continue
            else:
                print("Choix invalide")
            print("1.OUI    2.NON")
            continuer =int(input("Voulez-vous continuer?"))
            if continuer== 1:
                fonctionnalites()
                continue
            elif continuer== 2:
                break
            else :
                print("SYNTAX ERROR")
                fonctionnalites()
                continue
        except ValueError:
            print("SYNTAX ERROR!! Entrez un nombre")
            fonctionnalites()
            continue
        except ZeroDivisionError :
            print("Division par 0 impossible")
calculatrice()