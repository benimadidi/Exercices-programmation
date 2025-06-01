
#ifndef GAME_H
#define GAME_H

//---------------------------------------------------------------------------------------------
//  Macros pour l'espace de jeu (modifiable)
    #define MAX_ROWS 5
    #define MAX_COLS 12 
//---------------------------------------------------------------------------------------------

    #define MAX_I MAX_ROWS * 2
    #define MAX_j MAX_COLS * 2
//---------------------------------------------------------------------------------------------
// Prototypes des fonctions
    void gameManager(void) ;
    void initArea(char gameArea[][MAX_j], int *playerI, int *playerJ) ;
    void showArea(char gameArea[][MAX_j]) ;
    void showMenu(char *moveCommand) ;
    void updateArea(char gameArea[][MAX_j], char *moveCommand, int *playerI, int *playerJ) ;
    void moveUp(char gameArea[][MAX_j], int *playerI, int *playerJ) ;
    void moveDown(char gameArea[][MAX_j], int *playerI, int *playerJ) ;
    void moveRight(char gameArea[][MAX_j], int *playerI, int *playerJ) ;
    void moveLeft(char gameArea[][MAX_j], int *playerI, int *playerJ) ;
    void flushBuffer(void) ;
//---------------------------------------------------------------------------------------------

#endif