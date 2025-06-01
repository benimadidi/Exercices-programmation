
#include <stdio.h>
#include <math.h> 
#include <string.h>
#include <stdlib.h>
#include "conversion.h"

/*-------------------------------------------------------------------*/
void ConversionManager(){
    int UserInput ;
    int UserChoice ;
    int SubChoice ;
    int DecimalValue ; 
    int FahrenheitValue ;
    int CelsiusValue ;
    int KelvinValue ;
    int DegreValue ;
    int PPCMValue ;
    int PGCDValue ;
    int a ;
    int b ;
    float UsdValue ;
    float CdfValue ;
    float InputConversion ;
    char BinaryTab[BINARY_MAX_LENGTH] ;

    char Password[PASSWORD_LENGTH] ;
    int tentative = 4 ;

    printf("Bienvenue :) \n") ;

    while(tentative >= 0){

        printf("Saisissez votre mot de passe : ") ;
        scanf("%s", Password) ;
    
        if (strcmp(Password, PASSWORD) == 0) {
            tentative = 0 ;
            while(1){

                Menu() ;
                printf("> ") ;
                scanf("%d", &UserChoice) ;

                /*----------------------------------------------------------------------------*/
                if(UserChoice == 1){
                    Sub3Menu() ;
                    printf("Faites votre choix (1 ou 2) : ") ;
                    scanf("%d", &SubChoice) ;

                    if(SubChoice == 1){
                        printf("Binaire --> Decimal \n") ;
                        printf("Entrer une valeur en binaire : ") ;
                        scanf("%d", &UserInput) ;

                        DecimalValue = BinaryToDecimal(UserInput) ;
                        printf("%d = %d en Binaire \n", UserInput, DecimalValue) ;

                        FILE *fichier = fopen(FILE_NAME, OPENING_MODE) ;
                        if(fichier == NULL){
                            printf("Erreur lors de l'ouverture du fichier !") ;
                            exit(1) ;
                        }
                        fprintf(fichier, 
                                "Conversion binaire -> Decimal \nDerniere operation : %d = %d en Binaire \n",
                                UserInput, DecimalValue
                            ) ;
                        fclose(fichier) ;

                        return ;
                    }
                    else if (SubChoice == 2){
                        printf("Decimal --> Binaire \n") ;
                        printf("Entrer une valeur en Decimal : ") ;
                        scanf("%d", &UserInput) ;

                        DecimalToBinary(UserInput, BinaryTab) ;

                        printf("%d = %s en Binaire \n", UserInput,  BinaryTab) ;

                        FILE *fichier = fopen(FILE_NAME, OPENING_MODE) ;
                        if(fichier == NULL){
                            printf("Erreur lors de l'ouverture du fichier !") ;
                            exit(1) ;
                        }
                        fprintf(fichier, 
                                "Conversion Decimal -> Binaire \nDerniere operation : %d = %s en Binaire \n",
                                UserInput,  BinaryTab 

                            ) ;
                        fclose(fichier) ;

                        return ;
                    }
                    else
                        printf("Mauvais Choix !") ;
                }

                /*----------------------------------------------------------------------------*/
                else if (UserChoice == 2){
                    printf("Conversion Hexadecimlal -> Decimal \n") ;
                    printf("---------------------------------- \n") ;

                    printf("Entrer une valeur en decimal : ") ;
                    scanf("%d", &UserInput) ;

                    DecimalToHexaDecimal(UserInput) ;

                    FILE *fichier = fopen(FILE_NAME, OPENING_MODE) ;
                    if(fichier == NULL){
                        printf("Erreur lors de l'ouverture du fichier !") ;
                        exit(1) ;
                    }
                    fprintf(fichier,
                            "Conversion Decimal -> Hexadecimal \nDerniere operation : %d = %X en Hexadecimal ",
                             UserInput, UserInput
                            ) ;
                    fclose(fichier) ;

                    return ;
                }
                /*----------------------------------------------------------------------------*/
                else if(UserChoice == 3){
                    Sub4Menu() ;
                    printf("Faites votre choix (1 ou 2) : ") ;
                    scanf("%d", &SubChoice) ;

                    if (SubChoice == 1){
                        printf("1. PGCD \n") ;
                        printf("Saisir les deux nombre (ex : 2 4) : ") ;
                        scanf("%d %d", &a, &b) ;

                        PGCDValue = PGCD(a, b) ;
                        printf("le PGCD de (%d,%d) = %d", a, b, PGCDValue) ;

                        FILE *fichier = fopen(FILE_NAME, OPENING_MODE) ;
                        if(fichier == NULL){
                            printf("Erreur lors de l'ouverture du fichier !") ;
                            exit(1) ;
                        }
                        fprintf(fichier, 
                                "Calcul du PGCD\nDerniere operation :le PGCD de (%d,%d) = %d",
                                a, b, PGCDValue
                            ) ;
                        fclose(fichier) ;

                        return ;
                    }
                    else if (SubChoice == 2){
                        printf("2. PPCM \n") ;
                        printf("Saisir les deux nombre (ex : 2 4) : ") ;
                        scanf("%d %d", &a, &b) ;

                        PPCMValue = PPCM(a, b) ;
                        printf("le PPCM de (%d, %d) = %d", a, b, PPCMValue) ;

                        FILE *fichier = fopen(FILE_NAME, OPENING_MODE) ;
                        if(fichier == NULL){
                            printf("Erreur lors de l'ouverture du fichier !") ;
                            exit(1) ;
                        }
                        fprintf(fichier, 
                                "Calcul du PPCM\nDerniere operation :le PPCM de (%d,%d) = %d",
                                a, b, PPCMValue
                            ) ;
                        fclose(fichier) ;

                        return ;
                    }
                    else   
                        printf("Mauvais choix ! \n") ;
                }
                /*----------------------------------------------------------------------------*/
                else if(UserChoice == 4){                  

                    SubMenu() ;
                    printf("Faites votre choix (1 ou 2) : ") ;
                    scanf("%d", &SubChoice) ;

                    if(SubChoice == 1){
                        printf("1. USD -> CDF \n") ;
                        printf("Entrer le montant en USD  : ") ;
                        scanf("%f", &InputConversion) ;

                        UsdValue = ConversionUSD_CDF(InputConversion) ;
                        printf("%.2f USD = %.2f CDF \n", InputConversion, UsdValue) ;

                        FILE *fichier = fopen(FILE_NAME, OPENING_MODE) ;
                        if(fichier == NULL){
                            printf("Erreur lors de l'ouverture du fichier !") ;
                            exit(1) ;
                        }
                        fprintf(fichier, 
                                "Conversion Monnaitaire\nDerniere operation : %.2f USD = %.2f CDF ",
                                InputConversion, UsdValue
                            ) ;
                        fclose(fichier) ;

                        return ;
                    }
                    else if(SubChoice == 2){
                        printf("2. CDF -> USD \n") ;
                        printf("Entrer le montant en CDF  : ") ;
                        scanf("%f", &InputConversion) ;

                        CdfValue = ConversionCDF_USD(InputConversion) ;
                        printf("%.2f CDF = %.2f USD \n", InputConversion, CdfValue) ;
                        
                        FILE *fichier = fopen(FILE_NAME, OPENING_MODE) ;
                        if(fichier == NULL){
                            printf("Erreur lors de l'ouverture du fichier !") ;
                            exit(1) ;
                        }
                        fprintf(fichier,
                                "Conversion Monnaitaire\nDerniere operation : %.2f CDF = %.2f USD \n",
                                InputConversion, CdfValue
                            ) ;
                        fclose(fichier) ;

                        return ;
                    }
                    else 
                        printf("Choix incorrect ! \n") ;
                    

                }
                /*----------------------------------------------------------------------------*/
                else if (UserChoice == 5){
                    
                    Sub2Menu() ;
                    printf("Faites votre choix (1 ou 2) : ") ;
                    scanf("%d", &SubChoice) ;

                    if(SubChoice == 1){
                        printf("1. Celsius --> Fahrenheit \n ") ;
                        printf("Entrer la temperature en degre Celsius : ") ;
                        scanf("%d", &DegreValue) ;

                        FahrenheitValue = CelsiusToFahrenheit(DegreValue) ;
                        printf("%d degre Celsius = %d degre Fahrenheit \n", DegreValue, FahrenheitValue) ;

                        FILE *fichier = fopen(FILE_NAME, OPENING_MODE) ;
                        if(fichier == NULL){
                            printf("Erreur lors de l'ouverture du fichier \n") ;
                            exit(1) ;
                        }

                        fprintf(fichier, 
                                "Conversion Celsius --> Fahrenheit\nDerniere operation : %d degre Celsius = %d degre Fahrenheit ",
                                DegreValue, FahrenheitValue
                            ) ;
                        fclose(fichier) ;

                        return ;
                    }

                    else if (SubChoice == 2){
                        printf("1. Fahrenheit --> Celsius \n ") ;
                        printf("Entrer la temperature en degre Fahrenheit : ") ;
                        scanf("%d", &DegreValue) ;

                        CelsiusValue = FahrenheitToCelsius(DegreValue) ;
                        printf("%d degre Fahrenheit = %d degre Celsius \n", DegreValue, CelsiusValue) ;

                        FILE *fichier = fopen(FILE_NAME, OPENING_MODE) ;
                        if(fichier == NULL){
                            printf("Erreur lors de l'ouverture du fichier \n") ;
                            exit(1) ;
                        }

                        fprintf(fichier, 
                                "Conversion Fahrenheit --> Celsius\nDerniere operation : %d degre Fahrenheit = %d degre Celsius ",
                                DegreValue, CelsiusValue
                            ) ;
                        fclose(fichier) ;

                        return ;
                    }
                    else if(SubChoice == 3){
                        printf("3. Celsius --> Kelvin \n ") ;
                        printf("Entrer la temperature en degre Celsius : ") ;
                        scanf("%d", &DegreValue) ;

                        KelvinValue = CelsiusToKelvin(DegreValue);
                        printf("%d degre Celsius = %d degre Kelvin \n", DegreValue, KelvinValue) ;

                        FILE *fichier = fopen(FILE_NAME, OPENING_MODE) ;
                        if(fichier == NULL){
                            printf("Erreur lors de l'ouverture du fichier \n") ;
                            exit(1) ;
                        }

                        fprintf(fichier, 
                                "Conversion Celsius --> Kelvin\nDerniere operation : %d degre Celsius = %d degre Kelvin ",
                                DegreValue, KelvinValue
                            ) ;
                        fclose(fichier) ;

                        return ;
                    }
                    else if(SubChoice == 4){
                        printf("4. Kelvin --> Celsius \n ") ;
                        printf("Entrer la temperature en degre Kelvin : ") ;
                        scanf("%d", &DegreValue) ;

                        CelsiusValue = KelvinToCelsius(DegreValue);
                        printf("%d degre Kelvin = %d degre Celsius \n", DegreValue, CelsiusValue) ;

                        FILE *fichier = fopen(FILE_NAME, OPENING_MODE) ;
                        if(fichier == NULL){
                            printf("Erreur lors de l'ouverture du fichier \n") ;
                            exit(1) ;
                        }

                        fprintf(fichier, 
                                "Conversion Kelvin --> Celsius\nDerniere operation : %d degre Kelvin = %d degre Celsius ",
                                DegreValue, CelsiusValue
                            ) ;
                        fclose(fichier) ;

                        return ;
                    }
                    else  
                        printf("Choix incorrect ! \n") ;

                }
                /*----------------------------------------------------------------------------*/
                else if (UserChoice == 6){
                    ShowLastOperation() ;
                    return ;
                }

                /*----------------------------------------------------------------------------*/
                else if(UserChoice == 0){
                    printf("Merci d'avoir utilise nos services\nAu Revoir... \n") ;
                    return ;
                }

                /*----------------------------------------------------------------------------*/
                else 
                    printf("Choix incorrect ! \n") ;

                /*----------------------------------------------------------------------------*/
            }
        }
        else {
            printf("Mot de Passe incorrect ! \nIL vous reste %d tentative(s) \n", tentative) ;
            tentative-- ;
        }
    }

}
/*-------------------------------------------------------------------*/
// Foncrion pour le Menu Principal

