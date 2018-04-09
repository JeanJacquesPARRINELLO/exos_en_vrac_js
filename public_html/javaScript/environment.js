/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//  CIBLAGE DE TOUS LES DIV DE CLASSE exercice
var divArrayResultat = document.getElementsByClassName("exercice");
//console.log(divArrayResultat);

//  TOUS LES DIV SONT CACHÉS
for(var oDiv in divArrayResultat){
    divArrayResultat[oDiv].style.display = "none";
}

//  AFFICHAGE OU MASQUAGE DES DIV DONT L'IDENTIFIANT EST PASSÉ EN PREMIER PARAMÈTRE
function rollOn(pDivId, buttonId){
    oDiv = document.getElementById(pDivId);
    oButton = document.getElementById(buttonId);
    
    if(oDiv.style.display == "none"){
        oDiv.style.display = "block";
        oButton.innerHTML = "<";
    }else{
        oDiv.style.display = "none";
        oButton.innerHTML = ">";
    }
}

