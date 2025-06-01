/* 
EXERCICE #7
[Révision : chaines des caracteres]

>1 Ecrire une fonction qui compte le nombre de fois de caracteres d'une chaine (comme strlen de <string.h>)
>2 Ecrire une fonction qui compte le nombre d'occurences dans un caracteres (ex : 'a') dans une chaine

Indications :
    - pour la partie n° 2, vous utiliserez la fonction ecrite en partie n°1.
    - pensez à mettre vos variables en lecture seule constantes (ex : const int myData = 10)

-----------------------------------------------------------------------------------------------------------------------------------*/
#include <stdio.h>
#include <string.h>

/*-----------------------------------------------------------------------------------------------------------------------------------*/
int str_length( const char *chaine) ;
int count_ocurences_of(const char *chaine, const char caractere) ;

/*-----------------------------------------------------------------------------------------------------------------------------------*/

int main(void){

    char chaine[] = "Bonjour tout le monde, je suis en train de faire des exercices pour reviser les chaines de caracteres" ;

    // Taille chaine
    int longueur_chaine = str_length(chaine) ;
    printf("La longueur de la chaine est de %d caracteres \n\n", longueur_chaine) ;

    // Nombre d'occurence
    char caractere = 'e' ;
    int comptage_caractere = count_ocurences_of(chaine, caractere) ;
    printf("La lettre '%c' a ete utilise %d fois\n", caractere , comptage_caractere) ;

    return 0 ;
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/
int str_length( const char *chaine){
    return strlen(chaine) ;    
}

int count_ocurences_of(const char *chaine, const char caractere){

    int compteur = 0 ;

    for(int i = 0 ; i < str_length(chaine) ; i++ ){
        if (chaine[i] == caractere)
            compteur++ ;
    }
    return compteur ;
}