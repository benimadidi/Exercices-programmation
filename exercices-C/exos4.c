/*
EXERCICE C #4 

> Ecrire un programme de calculatrice simple pour 2 nombres : 
    - Afficher un menu principal proposant les 4 types de calcul (+,-,*,/) ou de quitter
    - Une fois le calcul choisi, demander la saisie de 2 nombres et afficher le resultat 
    - Rediriger sur le menu principal 

> Indications :     
    - Utiliser au maximum des fonctions (pour optimiser votre code et éviter les repetitions)
    - Verifier que la saisie au menu est correct, sinon redemander une saisie
    - Verifier que les nombres saisis sont compris entre -1000 et 1000.
 
*/

#include <stdio.h>

void menu() ;
void nombres(int *nombre1, int *nombre2) ;

int main(void){

    menu() ;

    int choice ;
    int nombreA ;
    int nombreB ;
    int calcul ;

    printf("saisissez votre choix : ") ;
    scanf("%d", &choice) ;

    while(choice != 5){
        if (choice == 1){
            printf("-Addition \n");
            nombres(&nombreA, &nombreB);
            calcul = nombreA + nombreB;
            printf("%d + %d = %d\n", nombreA, nombreB, calcul);
            break;
        }
        else if (choice == 2){
            printf("Soustraction \n");
            nombres(&nombreA, &nombreB);
            calcul = nombreA - nombreB;
            printf("%d - %d = %d\n", nombreA, nombreB, calcul);
            break;            
        }
        else if (choice == 3){
            printf("Multiplication \n");
            nombres(&nombreA, &nombreB);
            calcul = nombreA * nombreB;
            printf("%d * %d = %d\n", nombreA, nombreB, calcul);
            break;
        }
        else if (choice == 4){
            printf("Division \n");
            nombres(&nombreA, &nombreB);
            if(nombreB != 0 ){
                float calcul ;
                calcul =  nombreA /  (float) nombreB;
                printf("%d / %d = %.2f\n", nombreA, nombreB, calcul);
                break;
            }
            else
                printf("Erreur! Division par 0 impossible \n") ;
        }
        else if(choice == 5){
            break;
        }
        else
            printf("Choix invalide! \n\n") ;

        menu() ;
        printf("saisissez votre choix : ") ;
        scanf("%d", &choice) ;
    }

    return 0 ;
}

void menu(){ 
    printf("Calculatrice simple \n") ;
    printf("------------------- \n") ;
    printf("1. Addition \n") ;
    printf("2. Soustraction \n") ;
    printf("3. Multiplication \n") ;
    printf("4. Division \n") ;
    printf("5. Quitter \n") ;
}
void nombres(int *nombre1, int *nombre2){

    printf(">") ;
    scanf("%d", nombre1) ;
    printf(">") ;
    scanf("%d", nombre2) ;
}

/*
printf(" l'operateur : ") ;
scanf(" %c", operateur) ;
 l'espace avant le %c dans le scanf sert a supprimer tout les \n
 laisser par le buffer ce qui permet de lire ce que l'on attend 
*/
