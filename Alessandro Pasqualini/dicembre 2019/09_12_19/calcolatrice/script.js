function prodotto(){
    var risultato= document.getElementById("somma");
    primoNumeroString = document.calcolatrice.primoNumero.value;
    secondoNumeroString = document.calcolatrice.secondoNumero.value;
    numeroPrimo = parseInt(primoNumeroString);
    numeroSecondo = parseInt(secondoNumeroString);
    risultato = numeroPrimo + numeroSecondo;
    var containerResult = document.getElementById("risultato");
    containerResult.innerHTML = risultato;
    if(risultato > 0){
        containerResult.classList.remove("rosso");
        containerResult.classList.add("verde");
    }
    else{
        containerResult.classList.remove("verde");
        containerResult.classList.add("rosso");
    }
    
}
function sottrazione(){
    var risultato= document.getElementById("meno");
    primoNumeroString = document.calcolatrice.primoNumero.value;
    secondoNumeroString = document.calcolatrice.secondoNumero.value;
    numeroPrimo = parseInt(primoNumeroString);
    numeroSecondo = parseInt(secondoNumeroString);
    risultato = numeroPrimo - numeroSecondo;
    var containerResult = document.getElementById("risultato");
    containerResult.innerHTML = risultato;
    if(risultato > 0){
        containerResult.classList.remove("rosso");
        containerResult.classList.add("verde");
    }
    else{
        containerResult.classList.remove("verde");
        containerResult.classList.add("rosso");
    }
}
function moltiplicazione(){
    var risultato= document.getElementById("per");
    primoNumeroString = document.calcolatrice.primoNumero.value;
    secondoNumeroString = document.calcolatrice.secondoNumero.value;
    numeroPrimo = parseInt(primoNumeroString);
    numeroSecondo = parseInt(secondoNumeroString);
    risultato = numeroPrimo * numeroSecondo;
    var containerResult = document.getElementById("risultato");
    containerResult.innerHTML = risultato;
    if(risultato > 0){
        containerResult.classList.remove("rosso");
        containerResult.classList.add("verde");
    }
    else{
        containerResult.classList.remove("verde");
        containerResult.classList.add("rosso");
    }
}
function divisione(){
    var risultato= document.getElementById("diviso");
    primoNumeroString = document.calcolatrice.primoNumero.value;
    secondoNumeroString = document.calcolatrice.secondoNumero.value;
    numeroPrimo = parseInt(primoNumeroString);
    numeroSecondo = parseInt(secondoNumeroString);
    risultato = numeroPrimo / numeroSecondo;
    var containerResult = document.getElementById("risultato");
    containerResult.innerHTML = risultato;
    if(risultato > 0){
        containerResult.classList.remove("rosso");
        containerResult.classList.add("verde");
    }
    else{
        containerResult.classList.remove("verde");
        containerResult.classList.add("rosso");
    }
    if(numeroSecondo == 0){
        alert("il secondo operatore non può essere uguale a 0");
    
    }
}