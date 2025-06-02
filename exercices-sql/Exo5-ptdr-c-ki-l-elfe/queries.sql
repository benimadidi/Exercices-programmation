
/*
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    EXO SQL #5
    [Révision : sous-requêtes]
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    SOURCE C:/Users/hp/Desktop/Vs_code/Exercices-prog/exercices-sql/Exo5-ptdr-c-ki-l-elfe/wow_data_v1.sql

    // INDICATIONS :
    //  - Definissez des alias aux colonnes affichées dans les résultats de vos requêtes (sauf si SELECT *)
    //  - Ne consultez pas le fichier de la base de données (utilisez) des requêtes pour chercher des informations

    (1) Récupérer le nom et le niveau des personnages faisant partie de la guilde "Casseurs Flotteurs"
    (2) Récupérer les personnages qui jouent la classe Mage
    (3) Y a-t-il des Elfes de la nuit sur le serveur "Dalaran" ?  Et sur le serveur "Kirin Tor" ?
    (4) Récupérer le nom des objets qui ne sont pas possédés par aucun joueur 
*/

-- (1) Récupérer le nom et le niveau des personnages faisant partie de la guilde "Casseurs Flotteurs"
SELECT `character_id` AS "Identifiant", `character_name` AS "Nom du personnage", `character_level` AS "Niveau"
FROM `characters`
WHERE `character_guild_fkid` = (
    SELECT `guild_id`
    FROM `guilds`
    WHERE `guild_name` LIKE "Casseurs Flotteurs%"
);

-- (2) Récupérer les personnages qui jouent la classe Mage
SELECT `character_name` AS "Nom du personnage"
FROM `characters`
WHERE `character_faction_fkid` = (
    SELECT `class_id`
    FROM `classes`
    WHERE `class_name` LIKE "Mage"
);

-- (3) Y a-t-il des Elfes de la nuit sur le serveur "Dalaran" ?  Et sur le serveur "Kirin Tor" ?
SELECT `character_id` AS "Identifiant", `character_name` AS "Elfes"
FROM `characters`
WHERE `character_race_fkid` = (
    SELECT `race_id`
    FROM `races`
    WHERE `race_name` LIKE "Elfe de la nuit"
) AND `character_realm_fkid` = ANY (
    SELECT `realm_id`
    FROM `realms`
    WHERE `realm_name` LIKE "Kirin Tor" 
);

-- Récupérer le nom des objets qui ne sont pas possédés par aucun joueur 
SELECT `item_name` AS "Nom de l'objet"
FROM `items`
WHERE `item_id` NOT IN(
    SELECT `inventory_item_fkid`
    FROM `inventories`
); 

