/* 
Énoncé :
	Écrire un programme en C qui vérifie si une chaîne de caractères saisie par l'utilisateur est un palindrome.
	Un palindrome est un mot ou une phrase qui se lit de la même façon de gauche à droite et de droite à gauche (ex : "radar", "elle", "kayak").
*/

#include <stdio.h>
#include <string.h>

#define MAX_LENGHT 255
/*---------------------------------------------------------------------------------------*/
char *mots() ;
void inverser_chaine(char *chaine) ;

/*---------------------------------------------------------------------------------------*/
int main(void){

	char *mot = mots() ;
	char mot_inverse[MAX_LENGHT] ;

	strcpy(mot_inverse, mot) ;

	inverser_chaine(mot_inverse) ;

	if(strcmp(mot, mot_inverse) == 0)
		printf("'%s' est un palindrome \n", mot ) ;
	else
		printf("'%s' n'est pas un palindrome \n", mot ) ;

	return 0 ;
}

/*---------------------------------------------------------------------------------------*/
char *mots() {

	static char user_input[MAX_LENGHT] ;

	printf("Entrer un mot pour voir si c'est un palindrome : ") ;
	scanf("%s", user_input) ;
	
	return user_input ;
}

void inverser_chaine(char *chaine) {
	int longueur = strlen(chaine) ;
	int temp ; 
	int i,j ;

	for (i=0, j = longueur - 1 ; i < j ; i++, j-- ){
		temp = chaine[i] ;
		chaine[i] = chaine[j] ;
		chaine[j] = temp ;
	}
}