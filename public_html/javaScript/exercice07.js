/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function exercice07(){
    //  Initialisez une variable message à la valeur « ceci est un texte assez long »
//    var message = "ceci est un texte assez long";
    var message = document.getElementById("messageInput").value;
//    var maDiv = document.getElementById("exo07");
    
    //  Une fonction « length(message) » qui retourne la longueur de la chaine passée en argument.
    console.log("Longueur du message = " + length(message));
    afficheP("//    Une fonction « length(message) » qui retourne la longueur de la chaine passée en argument.", "exo07", "comment");
    afficheP("Longueur du message = " + length(message), "exo07", "reponse");
    
    //  Une fonction « getIndex(message,caractere) » qui retourne l’index de la première
    //  occurrence du caractère passé en deuxième argument dans le message passé en
    //  premier argument.
    afficheP("//    Une fonction « getIndex(message,caractere) » qui retourne l’index de la première occurrence du caractère passé en deuxième argument dans le message passé en premier argument.", "exo07", "comment");
    console.log("Le premier ' t ' se trouve à l'emplacement n° " + getIndex(message, "t"));
    afficheP("Le premier ' t ' se trouve à l'emplacement n° " + getIndex(message, "t"), "exo07", "reponse");
    console.log("Le premier ' g ' se trouve à l'emplacement n° " + getIndex(message, "g"));
    afficheP("Le premier ' g ' se trouve à l'emplacement n° " + getIndex(message, "g"), "exo07", "reponse");
    
    //  Une fonction « count(message,caractère) » qui compte le nombre d’occurrences du
    //  caractère présentes dans le message
    afficheP("//    Une fonction « count(message,caractère) » qui compte le nombre d’occurrences du caractère présentes dans le message", "exo07", "comment");
    console.log("le nombre d’occurrences du caractère ' t ' est de " + count(message, "t"));
    afficheP("le nombre d’occurrences du caractère ' t ' est de " + count(message, "t"), "exo07", "reponse");
    console.log("le nombre d’occurrences du caractère ' e ' est de " + count(message, "e"));
    afficheP("le nombre d’occurrences du caractère ' e ' est de " + count(message, "e"), "exo07", "reponse");
    
    //  Une fonction « replace(message,from,to) » qui remplace le caractère from par le
    //  caractère to dans la chaine message.
    afficheP("//    Une fonction « replace(message,from,to) » qui remplace le caractère from par le caractère to dans la chaine message.", "exo07", "comment");
    console.log(replace(message, "c" , "C"));
    afficheP(replace(message, "c" , "C") + " //     REPLACE 'c' PAR 'C'", "exo07", "reponse");
    console.log(replace(message, "e" , "E"));
    afficheP(replace(message, "e" , "E") + " //     REPLACE 'e' PAR 'E'", "exo07", "reponse");
    console.log(replace(message, "g" , "G"));
    afficheP(replace(message, "g" , "G") + " //     REPLACE 'g' PAR 'G'", "exo07", "reponse");
    console.log(replace(message, "g" , "G"));
    afficheP(replace(message, "e" , "3") + " //     REPLACE 'e' PAR '3'", "exo07", "reponse");
    
    //  Modifiez la fonction « count(message,caractère) » afin qu’elle fonctionne aussi sur les
    //  mots dans la chaine message.
    afficheP("//    Modifiez la fonction « count(message,caractère) » afin qu’elle fonctionne aussi sur les mots dans la chaine message.", "exo07", "comment");
    console.log("le nombre d’occurrences du mot ' est ' est de " + count(message, "est"));
    afficheP("le nombre d’occurrences du mot ' est ' est de " + count(message, "est"), "exo07", "reponse");
    console.log("le nombre d’occurrences du mot ' ceci ' est de " + count(message, "ceci"));
    afficheP("le nombre d’occurrences du mot ' ceci ' est de " + count(message, "ceci"), "exo07", "reponse");
    
    //  Une fonction « getWords(phrase) » qui retourne un tableau a deux dimensions. Le
    //  tableau contient tous les mots contenus dans la phrase. La structure du tableau est la
    //  suivante : indexDuMot, mot. 
    console.log(getWords(message));
    afficheP("//    ", "exo07", "comment");
    afficheP(getWords(message), "exo07", "reponse");
    
    
}
