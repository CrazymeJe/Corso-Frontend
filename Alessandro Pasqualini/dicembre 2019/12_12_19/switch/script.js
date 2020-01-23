for (var i = 1; i < 11; i++){
    
//switch(i){
//  case 1:
//  case 3:
//  case 5:
//  case 7:
//  case 9:
//      console.log(i + " dispari");
//      break;
//  case 2:
//  case 4:
//  case 6:
//  case 8:
//  case 10:
//      console.log(i + " pari");
//      break;
    
//}

    var risultato = i % 2;

    switch(risultato){
        case 0:
            console.log(i +" pari");
            break;
        case 1:
            console.log(i +" dispari");
            break;
    }
}