void Menu(){

    printf("\n--------Menu Principal-------- \n") ;
    printf("Faites un choix : \n") ;
    printf("1. Decodage des informations \n") ;
    printf("2. Conversion Hexadecimal \n") ;
    printf("3. Calcul du PPCM et du PGCD  \n") ;
    printf("4. Conversion Monnetaire USD -> CDF ET CDF -> USD \n") ;
    printf("5. Conversion des degres \n") ;
    printf("6. Voir la derniere operation \n") ;
    printf("0. Quitter \n") ;
 }

 /*-------------------------------------------------------------------*/
 // Fonction du sous menu pour la conversion monnetaire

 void SubMenu(){
    printf("---Conversion Monnetaire--- \n") ;
    printf("    1. USD --> CDF \n") ;
    printf("    2. CDF --> USD \n") ;
}
/*-------------------------------------------------------------------*/
//Fonction du sous menu pour la conversion des degres

void Sub2Menu(){
    printf("---Conversion de Temperature--- \n") ;
    printf("1. Degre Celsius --> Degree Fahrenheit \n") ;
    printf("2. Degre Fahrenheit --> Degree Celsius \n") ; 
    printf("3. Degre Celsius --> Degree Kelvin \n") ;
    printf("4. Degre Kelvin --> Degree Celsius \n") ;
    
}

 /*-------------------------------------------------------------------*/
 // Fonction du sous menu pour le decodage des informations

 void Sub3Menu(){
    printf("---Decodage des informations--- \n") ;
    printf("1. Binaire --> Decimal \n") ;
    printf("2. Decimal --> Binaire \n") ;
}
/*----------------------------------------------------------------------------*/
// Fonction pour le sous menu de pgcd et du ppcm

