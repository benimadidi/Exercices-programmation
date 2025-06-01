"""
> Développer un mini-terminal tourant en boucle et gérant quelques commandes definies :
    - Votre programme invitera l'utilisateur à saisir une commande ( comme la ligne de commande Windows, GNU/Linux, Mac os ...)
    - Gérer le cas où une commande n'existe pas 
    - Aucun module ne doit être importé
    
> Quatre commandes à prevoir :
    - run (affiche 5 fois un point avec une pause entre chaque affichage de 1s)
    - name (modifie le nom du terminal, s'appellera "Defaut" de base)
    - help (affiches la liste des commandes + une description brève)
    - quit (termine l'execution du programme)
    
> Ce qui devra être affché : 
        [*]>
        [nom_terminal]>
"""
import time

nom = "Défaut"
while True :
    
    comm = input(f"\n [{nom}]> ")
    if comm == "run" :
        compteur = 0 
        while compteur < 6 :
            print(".")
            time.sleep(1)
            compteur += 1
            
    elif comm == "name" :
        new_name = input("saisir le nom du terminal : ")
        nom = new_name

    elif comm == "help" :
        aide =""" 
----------------------------------
LISTES DES COMMANDES DISPONIBLES
----------------------------------
run  : affiche 5 un point(.)
name : modifier le nom du terminal
help : affcihe l'aide
quit : quitter le terminal 
----------------------------------
"""
        print(aide)
        
    elif comm == "quit" :
        break
    
    else :
        print("la commande n'existe pas ")