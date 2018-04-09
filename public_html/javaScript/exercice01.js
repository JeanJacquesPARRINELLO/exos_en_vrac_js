

function exercice01(){
    //  Initialisez une variable message à la valeur « ceci est un texte assez long »
//    var message = "ceci est un texte assez long";
    var message = document.getElementById("messageInput").value;
    //  Initialisez une variable taille avec la longueur de « message »
    var taille = getStringLength(message);
    
    //  Pour chaque itération, afficher le caractère courant
    //  AFFICHAGE DANS LE DOM
    afficheP("//    POUR CHAQUE ITÉRATION, AFFICHER LE CARACTÈRE COURANT", "exo01", "comment");
    for(var i = 0 ; i < taille; i++){
        
        //  AFFICHAGE DANS LA CONSOLE
        console.log(i + " => " + message[i]);
        
        //  AFFICHAGE DANS LE DOM
        afficheP(message[i], "exo01", "reponse");
    }
i}