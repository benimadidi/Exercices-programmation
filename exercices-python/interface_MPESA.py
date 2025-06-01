
print("\nBienvenu sur M-pesa")

# Fonctions d'appel  
def menu() :
    print("-----------------------------")
    print("Que voulez-vous faire ?")
    print("1. Dépôt")
    print("2. Retrait")
    print("3. Verification de la balance")
    print("4. Achat forfaits")
    print("5. Modifier le code pin")
    print("6. Quitter")
    print("-----------------------------")
menu()
def forfait() :
    print ("  Forfaits internet")
    print(" 1. Forfaits journaliers")
    print(" 2. Forfaits hebdomadaires")
    print(" 3. Retour")

#fonction principal
def MPESA() :
    Balance= 100000
    pin = str(1234)
    tentatives = 3
    while True :
        try :
            choix = int(input("Entrez votre choix: "))
            
            #Depôt
            if choix == 1:
                print("1. Retour")
                Montant =int(input("Combien voulez-vous déposer ? "))
                if Montant == 1 :
                    menu()
                    continue
                while tentatives > 0 :
                    code_pin = ["_"]*len(pin)
                    print("votre code pin :", *code_pin)
                    mot_de_passe = str(input("saisissez votre code pin "))
                    if mot_de_passe == pin :
                        if 0 < Montant <= 200000 : 
                            Balance+= Montant
                            print(f"Dépôt reussi! Nouveau solde: {Balance} Fc")
                            break
                        elif Montant < 0 :
                            print("votre montant doit être suoérieur à 0")
                            break
                        else :
                            print("le seuille autorisé Pour un deppot est de 200 000 Fc")
                            break
                    else :
                        tentatives -= 1
                        print("Ancien PIN incorrect. il vous reste",tentatives, "tentative(s)")
                        if tentatives == 0 :
                            return None
            # Retrait
            elif choix == 2 :
                print("1. Retour")
                Montant= int(input("Entrez le montant à retirer : "))
                if Montant == 1 :
                    menu()
                    continue
                while tentatives > 0 :
                    code_pin = ["_"]*len(pin)
                    print("votre code pin :", *code_pin)
                    mot_de_passe = str(input("saisissez votre code pin "))
                    if mot_de_passe == pin :
                        if 0 < Montant <= Balance :
                            Balance -= Montant
                            print(" Retrait éffectué avec succès! Nouveau solde :", Balance,"Fc")
                            break
                        elif 0 > Montant :
                            print("votre montant doit être supérieur à 0 ")
                            break
                        else :
                            print ("Votre compte est insuffisant")
                            break
                    else :
                        tentatives -= 1
                        print(f"Ancien PIN incorrect. il vous reste {tentatives} tentative(s)")
                        if tentatives == 0 :
                            return None

            # Verification de la balcance
            elif choix == 3:
                while tentatives > 0 :
                    code_pin = ["_"]*len(pin)
                    print("votre code pin :", *code_pin)
                    mot_de_passe = str(input("saisissez votre code pin "))
                    if mot_de_passe == pin :
                        print("Votre balance est de:", Balance,"Fc")
                        break
                    else :
                        tentatives -= 1
                        print(f"Ancien PIN incorrect. il vous reste {tentatives} tentative(s)")
                        if tentatives == 0 :
                            return None
            
            # Achats forfait
            elif choix == 4:
                forfait()
                Sorte = int(input("choisissez une option "))

                # forfait journaliers
                if Sorte == 1 :
                    option1 = 2500
                    option2 = 3500
                    option3 = 1500
                    print (f"1. 1Go = {option1} fc")
                    print(f"2. 2Go = {option2} fc")
                    print(f"3. 500 Mo = {option3} fc")
                    option = int(input("choisissez une option "))
                    if option == 1 :
                        Balance-= option1
                        while tentatives > 0 :
                            code_pin = ["_"]*len(pin)
                            print("votre code pin :", *code_pin)
                            mot_de_passe = str(input("saisissez votre code pin "))
                            if mot_de_passe == pin :
                                print("Achat de 1Go avec succès! Nouveau solde:",Balance,"Fc")
                                break
                            else :
                                tentatives -= 1
                                print(f"Ancien PIN incorrect. il vous reste {tentatives} tentative(s)")
                                if tentatives == 0 :
                                    return None
                    elif option == 2 :
                        Balance -= option2
                        while tentatives > 0 :
                            code_pin = ["_"]*len(pin)
                            print("votre code pin :", *code_pin)
                            mot_de_passe = str(input("saisissez votre code pin "))
                            if mot_de_passe == pin :
                                print("Achat de 2Go avec succès! Nouveau solde:",Balance,"Fc")
                                break
                            else :
                                tentatives -= 1
                                print(f"Ancien PIN incorrect. il vous reste {tentatives} tentative(s)") 
                                if tentatives == 0 :
                                    return None
                    elif option == 3  :  
                        Balance -= option3
                        while tentatives > 0 : 
                            code_pin = ["_"]*len(pin)
                            print("votre code pin :", *code_pin)
                            mot_de_passe = str(input("saisissez votre code pin "))
                            if mot_de_passe == pin :
                                print("Achat de 500Mo avec succès! Nouveau solde:",Balance,"Fc")
                                break
                            else :
                                tentatives -= 1
                                print(f"Ancien PIN incorrect. il vous reste {tentatives} tentative(s)")
                                if tentatives == 0 : 
                                    return None
                    else : 
                        print("action non reconnue")
                # forfait hebdomadaires
                elif Sorte == 2 :
                    option1 = 15000
                    option2  = 56000
                    print (f"1. 10 Go = {option1} fc")
                    print (f"2. 30 Go = {option1} fc")
                    option = int(input(" choisissez une option : "))
                    if option == 1:
                        Balance -= option1
                        while tentatives > 0 :
                            code_pin = ["_"]*len(pin)
                            print("votre code pin :", *code_pin)
                            mot_de_passe = str(input("saisissez votre code pin "))
                            if mot_de_passe == pin :
                                print ("Achat de 10Go avec succès! Nouveau solde:",Balance,"Fc")
                                break
                            else :
                                tentatives -= 1
                                print(f"Ancien PIN incorrect. il vous reste {tentatives} tentative(s)")
                                if tentatives == 0 :
                                    return None
                    elif  option == 2: 
                        Balance -= option2
                        while tentatives > 0 :
                            code_pin = ["_"]*len(pin)
                            print("votre code pin :", *code_pin)
                            mot_de_passe = str(input("saisissez votre code pin "))
                            if mot_de_passe == pin :
                                print (" Achat de 30Go avec succès! Nouveau solde:",Balance,"Fc")
                            else :
                                tentatives -= 1
                                print(f"Ancien PIN incorrect. il vous reste {tentatives} tentative(s)")
                                if tentatives == 0 :
                                    return None
                    else : 
                        print ("action non reconnue")
                # option de retour
                elif Sorte == 3 :
                    menu()
                    continue
                else : 
                    print ("action non reconnue")

            # modif du code pin 
            elif choix == 5 :
                option = input("choisissez une option : ")
                while True :
                    while tentatives > 0 :
                        code_pin = ["_"]*len(pin)
                        print("votre code pin :", *code_pin)  
                        ancien_pin = str(input("saisissez l'ancien pin : "))
                        if ancien_pin == pin :
                            pin = str(input("saisissez le nouveau PIN (4 caractère) : "))
                            if pin != ancien_pin :
                                if pin.isdigit() and len(pin) == 4 :
                                    confirmation = str(input("confirmer le code pin : "))
                                    if confirmation == pin :
                                        print(f"Code pin enregistré avec succes !\nVotre nouveau code pin est {pin} :)")
                                        break
                                    else :
                                        print("veuillez reesayer")
                                        continue
                                else : 
                                    print("votre code pin ne peut contenir que des nombres et/ou doit avoir 4 caractère")
                                    continue
                            else :
                                print("votre code pin doit être different de l'ancien !")
                                continue
                        else : 
                            tentatives -= 1
                            print(f"Ancien PIN incorrect.il vous reste {tentatives} tentative(s) ")
                            if tentatives == 0 : 
                                return None
                    break

            # Quitter ou erreur
            elif choix == 6 :
                print ("Merci d'avoir utilisé M-pesa :)")
                break
            else:
                print("Choix invalide, veuillez réessayer")
                menu()
                continue

            #
            continuer = input("voulez vous continuer ? (oui/non) ").lower()
            if continuer == "oui" :
                Balance = Balance
                pin = pin
                tentatives = 3
                menu()
                continue
            else : 
                break
            
            #
        except ValueError :
            print("ERREUR : veuillez entrer un nombre !")
            menu()
            continue
MPESA()