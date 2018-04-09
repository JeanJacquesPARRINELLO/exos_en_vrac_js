/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function exercice04(){
    //  Initialisez une variable message à la valeur « ceci est un texte assez long »
//    var message = "ceci est un texte assez long";
    var message = document.getElementById("messageInput").value;
//    if(message.length)
    
    var maDiv = document.getElementById("exo04");
    //  Comptez le nombre de mots
    //  countWordsInString COMPTE LE NOMBRE DE MOTS ET RETOURNE UN ENTIER
    //  AFFICHAGE EN CONSOLE
    console.log("Le nombre de mots de la chaîne est : " + countWordsInString(message));
    //  AFFICHAGE DANS LE DOM
    afficheP("//    COMPTER LE NOMBRE DE MOTS", "exo04", "comment");
    afficheP("Le nombre de mot de la chaîne est : " + countWordsInString(message), "exo04", "reponse");
    
    //  Donnez la position de chaque mot
    //  RETOURNE UN TABLEAU CLEF=>VALEUR : MOT=>POSITION
    var positionDesMots = posWordsInString(message);
    console.log(positionDesMots);
    afficheP("//    DONNER LA POSITION DE CHAQUE MOT", "exo04", "comment");
    for(var value in positionDesMots){
    //  AFFICHAGE EN CONSOLE
        console.log('"' + value + '" est à la position ' + positionDesMots[value]);
    //  AFFICHAGE DANS LE DOM
        afficheP('"' + value + '" est à la position ' + positionDesMots[value], "exo04", "reponse");
    }
    
    //  Donnez la longueur de chaque mot
    //  RETOURNE UN TABLEAU CLEF=>VALEUR : MOT=>LONGUEUR
    var longueurDesMots = wordLengthInString(message);
    console.log(longueurDesMots);
    afficheP("//    DONNER LA LONGUEUR DE CHAQUE MOT", "exo04", "comment");
    for(var value in longueurDesMots){
    //  AFFICHAGE EN CONSOLE
        console.log('"' + value + '" comporte ' + longueurDesMots[value] + ' caractères');
    //  AFFICHAGE DANS LE DOM
        afficheP('"' + value + '" comporte ' + longueurDesMots[value] + ' caractères', "exo04", "reponse");
    }
}