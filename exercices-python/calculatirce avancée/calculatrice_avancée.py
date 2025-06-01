import modules_utilises

print("Calculatrice algébrique")

def fonctionnalites():
    print("-----------------------\n")
    print("1. Opérations fondamentales")
    print("2. Opérations particulières")
    print("3. Opérations exponentielles")
    
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
                print("\nOpérations fondamentales")
                print("------------------------")
                
                nombre1 = int(input("saisir le premier nombre : "))
                nombre2 = int(input("saisir le second nombre : "))
                operateur = input("choisir un opérateur (1.retour / [+,-,*,/] : ")

                if operateur == "+" :
                    resultat = modules_utilises.addition(nombre1, nombre2)
                elif operateur == "-" :
                    resultat = modules_utilises.soustraction(nombre1, nombre2)
                elif operateur == "*" :
                    resultat = modules_utilises.multiplication(nombre1, nombre2)
                elif operateur == "/" :
                    resultat = modules_utilises.division(nombre1, nombre2)
                    
                print(f"{nombre1} {operateur} {nombre2} = {resultat}")
            
            elif type == 2 :
                particulieres()
                choix = int(input("Faites un choix : "))
                if choix == 1 :
                    nombre1= int(input("Entrez le premier terme : "))
                    nombre2= int(input("Entrez le second terme : "))
                    ppcm = modules_utilises.ppcm(nombre1, nombre2)
                    print(f"le ppcm de {nombre1} et {nombre2} est {ppcm}")
                elif choix == 2 :
                    nombre1= int(input("Entrez le premier terme : "))
                    nombre2= int(input("Entrez le second terme : "))
                    pgcd = modules_utilises.pgcd(nombre1, nombre2)
                    print(f"le pgcd de {nombre1} et {nombre2} est {pgcd}")
                elif choix == 3 :
                    nombre1= int(input("Entrez le premier terme : "))
                    nombre2= int(input("Entrez le second terme : "))
                    division_entiere = modules_utilises.division_entiere(nombre1, nombre2)
                    print(f"la division entière de {nombre1} et {nombre2} est {division_entiere}")
                elif choix == 4 :
                    nombre1= int(input("Entrez le premier terme : "))
                    nombre2= int(input("Entrez le second terme : "))
                    modulo = modules_utilises.modulo(nombre1, nombre2)
                    print(f"le reste de la dision de {nombre1} et {nombre2} est {modulo}")
                    
            elif type== 3:
                nombre=int(input("Entrez le nombre : "))
                exposant=int(input("Entrez l'exposant : "))
                print(f"{nombre} ^ {exposant} = {modules_utilises.exponentiation(nombre, exposant)}")
                                  
            continuer = input("voulez vous continuer ? ")
            if continuer.lower() == "oui" :
                fonctionnalites()
                continue
            elif continuer.lower() != "oui" :
                break
          
        # Gestion d'erreur
        except ValueError:
            print("SYNTAX ERROR!! Entrez un nombre")
            fonctionnalites()
            continue
        except UnboundLocalError :
            print("Operateur incorrect !")
            fonctionnalites()
            continue
            
calculatrice()

