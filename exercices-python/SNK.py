"""
> Créer un programme simulant un combat qui respecte les contraintes suivantes : 
    - Deux joeurs , auxquels on demandera de choisir un pseudo 
    - Les deux combattants démarrent avec 250 points de vie chacun 
    - Le combat se déroule en 4 attaques (joueur1, joueur2, joueur1 et enfin joueur2)
    - Chaque attaque est une tentative (si elle reussit, le joueur infligera un nombre de dégats entre 0 et 100 - 
                                        si elle échoue, l'ataque est ratée , et c'est au tour de l'autre joueur)
    - A la fin du combat (les 4 attaques), on déclare  le gagnant (celui à qui il reste le plus de point de vie)
    
> Indications : 
    - Le déroulement du combat doit etre logique et annoncé à l'utilisateur (affichez du texte , decrivez ce qu'il se passe)
    - Coder dans un premier temps uniquement avec des affichages / saisies, variables, opérations, conditions.
    - Pour les plus avancés , vous pourrez optimiser ce code ensuite en l'adaptant avec vos connaissances (boucles, fonctions, etc.)
    
"""
import random 
import time

#pseudo 
print("")
joueur1 = input("joueur 1, choisissez votre pseudo : ")
print(f"bienvenue {joueur1}")
joueur2 = input("joueur 2, choisissez votre pseudo : ")
print(f"bienvenue {joueur2}")
time.sleep(.800)

print("\nLE COMBAT COMMENCE\n")
input()
(pvj1, pvj2) = (250, 250)
possibilité = [True, False]
def random_attack() :
    att = random.randint(1,100)
    return att 

#1ere attaque
tent = random.choice(possibilité)
if tent == True :
    print(f"{joueur1} attaque ...")

    print(f"{joueur1} à infligé {random_attack()} de dégats")
    pvj2 -= random_attack()
    print(f"{joueur2} il vous reste {pvj2}/250 pv ")
else :
    print(f"{joueur1} a raté son attaque ...")
input()

#2e attaque
tent = random.choice(possibilité)
if tent == True :
    print(f"{joueur2} attaque ...")

    print(f"{joueur2} à infligé {random_attack()} de dégats")
    pvj1 -= random_attack()
    print(f"{joueur1} il vous reste {pvj1}/250 pv")
else :
    print(f"{joueur2} a raté son attaque ...")
input()

#3e attaque
tent = random.choice(possibilité)
if tent == True :
    print(f"{joueur1} attaque ...")

    print(f"{joueur1} à infligé {random_attack()} de dégats")
    pvj2 -= random_attack()
    print(f"{joueur2} il vous reste {pvj2}/250 pv")
else :
    print(f"{joueur1} a raté son attaque ...")
input()
 
#4e attaque
tent = random.choice(possibilité)
if tent == True :
    print(f"{joueur2} attaque ...")

    print(f"{joueur2} à infligé {random_attack()} de dégats")
    pvj1 -= random_attack()
    print(f"{joueur1} il vous reste {pvj1}/250 pv")
else :
    print(f"{joueur2} a raté son attaque ...") 
input()

print("\n FIN DU COMBAT \n")
# le gagnant 
if pvj1 > pvj2 :
    print(f"{joueur1} a gagné avec {pvj1}/250 pv \n")
else :
    print(f"{joueur2} à gagné avec {pvj2}/250 pv \n")
    