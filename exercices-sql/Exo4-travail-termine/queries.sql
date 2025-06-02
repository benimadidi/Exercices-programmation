
/*
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    EXO SQL #4
    [Révision : tables et contraintes]
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    SOURCE C:/Users/hp/Desktop/Vs_code/Exercices-prog/exercices-sql/Exo4-travail-termine/wow_data_v1.sql

    // INDICATIONS :
    //  - Definissez des alias aux colonnes affichées dans les résultats de vos requêtes (sauf si SELECT *)
    //  - Ne consultez pas le fichier de la base de données (utilisez) des requêtes pour chercher des informations


    (1) Vous allez ajouter deux nouvelles tables à la base


        D'abord pour représenter des personnages non joueurs (PNJ) dont les colonnes seront : 

            > Nom du personnage (32 caractères maximum, unique)
            > Fonction du personnage (48 caractères maximum, facultatif)

        Puis  une autre table représentant des quêtes, avec les colonnes : 

            > Nom de la quête (32 caractères maximum, unique) 
            > Objectif de la quête (255 caractères maximum)
            > Personnage non joueur donnant la quête 
            > Personnage non joueur à qui rendre la quête une fois terminée
            > Récompense en pièces de cuivre, par défaut à 0 (100 PC = 1 PA, 100 PA  = 1 PO)



    (2) Supprimez tous les personnages de niveau 1 ou qui ne sont pas dans une guilde 


        Pourquoi la requête échoue ?
        "Corrigez le problème" Afin de rendre la requête en (2) possible et affective
*/

-- (1) Vous allez ajouter deux nouvelles tables à la base
CREATE TABLE IF NOT EXISTS `npc`(
    `npc_id` INT NOT NULL AUTO_INCREMENT, 
    `npc_name` VARCHAR(32) NOT NULL UNIQUE KEY COLLATE utf8mb4_unicode_ci,
    `npc_role` VARCHAR(48) DEFAULT NULL COLLATE utf8mb4_unicode_ci,

    PRIMARY KEY(`npc_id`)
)
ENGINE = InnoDB
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `quests`(
    `quest_id` INT NOT NULL AUTO_INCREMENT, 
    `quest_name` VARCHAR(32) NOT NULL UNIQUE KEY COLLATE utf8mb4_unicode_ci,
    `quest_objective` VARCHAR(255) NOT NULL UNIQUE COLLATE utf8mb4_unicode_ci,
    `quest_from_fkid` INT  NOT NULL,
    `quest_to_fkid` INT NOT NULL,
    `quest_reward` INT DEFAULT '0',

    PRIMARY KEY(`quest_id`),
    FOREIGN KEY(`quest_from_fkid`) REFERENCES `npc`(`npc_id`),
    FOREIGN KEY(`quest_to_fkid`) REFERENCES `npc`(`npc_id`)
)
ENGINE = InnoDB
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;



-- (2) Supprimez tous les personnages de niveau 1 ou qui ne sont pas dans une guilde
DELETE FROM `characters`
WHERE  `character_level` = 1 OR `character_guild_fkid` IS NULL;


ALTER TABLE `inventories`
DROP FOREIGN KEY `inventories_ibfk_2`,
DROP FOREIGN KEY `inventories_ibfk_3`;

ALTER TABLE `inventories`
ADD CONSTRAINT `inventories_ibfk_2` FOREIGN KEY(`inventory_character_fkid`) REFERENCES `characters`(`character_id`) ON DELETE CASCADE,
ADD CONSTRAINT `inventories_ibfk_3` FOREIGN KEY(`inventory_item_fkid`) REFERENCES `items`(`item_id`);
