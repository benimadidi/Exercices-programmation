/* 
EXERCICE C #2
[Révision : jusqu'au conditions]
> Ecrire un programme de rendu de monnaie. En saisissant le montant total des achats puis la somme 
    donnée, indiquer la monnaie à rendre (en billets de 20$, 10$, 5$ et pièces de 2$ et 1$)

> Indications : 
    - S'assurer que la somme donnée est bien supérieure à la somme des achats 
    - Gérer le cas où on aurait payé un montant égal aux achats 
    - Rendre le moins de billets/pièces possible (25$ de monnaie -> 1 billet de 20 + 1 billet de 5$)
    - L'opérateur % (modulo) sera utile pour cet exercice
*/

#include<stdio.h>  

int main(void){
    printf("EXERCICE #2 \n") ;
    printf("-------------\n") ;

    int somme_donnee  = 0;
    int somme_achat  = 0; 
    int total ;
    int monnaie20 = 0,monnaie10 = 0, monnaie5 = 0, pieces2 = 0, pieces1 = 0;

    printf("Entrer le total d'achat : ") ;
    scanf("%d", &somme_achat) ;
    printf("donner votre argent: ") ;
    scanf("%d", &somme_donnee) ;
    printf("\n\n") ;

    if (somme_donnee < somme_achat ){
        printf("la somme donnee doit etre > somme de l'achat\n") ;   
    }
    else if (somme_donnee == somme_achat ){
        printf("Pas de monnaie a rendre\nAU REVOIR... \n") ;
    }  
    else{
        total = somme_donnee - somme_achat ;

        monnaie20 = total /20 ;
        total %= 20 ; 
        monnaie10 = total/10 ;
        total %= 10 ;
        monnaie5 = total/5 ;
        total %= 5 ;
        pieces2 = total/2 ;
        total %= 2 ;
        pieces1 = total/1 ;
        total%= 1 ;

        if(monnaie20 > 0)
            printf("nombre de billet(s) de 20 dollars : %d\n", monnaie20) ;
        if(monnaie10 > 0)
            printf("nombre de billet(s) de 10 dollars : %d\n", monnaie10) ;
        if(monnaie5 > 0)
            printf("nombre de billet(s) de 5 dollars  : %d\n", monnaie5) ;
        if(pieces2 > 0)
            printf("nombre de piece(s) de 2 dollars   : %d\n", pieces2) ;
        if(pieces1 > 0)
            printf("nombre de piece(s) de 1 dollars   : %d\n", pieces1) ;
    }

    return 0 ;
}