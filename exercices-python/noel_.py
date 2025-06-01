import turtle
from turtle import *
import random 

n = 100.0
screen = turtle.Screen()
screen.title("un joyeux noel pour tous ! ")
screen.setup(660,700)

speed("fastest")
screensize(bg = "black")
left(90)
forward(3*n)
color("orange", "yellow")
begin_fill()
left(126)

for i in range(5) :
    forward(n/5)
    right(144)
    forward(n/5)
    left(72)
end_fill()
right(126)

def drawlight() :
    if random.randint(0,30) == 0 :
        color('tomato')
        circle(6)
    elif random.randint(0,30) == 1 :
        color('orange')
        circle(3)
    else :
        color('dark green')
        
color("dark green")
backward(n*4.8)

def arbre(d, s) :
    if d <= 0 : return
    forward(s)
    arbre(d-1, s*.8)
    right(120)
    arbre(d-3, s*.5)
    drawlight()
    right(120)
    arbre(d-3, s*.5)
    right(120)
    backward(s)
    
arbre(15, n)
backward(n/2)

for i in range(200) :
    a = 200 - 400 * random.random()
    b = 10 - 20 * random.random()
    up()
    forward(b)
    left(90)
    forward(a)
    down()
    if random.randint(0,1) == 0 :
        color('tomato')
    else :
        color('wheat')
    circle(2)
    up()
    backward(a)
    right(90)
    backward(b)
    
turtle.color("dark red", "red")
turtle.write("joyeux tout le monde :)", align="center", font=("Comic Sans MS", 40, "bold"))

def dessin_neige() :
    turtle.pensize(2)
    for i in range(200) :
        turtle.pencolor("white")
        turtle.pu()
        turtle.setx(random.randint(-350, 350))
        turtle.sety(random.randint(-100, 350))
        turtle.pd()
        dens = 6 
        taille_neige = random.randint(1,10)
        for j in range(dens) :
            turtle.fd(int(taille_neige))
            turtle.backward(int(taille_neige))
            turtle.right(int(360 / dens))
            
dessin_neige()
turtle.done()     