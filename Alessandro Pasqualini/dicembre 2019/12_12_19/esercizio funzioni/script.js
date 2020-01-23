function test(n1){
    console.log(typeof n1);
}
test(1);

function prodotto(primo, secondo){
    somma = primo + secondo;
    console.log(somma);
}
prodotto (5,6);

function prodotto(n1, n2, operatore){
    
    switch(operatore){
        
        case "+":
            prodotto = n1 + n2;
            console.log(prodotto);
            break;
        
        case "-":
            prodotto = n1 - n2;
            console.log(prodotto);
            break;
        
        case "*":
            prodotto = n1 * n2;
            console.log(prodotto);
            break;
        
        case "/":
            prodotto = n1 / n2;
            console.log(prodotto);
            break;
    }
}
prodotto (20,30,"+")


function palindroma(frase){
    //split divide la parola per caratteri
    // reverse ruota i caratteri
    // join li rimette insieme
    var testo = frase.split('').reverse().join('');
    if(testo == frase){
        console.log("è palindroma");
    }
    else{
        console.log("non è palindroma");
    }
}
palindroma("kayak");