void Sub4Menu(){
    printf("---Calcul du PGCD et du PPCDM--- \n") ;
    printf("1. PGCD \n2. PPCM \n") ;
}

/*-------------------------------------------------------------------*/
// Fonction pour la conversion Binaire -> Decimal

int BinaryToDecimal(int BinaryValue) {

    int RestofDivision ;
    int sum = 0 ;
    int i = 0 ;

    while( BinaryValue > 0){
        RestofDivision = BinaryValue % 10 ;
        sum = sum + RestofDivision * pow(2, i) ;
        BinaryValue /= 10 ;
        i++ ;
    }

    
    return sum ;
}
/*-------------------------------------------------------------------*/
// Fonction pour la conversion Decimal -> Binaire

int DecimalToBinary(int DecimalValue, char *BinaryTab){
    int i = 0 ;
    int start ;
    int end ;
    int temp ;

    if(DecimalValue == 0){
        BinaryTab[i++] = '0' ;
    }

    else {
        while(DecimalValue > 0){
            BinaryTab[i] = DecimalValue % 2  + '0';
            i++ ;
            DecimalValue /= 2 ; 
        }

        start = 0 ;
        end = i - 1 ;

        while(start < end){
            temp = BinaryTab[start] ;
            BinaryTab[start] = BinaryTab[end] ;
            BinaryTab[end] = temp ;
            start++ ;
            end-- ;
        }
    }
}

