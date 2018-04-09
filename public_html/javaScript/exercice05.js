/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function exercice05(){
    //  Initialisez une variable message à la valeur « ceci est un texte assez long »
//    var message = "ceci est un texte assez long";
    var message = document.getElementById("messageInput").value;
    var maDiv = document.getElementById("exo05");
    
    //  Supprimez un mot sur deux à partir du premier
    //  deleteWord() RETOURNE UNE CHAINE DE CARACTÈRES
    console.log(deleteWord(message, 1));
    //  AFFICHAGE DANS LE DOM
    afficheP("//    SUPPRIMER UN MOT SUR DEUX À PARTIR DU PREMIER", "exo05", "comment");
    afficheP(deleteWord(message, 1), "exo05", "reponse");
    var newP = document.createElement("p");
    
    //  Supprimer un mot sur deux à partir du second mot
    console.log(deleteWord(message, 2));
    //  AFFICHAGE DANS LE DOM
    afficheP("//    SUPPRIMER UN MOT SUR DEUX À PARTIR DU SECOND", "exo05", "comment");
    afficheP(deleteWord(message, 2), "exo05", "reponse");
    
    //  Supprimez tous les mots dont le nombre de caractères est supérieur à 3
    console.log(deleteWordLongerThan3(message));
    //  AFFICHAGE DANS LE DOM
    afficheP("//    SUPPRIMER TOUS LES MOTS DONT LE NOMBRE DE CARACTÈRES EST SUPÉRIEUR À 3", "exo05", "comment");
    afficheP(deleteWordLongerThan3(message), "exo05", "reponse");
    
    //  Supprimez les mots qui n’ont pas de « e »
    console.log(deleteWordWithoutE(message));
    //  AFFICHAGE DANS LE DOM
    afficheP("//    SUPPRIMER LES MOTS QUI N'ONT PAS DE 'E'", "exo05", "comment");
    afficheP(deleteWordWithoutE(message), "exo05", "reponse");
    
    //  Supprimez les mots qui ont deux voyelles ou plus
    console.log(deleteWordWithMoreThan2Voyelles(message));
    //  AFFICHAGE DANS LE DOM
    afficheP("//    SUPPRIMER LES MOTS QUI ONT DEUX VOYELLES OU PLUS", "exo05", "comment");
    afficheP(deleteWordWithMoreThan2Voyelles(message), "exo05", "reponse");
}

