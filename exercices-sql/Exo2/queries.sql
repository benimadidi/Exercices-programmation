 
/*
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    EXO SQL #2
    [Révision : Lecture et filtrage de données]
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    SOURCE C:/Users/hp/Desktop/Vs_code/Exercices-prog/exercices-sql/Exo2/wow_data_v1.sql

    // INDICATIONS : 
    //  - Définissez des alias aux colonnes affichées dans les résultats de vos requêtes (sauf si SELECT *).
    //  - Ne consulter pas le fichier de la base de données (utilisez des requêtes pour chercher des informations).


    (1) Afficher la liste des classes du jeu 
    (2) Afficher cette même liste, mais triée par ordre alphabétique sur le nom 
    (3) Afficher les personnages de l'identifiant 8 (inclus) à 13 (inclus)
    (4) Afficher le nom des objets qui contiennent le terme "Recette"
    (5) Afficher le nom et le niveau des personnages qui ont atteint le niveau 70 (tri croissant sur le nom)
    (6) Afficher les objets qui sont ni vendables, ni echangéables
*/


-- (1) Afficher la liste des classes du jeu
SHOW TABLES;
SELECT * FROM `classes`;

--(2) Afficher cette même liste, mais triée par ordre alphabétique sur le nom 
SELECT *
FROM  `classes`
ORDER BY `class_name`;

-- (3) Afficher les personnages de l'identifiant 8 (inclus) à 13 (inclus)
SELECT * 
FROM `classes`
ORDER BY `class_id`
LIMIT 13 OFFSET 7;

-- (4) Afficher le nom des objets qui contiennent le terme "Recette"
SELECT *
FROM `items`
WHERE `item_name` LIKE "Recette%";

-- (5) Afficher le nom et le niveau des personnages qui ont atteint le niveau 70 (tri croissant sur le nom)
SELECT `character_name` AS 'Nom du joueur', `character_level` AS 'Niveau du joueur'
FROM `characters`
WHERE `character_level` = 70
ORDER BY `character_name` ASC;

-- (6) Afficher les objets qui sont ni vendables, ni echangéables
SELECT * 
FROM `items`
WHERE `item_tradeable` IS NULL;