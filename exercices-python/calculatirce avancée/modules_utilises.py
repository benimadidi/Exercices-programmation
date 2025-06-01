import math
 
# Calcul pour les opérations fondamentales
def addition(a, b) :
    return a + b 
def soustraction(a, b) :
    return a - b
def multiplication(a, b) :
    return a - b
def division(a, b) :
    try :
        return a / b
    except ZeroDivisionError :
        return "\nDivision par zero impossible !"

# Calcul pour les opérations particulières

def ppcm(a, b) :
    return abs(a * b) // math.gcd(a, b)
def pgcd (a, b) :
    return math.gcd(a, b)
def division_entiere(a, b) :
    return a // b
def modulo(a, b) :
    return a % b

#Calcul pour l'exponentiation 

def exponentiation(a, b) :
    return a ** b