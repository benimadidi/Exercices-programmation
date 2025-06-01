"""
EXERCICE PYTHON #11
[Revision : fichiers, tkinter]

> Coder un petit editeur dans une interface graphique selon ces criteres : 
    - prend en charge des fichiers texte (extensions "txt")
    - fournit des commandes standard (nouveau, ouvrir, enregistrer, quitter)
    
> Indications :
    - travaillez en UTF-8
    - l'editeur utilisera un champ de saisie avec le widget -> tkinter.Text
    - l'ouverture/enregistrement de fichier utilisera -> tkinter.filedialog
    
"""

from tkinter import filedialog
import tkinter

#--------------------------------------------------------------------------------------
def new_file() :
    text.delete("1.0", tkinter.END)

def open_file() :
    filepath = filedialog.askopenfilename(filetypes= [("Tous les fichiers", "*.*"),
                                                      ("Fichier texte", ".*txt"),
                                                      ("Fichier python", "*.py")])
    
    if filepath :
        with open(filepath, "r", encoding="utf-8") as fic :
            text.delete("1.0", tkinter.END)
            text.insert(tkinter.END, fic.read())
            
def save_file() :
    filepath = filedialog.asksaveasfilename(defaultextension= ".text", 
                                            filetypes= [("Fichier texte", "*.txt"), ("Fichier python", "*.py")])
    
    if filepath :
        with open(filepath, "w", encoding="utf-8") as fic :
            fic.write(text.get("1.0", tkinter.END))
#--------------------------------------------------------------------------------------
app = tkinter.Tk()
app.title("Blocs notes")

app.geometry("700x400+30+30")
screen_X = int(app.winfo_screenwidth())
screen_Y = int(app.winfo_screenheight())
window_X = 600
window_Y = 480
posX = (screen_X // 2) - (window_X // 2)
posY = (screen_Y // 2) - (window_Y // 2)
geo  = f"{window_X}x{window_Y}+{posX}+{posY}"
app.geometry(geo)

#--------------------------------------------------------------------------------------
bar_menu = tkinter.Menu(app)
file_menu = tkinter.Menu(bar_menu, tearoff=0)
file_menu.add_command(label="Nouveau", command= new_file)
file_menu.add_command(label="Ouvrir", command= open_file)
file_menu.add_separator()
file_menu.add_command(label="Enregistrer", command= save_file)
file_menu.add_separator()
file_menu.add_command(label="Quitter", command= app.quit)
bar_menu.add_cascade(label="Fichier", menu=file_menu)

text = tkinter.Text(app)
text.pack(fill= tkinter.BOTH, expand= True)
#--------------------------------------------------------------------------------------
app.config(menu=bar_menu)
app.mainloop()