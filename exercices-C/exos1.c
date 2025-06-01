/*
    EXERCIES C #1
    [Révision : affichage/saisie, variables]
    > Ecrire un programme qui demande un entier à l'utilisateur
      et affiche la valeur de la saisie  en octal et héxadecimal

    > Indications : 
        - Formater en octal -> %o
        - Formater en hexa  -> %x ou %X
*/

#include<stdio.h>

int main(void){

  int entier = 0 ;

  printf("\nentrer un entier : ") ;
  scanf("%d", &entier) ;

  printf("votre entier est : %d \n\n", entier) ;
  printf("la valeur en octal de votre entier est : %o \n", entier) ;
  printf("la valeur en hexa de votre entier est : %X \n", entier) ;

  return 0 ;
}
