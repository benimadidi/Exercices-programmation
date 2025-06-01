#include <stdio.h>

#define NBR_COURS 3

int main(void){

    char cours[NBR_COURS][10] ;
    int cotes[NBR_COURS] ;
    int somme = 0, moy ;
    float pourc ;

    printf("Chargez les cours svp! \n") ;
    printf("--------------------- \n") ;

    for(int i = 0 ; i < NBR_COURS ; i++){
        printf("chargez le nom du cours numero [%d] : ", i+1) ;
        scanf("%s", cours[i]) ;
        printf("saisissez la cote du cours de [%s] : ", cours[i]) ;
        scanf("%d", &cotes[i]) ;
    }
    printf("\n--------------------- \n") ;
    for(int j = 0 ; j < NBR_COURS ; j++){
        printf("%s = %d/20\n", cours[j], cotes[j]) ;
        somme += cotes[j] ;
    }

    moy = somme / NBR_COURS ;
    pourc = somme * 100 / 60 ;
    printf("La moyenne des cours est de : %d/20 \n", moy) ;
    printf("le pourcentage est de : %.2f %%", pourc) ;

    return 0 ;
}