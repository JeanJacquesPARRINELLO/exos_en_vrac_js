//  FONCTIONS DE MANIPULATION DE CHAINES ÉCRITENT
//  POUR COLLER AUX EXERCICES

function afficheP(pTexte, pDiv, pClass){
    
    var maDiv = document.getElementById(pDiv);

    var newP = document.createElement("p");
    newP.className = pClass;
    newP.appendChild(document.createTextNode(pTexte));
    maDiv.appendChild(newP);
}

function getStringLength(pString){
    var longueur = 0;
    
    while(pString[longueur] !== undefined){
        longueur++;
    }
    
    return longueur;
}

function countWordsInString(pMessage){
    var longueur = getStringLength(pMessage);
    var counter = 0;
    
    for(var i = 0 ; i <= longueur ; i++){
        //  LES MOTS SONT SÉPARÉS PAR DES ESPACES
        //  LORSQUE L'ON RENCONTRE UN ESPACE, UN MOT SE TERMINE
        //  LORSQUE L'ON RENCONTRE undefined, LE DERNIER MOT SE TERMINE
        //  ON INCRÉMENTE LE COMPTEUR DE MOTS
        if(pMessage[i] == " " || pMessage[i] === undefined){
            counter++;
        }
    }
    return(counter);
}

function posWordsInString(pMessage){
    var longueur = getStringLength(pMessage);
    var wordToPos = {};
    var aWord = "";
    var position = 0;
    
    for(var i = 0 ; i <= longueur ; i++){
        if(pMessage[i] == " " || pMessage[i] === undefined){
            ++position;
            wordToPos[aWord] = position;
            aWord = "";
        }else{
            aWord += pMessage[i];
        }
    }
    return(wordToPos);
}

function wordLengthInString(pMessage){
    var longueur = getStringLength(pMessage);
    var wordLength = {};
    var aWord = "";
    var position = 0;
    
    for(var i = 0 ; i <= longueur ; i++){
        if(pMessage[i] == " " || pMessage[i] === undefined){
            wordLength[aWord] = getStringLength(aWord);
            aWord = "";
        }else{
            aWord += pMessage[i];
        }
    }
    return(wordLength);
    
}

function camelCase(pMessage, pSeparator){
    var longueur = getStringLength(pMessage);
    var tabEquiv = {
      "a":"A",
      "b":"B",
      "c":"C",
      "d":"D",
      "e":"E",
      "E":"E",
      "f":"F",
      "g":"G",
      "h":"H",
      "i":"I",
      "j":"J",
      "k":"K",
      "l":"L",
      "m":"M",
      "n":"N",
      "o":"O",
      "p":"P",
      "q":"Q",
      "r":"R",
      "s":"S",
      "t":"T",
      "u":"U",
      "v":"V",
      "V":"V",
      "w":"W",
      "x":"X",
      "y":"Y",
      "z":"Z"
    };
    
    var newMessage = [];
    var newMessageConcat = "";
    
    for(var i = 0 ; i < longueur ; i++){
        //  PREMIER MOT PREMIER CARACTERE
        if(pMessage[i-1] === undefined){
            if(pMessage[i] == pSeparator || pMessage[i] == " "){
                newMessage[i] = pMessage[i];
            }else{
                newMessage[i] = tabEquiv[pMessage[i]];
            }
        }else if(pMessage[i-1] === pSeparator){
            newMessage[i] = tabEquiv[pMessage[i]];
        }else{
            newMessage[i] = pMessage[i];
        }
        newMessageConcat += newMessage[i];
    }
    return newMessageConcat;
}

function convertStringToWordsArray(pString){
    var longueur = getStringLength(pString);
    var wordToPos = [];
    var aWord = "";
    var position = 0;
    
    for(var i = 0 ; i <= longueur ; i++){
        if(pString[i] == " " || pString[i] === undefined){
            wordToPos[position] = aWord;
            ++position;
            aWord = "";
        }else{
            aWord += pString[i];
        }
    }
    return wordToPos;
}

