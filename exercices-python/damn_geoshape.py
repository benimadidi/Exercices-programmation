"""
EXERCICES PYTHON #5 
[Révision : fonctions, modularité]

> Concevoir un module de calcul de périmètre , aire et volume de plusieurs formes géometriques : 
    - votre module sera un fichier nommé "geoshape.py".
    - Vous devrez definir 6 fonctions -> perimetre d'un carré
                                         aire d'un carré
                                         volume d'un cube 
                                         perimetre d'un cercle
                                         aire d'un cercle
                                         volume d'une sphere
    - prévoir l'execution du module en independant qui effectuera le test de toutes vos fonctions
    - La valeur de Pi sera definie dans le module avec pour valeur 3.14 (pour plus de facilité).
    - Les valeurs et résultats seront en flottant - 2 chiffres après la virgule -> print(%.2f" % result)
    
> Idées d'évolution :
    - vous pourrez ajouter de nombreuse autres fonctionsà votre module qui pourra prendre en charge une multitude d'autres formes 
        (rectangle, triangle, losange, pyramide, cône, cylindre, ...)
    - Prendre en charge une certaines fourchette de valeurs seulement (pour le côtéd'un carré, le rayon d'un cercle, ...)

"""

import geoshape

#calcul perimetre
cote = 4
P = geoshape.perimetre_carre(10)
print(f"perimetre = {P}") #... suite trop la flemme de le faire   

print(f"la valeur de PI est : {geoshape.PI()}")