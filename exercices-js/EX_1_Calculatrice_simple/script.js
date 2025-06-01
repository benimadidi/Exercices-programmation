/*
- Concevoir une Calculatrice qui fait des calculs simples (+, -, *, /)
- Indications : 
    - Utiliser le maximum des fonctions
*/

let addition = (a = 0, b = 0) => {return a + b ;}
let soustraction = (a = 0, b = 0) => {return a - b;}
let multiplication = (a = 0, b = 0) => {return a * b ;}
let division = (a = 0, b = 0) => {return a / b ;}

console.log("---Calculatrice Simple---");

while (true) {
    let nombre1 = parseInt(prompt("Entrer le nombre 1 : "));
    let nombre2 = parseInt(prompt("Entrer le nombre 2 : "));
    let operateur = prompt("Saisir l'opérateur (+, -, *, /) : ");

    if(operateur === "+"){
        console.log(nombre1 + "+" + nombre2 + "=" + addition(nombre1, nombre2));
    }
    else if(operateur === "-"){
        console.log(nombre1 + " - " + nombre2 + " = " + soustraction(nombre1, nombre2));
    }
    else if(operateur === "*"){
        console.log(nombre1 + " * " + nombre2 + " = " + multiplication(nombre1, nombre2));
    }
    else if(operateur === "/"){
        if (nombre2 > 0){
            console.log(nombre1 + " / " + nombre2 + " = " + division(nombre1, nombre2));
        }
        else{
            console.log("Division par 2 impossible!") ;
            continue ;
        }
    } 
    else {
        console.log("Opérateur inconnu !");
    }

    let continuer = prompt("Voulez-vous continuer ? (oui/non) : ");
    if (continuer !== "oui") {
        break;
    }
}