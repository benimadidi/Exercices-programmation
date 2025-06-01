/* 
EXERCICE C #3
[Revison : boucles] 
> Ecrire un programme qui calcul la somme des entiers d'un 
    nombre à un autre (maximum : entre 1 et 1000)

> Indications : 
    - Prévoir le cas où "min" serait plus grand que "max" et quitter
        le programme si cela arrive 
    - Prévoir le cas où "min" serait plus petit que 1 et "max" plus grand
        que 1000 
*/

#include<stdio.h>

int main(void){

    int min ;
    int max ;
    int i ;
    int sum = 0 ;

    printf("saisissez le min : ") ;
    scanf("%d", &min) ;
    printf("saisissez le max : ") ;
    scanf("%d", &max) ;

    if(min >= 1 && max<=1000){
        for(i = min ; i <= max ; i++){
            sum += i ;
        }
        printf("la somme des entiers compris entre %d et %d est %d\n", min, max, sum ) ;
    }
    else if(min > max){
        printf("le min doit etre < au max \n") ;
    }
    else if (min < 1 && max > 1000){
        printf("le min doit etre >= a 1 \nEt le max doit etre < 1000 \n") ;
    }
    else{
        printf("Non reconnue... \n") ;
    }

    return 0 ;
}