"""
    EXERCICE PYTHON #8
[Révision : chaine de caracteres, listes]

> Plusieurs petits resultats à faire afficher pour repondre aux problemes suivants : 
    - afficher tous les elements de la liste 
    - trier les prénoms par ordre alphabétique 
    - combien d'elements contient la liste ? 
    - où est bryan ?
    - supprimer tous les elements commencant par la lettre J (verifier en affichant la liste )
    - notre ami Mike doit devenir Michel
    - ajouter les prenoms Henri, Bryan Junior et Naruto
    - créer une nouvelle liste (à afficher) des prenoms plus de 5 lettres 
    -retrouver Bryan junior et Francoise pour former un couple -> format(str) :<name> + <name> = <3  
    
> Indications : 
    - Parcourir la liste en ayant l'indice de l'element courant -> for i in range(len(<list>))
    - Cherchez au plus simple (pensez aux methodes des chaines et des listes )
    - vous pouvez implementer certaines parties dans des fonctions
"""

people = ["Laura", "Camille", "Bryan", "Josh", "Francoise", "Annabelle", "Nami", "Lexas", "Mike", "Samy", 
          "Jean-Charles", "Jonathan", "Ben", "Marie", "Farah", "Jordana", "Hadir "]
def affichage_liste() :
    for i in people :
        print(i, end='; ')

#Tous les elements de la liste
print("Tous les elements de la liste sont : ")
for i in people :
    print(i, end="; ")
print("\n")
    
#Trier la liste
print("la liste triée ")
people.sort()
affichage_liste()
    
# Le nombre d'element dans la liste 
print("\n")
print(f"le nombre d'element dans la liste est de : {len(people)}")

# La position de Bryan
for i in people :
    if i == "Bryan" :
        print(f"Bryan se trouve à la postion {people.index(i) + 1}")

#Les elements de la liste sans la lettre 'J'      
print("\n")
print("Les elements sans la lettre 'J' sont : " )
for i in people :
    if not i.startswith('J'):
        print(i, end='; ')
print("\n")
        
#Remplacer Mike par Michel
print("Remplacer Mike par Michel ")
index = people.index("Mike")
people[index] = "Michel"
affichage_liste()
print("\n")
    
#Ajout des prenoms Henri, Bryan Junior et Naruto
print("Ajout des prenoms Henri, Bryan Junior et Naruto")
add_people = ["Henri", "Bryan junior", "Naruto"]
people.extend(add_people)
affichage_liste()

