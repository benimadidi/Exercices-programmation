
let balance = 100000;
let pin = "1234" ;
let tentatives = 3;

/*-----------------------------------------------------------------------------------*/
// Fonction pour le menu 
function menu(){
    console.log("Bienvenu sur Mpesa \n------------------");
    console.log("Faites votre choix : \n1. Dépot\n2. Retrait\n3. Vérification de la balance\n4. Achat forfaits\n5. Mdifier le code Pin\n6.Quitter.")

}

/*-----------------------------------------------------------------------------------*/
//Fonction pour le Depot
function depot(){
    console.log("1. Retour");
    let montant = parseInt(prompt("Combien tu veux deposer : "));
    if (montant === 1){
        menu();
        return ;
    }
    if(montant > 0){
        while(tentatives > 0){
            let code_pin = Array(pin.length).fill("_").join("") ;
            console.log(`Votre code pin : ${code_pin}`);
            let saisie_pin = prompt("Saisi ton pin : ");
            if (saisie_pin === pin){
                balance += montant ;
                console.log("Felicitations !");
                console.log(`Nouveau solde : ${balance}`)
                break ;
            }
            else{
                tentatives -= 1;
                console.log(`Code Pin incorrect, il vous reste ${tentatives} tentative(s) !`);
            }
        }
    }
    else{
        console.log("Montant invalide !");
    }
}

/*-----------------------------------------------------------------------------------*/
//Fonction pour le retrait
function retrait(){
    console.log("1. Retour");
    let montant = parseInt(prompt("Saisi le montant que tu veux retirer : "));
    if (montant === 1){
        menu();
        return ;
    }
    if(montant > 0){
        while(tentatives > 0){
            let code_pin = Array(pin.length).fill("_").join("") ;
            console.log(`Votre code pin : ${code_pin}`);
            let saisie_pin = prompt("Saisi ton pin : ");
            if (saisie_pin === pin){
                balance -= montant ;
                console.log("Felicitations !");
                console.log(`Nouveau solde : ${balance}`)
                break ;
            }
            else{
                tentatives -= 1;
                console.log(`Code Pin incorrect, il vous reste ${tentatives} tentative(s) !`);
            }
        }
    }
    else{
        console.log("Montant invalide !");
    }
}

