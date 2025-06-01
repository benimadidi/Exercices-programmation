
import random

print("\nBIENVENUE DANS LE JEU DU PENDU ")
print("-------------------------------------")

while True :
    mots = {"chat" : "c'est un flemmard", "chien": "c'est le meilleur ami de l'homme", "oiseau" : "l'ami du ciel",
            "poisson" : "vie dans l'eau","lion" : "roi de la savane","arbre " : "un etre vivant",
            "fleur" : "le meilleur cadeau pour un date", "soleil" : "le plus brillant", "pluie" : "un torrent",
            "nuage" : "un avertissement contre la pluie","pomme" : "le fruit defendu", "banane" : "un fruit jaune",
            "pizza" : "le plat préféré des italiens", "gâteau" : "le bord pour un anniversaire ",
            "chocolat" : "la sucrerie que les enfants préfèrent","livre" : "communement appelé 'boucin'",
            "table" : "là où on mange", "chaise" : "un endroit où l'on s'assoit",
            "porte" : "je suis un defonceur de ...", "fenêtre" : "je regarde à travers ..."
            }
    
    mots_a_trouver = random.choice(list(mots.keys()))
    coups_restants = 10
    lettre_trouvees = ["_"] * len(mots_a_trouver)

    while coups_restants > 0 and "_" in lettre_trouvees :
        print("mots a trouvées :", *lettre_trouvees)
        print("indice :", mots[mots_a_trouver])
        lettre = input("saisissez une lettre : ").lower()

        if len(lettre) == 1 :
            if lettre in mots_a_trouver :
                for  i in range(len(mots_a_trouver)) :
                    if mots_a_trouver[i] == lettre :
                        lettre_trouvees[i] = lettre
                print("bonne lettre !")
            else :
                coups_restants -= 1
                print("mauvaise lettre, il vous reste : ", coups_restants, "coups")  
        else :
            print("vous ne devez entrer qu' une seule lettre !")
            print("---------------------------")

    if "_" not in lettre_trouvees :
        print("")
        print("Felicitations vous avez trouvé le mot ! ") 
        print("votre mot est ", mots_a_trouver)
    else : 
        print("Vous avez perdu. le mot était : ", mots_a_trouver)

    continuer = input("voulez vous continuer (oui/non): ")
    if continuer.lower() != "oui" :
        break