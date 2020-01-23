$("#mio-id").addClass("classe1");
$("#mio-id").removeClass("classe2");
//$("#mio-id").hide();

$("#mio-btn").click(function (){
    if($("#mio-id").hasClass("hidden")){      
        $("#mio-id").fadeIn(2000);
        //$("#mio-id").removeClass("hidden");
    } else{
        $("#mio-id").fadeOut(2000);
        //$("#mio-id").addClass("hidden");
    }
    $("#mio-id").toggleClass("hidden");
})

$("#mio-btn2").click(function(){
    //$("a").attr("href", "https://www.amazon.com");
    //$("<a>Test</a>").attr("href", "https://www.google.com")
    //  .appendTo($("body"));
    
    setTimeout(function(){
        //window.location = "https://www.amazon.com";
        var link = $("<a>Test</a>").attr("href", "https://www.google.com")
            //target_blank ti permette di aprire il link in un'altra pagina
            .attr("target", "_blank")
            //hide nasconde il link all'utente
            .hide()
            //fa comparire il link nel body, che però in questo caso non si vede perchè abbiamo applicato hide
            .appendTo($("body"));
        //siccome non si può generare un evento direttamente sul jquery, andiamo a creare un elemento javascript usando lo 0 e accedendo direttamente all'elemento
        link[0].click();
    }, 3000);  
    
});

$("#mio-a").click(function(e){
    // è importante mettere a "e" nella function perchè è l'evento che ti ha fatto arrivare sul link
    //pD tidice di bloccare e non fare l'azione di default, in questo caso non ti permettere di andare al link
    e.preventDefault();
    alert("non ti muoverai da qui, ebete!");
    //$("#mio-a").hide();
    //con questo comando dico di nascondere questo elemento senza doverlo riscrivere perchè siamo dentro ad una funzione
    $(this).hide();

});