function getWords(pMessage){
    return (convertStringToWordsArray(pMessage));
}

function deleteWord(pMessage, pBeginWithWord){
    var wordToPos = convertStringToWordsArray(pMessage);
    var taille = 0;
    var returnTab = [];
    
    for (o in wordToPos) ++taille;
    
    for(var i =  pBeginWithWord%2 ; i <= taille ; i=i+2){
        returnTab.push(wordToPos[i]);
    }
    return(returnTab);
}

function deleteWordLongerThan3(pMessage){
    var wordToPos = convertStringToWordsArray(pMessage);
    var returnTab = [];

    for(var key in wordToPos){
        if(wordToPos[key].length <= 3){
            returnTab.push(wordToPos[key]);
        }
    }
    return(returnTab);
}

function deleteWordWithoutE(pMessage){
    var wordToPos = convertStringToWordsArray(pMessage);
    var returnTab = [];
//                console.log(wordToPos);

    for(var key in wordToPos){
        if(checkWordEless(wordToPos[key]) == false){
            returnTab.push(wordToPos[key]);
        }
    }
    return(returnTab);
}

function checkWordEless(pWord){
    var returnValue = true;
    for(var i = 0 ; i < getStringLength(pWord) ; i++){
        if(pWord[i] == "e"){
            returnValue = false;
        }
    }
    return returnValue;
}

function deleteWordWithMoreThan2Voyelles(pString){
    var wordToPos = convertStringToWordsArray(pString);
    var returnTab = [];
//                console.log(wordToPos);

    for(var key in wordToPos){
        if(checkMoreThan2(wordToPos[key]) == false){
            returnTab.push(wordToPos[key]);
        }
    }
    return(returnTab);
}

function checkMoreThan2(pString){
    var returnValue = false;
    var voyellesTab = ["a","e","i","o","u","y"];
    var nbVoyelles = 0;
    
    //  POUR CHACUN DES CARACTÈRES CONTENU DANS LE MOT À ÉVALUER
    for(var i = 0 ; i < getStringLength(pString) ; i++){
        //  ON REAGARDE S'IL S'AGIT D'UNE VOYELLE
        for(j = 0 ; j < 6 ; j++){
            if(pString[i] == voyellesTab[j]){
                //  ET CHAQUE VOYELLE EST COMPTABILISÉE
                nbVoyelles += 1;
            }
        }
    }
    //  ET LA VALEUR DE RETOUR DE LA FONCTION PASSE À TRUE
    if(nbVoyelles >= 2)returnValue = true;
    //  VALEURS DE RETOUR : TRUE OU FALSE
    return returnValue;
}

function length(pMessage){
    return (getStringLength(pMessage));
}

function getIndex(pMessage, pChar){
    var longueur = length(pMessage);
    var position = 1;
    
    for(var i = 0 ; i <= longueur ;  i++){
        if(pMessage[i] == pChar){
            return position;
        }else{
            position++;
        }
    }
}

function count(pMessage, pString){
    var longueur = length(pMessage);
    var counter = 0;
    
    if(length(pString) > 1){
        //  ICI ON COMPTE LE NOMBRE D'OCCURENCE D'UN MOT
        var wordArray = convertStringToWordsArray(pMessage);
        
        for(var i in wordArray){
            if(wordArray[i] == pString) counter++;
        }
    }else{
        //  ICI ON COMPTE LE NOMBRE D'OCCURENCE D'UN SEUL CARACTÈRE
        for(var i = 0 ; i <= longueur ;  i++){
            if(pMessage[i] == pString){
                counter++;
            }
        }
    }
        
    return counter;
}

function replace(pMessage, pFrom, pTo){
    var longueur = length(pMessage);
    var newString = "";
    
    for(var i = 0 ; i < longueur ;  i++){
        if(pMessage[i] == pFrom){
           newString += pTo;
        }else{
           newString += pMessage[i]
        }
    }
    return newString;
    
}