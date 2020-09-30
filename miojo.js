/*ressumptions
Estamos com fome
Temos gás
Temos miojo 
*/

function miojo(){
    var panela;
    var macarrao;
    var agua;
    var temperatura;
    var tempo;
    var tempero;
      
    /*pegar panela colocar agua*/ 
    panela = 0
    agua = 300 /*[ml]*/
    panela = panela + agua; 
    
    /*colocar panela no fogao e acender*/  
    fogao = 0 
    if (fogao == 0) {   
        /*acender foga*/
        fogao = 1;
    }
    else{ 
            /*esperar temperatura*/
            if (temperatura < 97.5){
                temperatura ++;
            }
            else{
                /*colocar o macarao*/
                panela = panela + macarrao;
                /*esperar cozinhar por 3 minuto*/
                if (tempo < 180){
                    tempo++;
                }
                else{
                /*colocar tempero*/ 
                panela = panela + tempero;
                /*tirar na panela e colocar no prato*/ 
                prato = panela; 
                }
            }
        }    

    } 

}


miojo()


