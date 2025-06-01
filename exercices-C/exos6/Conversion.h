  
#ifndef CONVERSION_H
#define CONVERSION_H 

/*---------------------------------------------------------*/
#define TAUX 2850.0
#define PASSWORD "1234"
#define PASSWORD_LENGTH 4 
#define MAX_LENGTH 255
#define FILE_NAME "last_save.txt"
#define OPENING_MODE "w+"
#define BINARY_MAX_LENGTH 32

/*---------------------------------------------------------*/
void ConversionManager() ; 
void Menu() ;
void SubMenu() ;
void Sub2Menu() ;
void Sub3Menu() ;
void Sub4Menu() ;
int BinaryToDecimal(int BinaryValue) ;
int DecimalToBinary(int DecimalValue, char *BinaryTab) ;
void DecimalToHexaDecimal(int DecimalValue) ;
float ConversionUSD_CDF(float UsdCurrency) ;
float ConversionCDF_USD(float CdfCurrency) ;
void ShowLastOperation() ;
int CelsiusToFahrenheit(int CelsiusValue) ;
int FahrenheitToCelsius(int FahrenheitValue) ;
int CelsiusToKelvin(int KelvinVlaue) ;
int KelvinToCelsius(int KelvinValue) ;
int PGCD(int a, int b) ;
int PPCM(int a, int b) ;

/*---------------------------------------------------------*/
#endif