/*-----------------------------------------------------------------------------------*/
//Fonction pour la verification de la balance
function verif(){
    console.log("---Vérifier la balance---");
    while(tentatives > 0){
        let code_pin = Array(pin.length).fill("_").join("") ;
        console.log(`Votre code pin : ${code_pin}`);
        let saisie_pin = prompt("Saisi ton pin : ");
        if (saisie_pin === pin){
            console.log("Felicitations !");
            console.log(`Votre solde est de : ${balance}`);
            break ;
        }
        else{
            tentatives -= 1;
            console.log(`Code Pin incorrect, il vous reste ${tentatives} tentative(s) !`);
        }
    }
}
/*-----------------------------------------------------------------------------------*/
//Fonction pour les achats des différents forfaits
function achat(){
    console.log("Forfait internet \n1. Forfait journalier\n2. Forfait hebdomadaire\n3. Retour");
    let opt = parseInt(prompt("Choisi une option : "));
    while(opt === 1 || opt === 2 || opt === 3){
        if (opt === 1){
            let GO1 = 2500;
            let GO2 = 3500 ;
            let Mo500 = 1500 ;
            console.log(`1. 1Go = ${GO1} Fc\n2. 2Go = ${GO2} Fc\n3. 500Mo = ${Mo500} Fc`);
            let choix = parseInt(prompt("Fait un choix : "));
            while (choix === 1 || choix === 2 || choix ===3){
                if (choix === 1){
                    while(tentatives > 0){
                        let code_pin = Array(pin.length).fill("_").join("") ;
                        console.log(`Votre code pin : ${code_pin}`);
                        let saisie_pin = prompt("Saisi ton pin : ");
                        if (saisie_pin === pin){
                            balance -= GO1 ;
                            console.log("Vous avez activé 1Go !");
                            console.log(`Votre balance est de : ${balance}`);
                            return ;
                        }
                        else{
                            tentatives -= 1;
                            console.log(`Code Pin incorrect, il vous reste ${tentatives} tentative(s) !`);
                        }
                    }
                }
                else if (choix === 2){
                    while(tentatives > 0){
                        let code_pin = Array(pin.length).fill("_").join("") ;
                        console.log(`Votre code pin : ${code_pin}`);
                        let saisie_pin = prompt("Saisi ton pin : ");
                        if (saisie_pin === pin){
                            balance -= GO2 ;
                            console.log("Vous avez activé 2Go !");
                            console.log(`Votre balance est de : ${balance}`);
                            return ;
                        }
                        else{
                            tentatives -= 1;
                            console.log(`Code Pin incorrect, il vous reste ${tentatives} tentative(s) !`);
                        }
                    }
                }
                else if (choix === 3){
                    while(tentatives > 0){
                        let code_pin = Array(pin.length).fill("_").join("") ;
                        console.log(`Votre code pin : ${code_pin}`);
                        let saisie_pin = prompt("Saisi ton pin : ");
                        if (saisie_pin === pin){
                            balance -= Mo500 ;
                            console.log("Vous avez activé 500Mo !");
                            console.log(`Votre balance est de : ${balance}`);
                            return ;
                        }
                        else{
                            tentatives -= 1;
                            console.log(`Code Pin incorrect, il vous reste ${tentatives} tentative(s) !`);
                        }
                    }
                }
                else
                    console.log("Choix incorrect !")
                    continue ;
            }
        }
        else if (opt === 2){
            let Go10 = 15000;
            let Go30 = 45000;
            console.log(`1. 10Go = ${Go10} Fc\n2. 30Go = ${Go30}`);
            let choix = parseInt(prompt("Fait un choix : "));
            while (choix === 1 || choix === 2){
                if (choix === 1){
                    while(tentatives > 0){
                        let code_pin = Array(pin.length).fill("_").join("") ;
                        console.log(`Votre code pin : ${code_pin}`);
                        let saisie_pin = prompt("Saisi ton pin : ");
                        if (saisie_pin === pin){
                            balance -= Go10 ;
                            console.log("Vous avez activé 10Go !");
                            console.log(`Votre balance est de : ${balance}`);
                            return ;
                        }
                        else{
                            tentatives -= 1;
                            console.log(`Code Pin incorrect, il vous reste ${tentatives} tentative(s) !`);
                        }
                    }
                }
                else if (choix === 2){
                    while(tentatives > 0){
                        let code_pin = Array(pin.length).fill("_").join("") ;
                        console.log(`Votre code pin : ${code_pin}`);
                        let saisie_pin = prompt("Saisi ton pin : ");
                        if (saisie_pin === pin){
                            balance -= Go30 ;
                            console.log("Vous avez activé 30Go !");
                            console.log(`Votre balance est de : ${balance}`);
                            return ;
                        }
                        else{
                            tentatives -= 1;
                            console.log(`Code Pin incorrect, il vous reste ${tentatives} tentative(s) !`);
                        }
                    }
                }
            }
        }
        else if (opt === 3){
            menu();
            return ;
        }
    }
}

/*-----------------------------------------------------------------------------------*/
//Foncton pour modifier le code Pin 
function modif(){
    console.log("--Modifier le code Pin--");
    while(tentatives > 0){
        let code_pin = Array(pin.length).fill("_").join("") ;
        console.log(`Votre code pin : ${code_pin}`);
        let saisie_pin = prompt("Saisi ton ancien pin : ");
        if (saisie_pin === pin){
            console.log("OK !");
            let nouveau = prompt("Saisi le nouveau Pin : ") ;
            let confirme = prompt("Confirmer le nouveau Pin : ");
            if (nouveau === confirme){
                console.log("Code Pin enregistré avec succès")
                break ;
            }
            else {
                console.log("Echec de la confirmation du mot de passe ");
                continue ;
            }
        }
        else{
            tentatives -= 1;
            console.log(`Code Pin incorrect, il vous reste ${tentatives} tentative(s) !`);
        }
    }
}
/*-----------------------------------------------------------------------------------*/ 
//Fonction principale
function main(){
    while(true){
        try{
            menu();
            let choix = parseInt(prompt("Fait ton choix : "));
            if (choix === 1){
                depot();
            }
            else if(choix === 2){
                retrait();
            }
            else if(choix === 3){
                verif();
            }
            else if(choix === 4){
                achat();
            }
            else if(choix === 5){
                modif();
            }
            else if(choix === 6){
                console.log("Merci de nous avoir consulté");
                break ;
            }

            let continuer = prompt("Tu veux continuer (oui/non): ").toLowerCase();
            if (continuer !== "oui"){
                    balance = balance; 
                    pin = pin ;
                    tentatives = tentatives ;
                    break;
            }
        }
        catch(e){
            console.log("Une erreur s'est produite !!");
            console.log(`Nom : ${e.name}`) ;
            console.log(`Message : ${e.message}`);
            break ;
        }
        
    }
}

/*-----------------------------------------------------------------------------------*/
//Lancement du programme 
main();