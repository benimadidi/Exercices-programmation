"""
EXERCICE PYTHON #10
[Révision : dictionnaires, fichiers]  

> Vous allez développer un programme de quizz qui : 
    - va lire un fichier JSON contenant des question/reponses
    - va poser à l'utilisateur chaque question une par une 
    - après chaque reponse, le programme indiquera si la reponse est juste ou non
    - à la fin du quizz, un score est affiché (nombre de bonnes réponses ibtenues)
    
> Indications :
    - vous utiliserez le module "json" (voir documentation officielle)
        - si vous ne connaissez pas ce format, visionnez la video dediée
    - veillez à ouvrir le fichier des questions/reponses avec le bon encodage (utf-8)
    - les questions/reponses seront traitées avec une casse insensible (le casefold())
    - n'hesitez pas à creer votre propre fichier des questions/réponses 
"""

import json

quizz = []
score =  0

with open("c:/Users/hp/Desktop/VS CODE/Python_cours/projets_pour_formation/quizz/questionnaire.json", "r", encoding="utf-8") as f :
    quizz = json.load(f)


for i in range(1, len(quizz) + 1) :
    quel_ligne = quizz[i-1]
    question = quel_ligne[f"q{i}"]
    reponse = quel_ligne[f"r{i}"]
    
    reponse_utilisateur = input(f"{question} ")
    
    if reponse_utilisateur.casefold() == reponse.casefold() :
        score += 1 
        print("Bonne reponse !")
    else : 
        print("Mauvaise réponse... ")
        print(f"La réponse était {reponse}")
        
print(f"\nQuiz terminé, vous avez obtenu un score de {score}/5 !")