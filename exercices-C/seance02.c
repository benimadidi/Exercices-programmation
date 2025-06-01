/*
Ecrire un programme qui enregistre des produits, leurs quantites ainsi que leur prix
le programme doit permetttre d'effectuer les opérations de vente
*/

#include<stdio.h>
#include<string.h>

int main(void){

    int nombre_cours = 5, cotes ;
    char cours[10] ;

    for(int i = 0 ; i < nombre_cours ; i++){
        printf("saisir nom du cours : ") ;
        scanf("%s", cours) ;
        printf("saisir cotes du couurs : ") ;
        scanf("%d", &cotes) ;

        printf("Note en %s = %d \n", cours, cotes) ;

    }     



    return 0 ;
}