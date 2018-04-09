

function exercice02(){
    //  Initialisez une variable message à la valeur « ceci est un texte assez long »
//    var message = "ceci est un texte assez long";
    var message = document.getElementById("messageInput").value;
    
    /*  et bouclez afin de :
        - Compter le nombre d’espaces
        - Compter le nombre de « o »
        - Donner la position des « o » dans la chaine*/
    var nbSpaces = 0;
    var nbO = 0;
    var posO = "Position des 'o' = ";
    
    for(var i=0 ; i <= getStringLength(message) ; i++){
        if(message[i] == " "){
            nbSpaces++;
        }
        if(message[i] == "o"){
            nbO++;
            posO += (i+1) + ", ";
        }
    }
    
    //  AFFICHAGE EN CONSOLE
    console.log(message);
    console.log("Nombre d'espaces = " + nbSpaces);
    console.log("Nombre de 'o' = " + nbO);
    console.log(posO);
    
    //  AFFICHAGE DANS LE DOM
    afficheP("//    COMPTER LE NOMBRE D'ESPACES", "exo02", "comment");
    afficheP("Nombre d'espaces = " + nbSpaces, "exo02", "reponse");
    
    afficheP("//    COMPTER LE NOMBRE DE 'O'", "exo02", "comment");
    afficheP("Nombre de 'o' = " + nbO, "exo02", "reponse");
    
    afficheP("//    DONNER LA POSITION DES 'O' DANS LA CHAÎNE", "exo02", "comment");
    afficheP(posO, "exo02", "reponse");
}