/*-------------------------------------------------------------------*/
// Fonction pour convertir de Decimal -> Hexadecimal

void DecimalToHexaDecimal(int DecimalValue){
    printf("%d = %X en Hexadecimal \n", DecimalValue, DecimalValue) ;
}

/*-------------------------------------------------------------------*/
// Fonction pour la conversion USD -> CDF

float ConversionUSD_CDF(float UsdCurrency) {
    return UsdCurrency * TAUX ; 
}

/*-------------------------------------------------------------------*/
// Fonction pour la conversion CDF -> USD

float ConversionCDF_USD(float CdfCurrency) {
    return CdfCurrency / TAUX ; 
}

/*-------------------------------------------------------------------*/
// Fonction pour la conversion Celsius --> Fahrenheit

int CelsiusToFahrenheit(int CelsiusValue){
    int FahrenheitValue = (CelsiusValue * 9/5) + 32 ; 

    return FahrenheitValue ;
}

/*-------------------------------------------------------------------*/
// Fonction pour la conversion Fahrenheit --> Celsius

int FahrenheitToCelsius(int FahrenheitValue){
    int CelsiusValue = (FahrenheitValue - 32) * 5/9 ;

    return CelsiusValue ;
}

/*-------------------------------------------------------------------*/
// Fonction pour la conversion Celsius --> Kelvin

int CelsiusToKelvin(int CelsiusValue){
    int KelvinValue = CelsiusValue + 273.15 ;

    return KelvinValue ;
}

/*-------------------------------------------------------------------*/
// Fonction pour la conversion Celsius --> Kelvin

int KelvinToCelsius(int KelvinValue){
    int CelsiusValue = KelvinValue + 273.15 ;

    return CelsiusValue ;
}
/*-------------------------------------------------------------------*/
//Fonction pour calculer le PGCD

int PGCD(int a, int b){
    int temp ;
    while(b != 0){
        temp = b ;
        b = a % b ;
        a = temp ;
    }
    return a ;
}

/*-------------------------------------------------------------------*/
//Fonction pour calculer le PPCM

int PPCM(int a, int b){

    int pgcd = PGCD(a, b) ;
    int ppcm ;

    ppcm = a * b / pgcd ;

    return ppcm ;
}

/*-------------------------------------------------------------------*/
// Fonction pour voir la derniere operation 

void ShowLastOperation(){

    FILE *fichier = fopen(FILE_NAME, "r") ;
    if(fichier == NULL){
        printf("Erreur lors de l'ouverture du fichier ! ") ;
        exit(1) ;
    }

    fseek(fichier, 0 , SEEK_END) ;
    if(ftell(fichier) == 0 ){
        printf("\nAucune donnee enregistre \n") ;
        fclose(fichier) ;
    }

    char line[MAX_LENGTH] ;
    rewind(fichier) ;
    while(fgets(line, MAX_LENGTH, fichier)){ 
        printf("%s \n", line) ;
    }

    fclose(fichier) ;
}
