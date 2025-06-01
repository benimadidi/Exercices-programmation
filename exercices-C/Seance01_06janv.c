#include<stdio.h>

int main(void) {
    float prix ; 
    /*do
    {
        printf("Taper le prix ") ;
        scanf("%f", &prix) ;
        if(prix < 0 ){
            printf("votre prix doit etre superieur a 0 \n") ;
        }
    } while (prix < 0 );
    
    printf("votre prix est %.2f FC ", prix) ;*/

    int i, j ;
    for(i = 1; i<= 5; i++){
        for(j = 1 ; j<= i; j++){
            printf("%d ", j) ;
        }
        printf("\n") ;
    }
    
    return 0 ;

}