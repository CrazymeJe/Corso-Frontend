//andiamo a creare delle varibili globali per poterli utilizzare in qualsiasi funzione andiamo a fare dopo
var numero1 = 0;
var numero2 = 0;
var operatore = "";
//trova tutti gli elementi che hanno la classe number
//al click esegui la function
$(".number").click(function(){
    //creo la variabile cifra che identifica il valore della funzione number
    var cifra = $(this).data("number");
    //creao la variabile numero per andare successivamente a concatenare le varie cifre
    var numero = $("#text_area").val();
    //vado a concatenare cifra con numero per andare a concatenare le due stringhe
    //con parseInt converto la stringa in numero reale e javascript non permetterà di scrivere una cifra che inizia per 0
    numero = parseInt(numero + cifra);
    //vado a dire di inserire il valore cifra all'interno dell'elemento con id text_area
    $("#text_area").val(numero);
});

$(".btn-operator").click(function(){
    operatore = $(this).data("operator");
    var numero = $("#text_area").val();
    
    numero1 = parseInt(numero);

    $("#text_area").val("");
});

$(".result").click(function(){
    numero2 = parseInt($("#text_area").val());
    var risultato;
    if(operatore == "+"){
        risultato = numero1 + numero2;
    }
    if(operatore == "-"){
        risultato = numero1 - numero2;
    }
    if(operatore == "*"){
        risultato = numero1 * numero2;
    }
    if(operatore == "/"){
        risultato = numero1 / numero2;
    }
    $("#text_area").val(risultato);
})

$(".clear").click(function(){
    var vuoto = "";
    $("#text_area").val(vuoto);
})