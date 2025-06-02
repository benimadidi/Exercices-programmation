
/*
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    EXO SQL #3
    [Révision : ajout, modification et suppression de données]
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    SOURCE C:/Users/hp/Desktop/Vs_code/Exercices-prog/exercices-sql/Exos3-le-changement-c-est-mtn/wow_data_v1.sql

    // INDICATIONS :
    //  - Definissez des alias aux colonnes affichées dans les résultats de vos requêtes (sauf si SELECT *)
    //  - Ne consultez pas le fichier de la base de données (utilisez) des requêtes pour chercher des informations


    (1) Un joueur vient d'acheter un jeton de changement de nom et veut renommer son personnage "Shadi" (ID 25) en "Gigachad"
    (2) Supprimez tous les objets possédés par les personnages Zator et Merlinus
    (3) Un nouveau personnage de la faction Horde est créé : "Doudi", un Sacrenuit mage de niveau 10, sur le royaume "Suramar"
*/

-- (1) Un joueur vient d'acheter un jeton de changement de nom et veut renommer son personnage "Shadi" (ID 25) en "Gigachad"
SHOW TABLES;

SELECT * 
FROM `characters`;

UPDATE `characters`
SET `character_name` = "Gigachad"
WHERE `character_id` = 25;

-- (2) Supprimez tous les objets possédés par les personnages Zator et Merlinus
SELECT `character_id`, `character_name`
FROM `characters`
WHERE `character_name` IN ("Zator", "Merlinus");   -- 30  et 48

DELETE FROM `inventories`
WHERE `inventory_character_fkid` = 30 OR `inventory_character_fkid` = 48 ;

-- (3) Un nouveau personnage de la faction Horde est créé : "Doudi", un Sacrenuit mage de niveau 10, sur le royaume "Suramar"
INSERT INTO `characters` (`character_name`, `character_level`, `character_faction_fkid`, `character_realm_fkid`, `character_class_fkid`, `character_race_fkid`)
VALUES
("Doudi", 10, 2, 26, 7, 22);