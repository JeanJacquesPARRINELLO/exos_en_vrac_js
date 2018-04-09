/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function exercice03(){
    //  Initialisez une variable message à la valeur « ceci est un texte assez long »
    var message = document.getElementById("messageInput").value;
    var longueur = getStringLength(message);
    var newMessage = [];
    var newMessageConcat = "";
    
    //  Remplacez tous les « e » par des « E »
    for(var i = 0 ; i < longueur ; i++){
        if(message[i] === "e"){
            newMessage[i] = "E";
        }
    //  Remplacez tous les espaces par des tirets.
        else if(message[i] === " "){
            newMessage[i] = "-";
        }
        else{
            newMessage[i] = message[i];
        }
        
        newMessageConcat += newMessage[i];
    }
    
    console.log(newMessageConcat);
    //  Changer la première lettre de chaque mot par une majuscule.
    console.log(camelCase(message, " "));
    console.log(camelCase(newMessageConcat, "-"));
    
    
    
    //  AFFICHAGE DANS LE DOM
    afficheP("//    REMPLACER TOUS LES 'e' PAR DES 'E' ET TOUS LES ESPACES PAR DES TIRETS", "exo03", "comment");
    afficheP(newMessageConcat, "exo03", "reponse");
    
    afficheP("//    METTRE LES PREMIÈRES LETTRES DE CHAQUE MOT EN MAJUSCULES", "exo03", "comment");
    afficheP(camelCase(message, " "), "exo03", "reponse");
    afficheP(camelCase(newMessageConcat, "-"), "exo03", "reponse");
}



