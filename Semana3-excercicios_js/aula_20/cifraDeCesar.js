const frm1 = document.getElementById("frm1");
const frm2 = document.getElementById("frm2");
const btnCodificar = document.getElementById("cod");
const btnDeCodificar = document.getElementById("decod");



function clearField(id1,id2=""){  
    document.getElementById(id1).reset();
    document.getElementById(id2).reset();
    document.getElementById("decod").style.backgroundColor="transparent";
}


function cifraComCifraDeCesar(){
    let mensagemEncriptada = [];   
    let msg = document.getElementById("msg").value;
    let desloc = document.getElementById("desloc").value;
    //Percorre a String da msg
    for (var i = 0; i < msg.length; i++) {
        //Transformada (letra -> número) e desloca
        mensagemEncriptada[i] = Number(msg.charCodeAt(i)) + Number(desloc);
        //Transformada (número ->letra)
        mensagemEncriptada[i] = String.fromCharCode(mensagemEncriptada[i])
    } 
    //Junta o vetor e apresenta na tela a resposta

    document.getElementById("cod").value = mensagemEncriptada.join("");   
}

function decifraCifraDeCesar(){
    let mensagemDecifrada = [];
    let cod = document.getElementById("cod").value;
    let desloc = prompt("Qual é a chave? ")

    if (desloc != document.getElementById("desloc").value){
        document.getElementById("frm3").reset();
        document.getElementById("decod").style.backgroundColor="rgba(255,0,0,0.7)";
        return alert("Senha Incorreta");
    }
    else if (desloc == document.getElementById("desloc").value){
        //Percorre a String da COD    
        for (var i = 0; i < cod.length; i++) {
            //Transformada (letra -> número) e desloca
            mensagemDecifrada[i] = Number(cod.charCodeAt(i)) - Number(desloc);
            //Transformada (número ->letra)
            mensagemDecifrada[i] = String.fromCharCode(mensagemDecifrada[i])
        }
        //Junta o vetor e apresenta na tela a resposta
        document.getElementById("decod").value = mensagemDecifrada.join("");
        document.getElementById("decod").style.backgroundColor = "rgba(0, 255, 0, 0.5)";
    } 
}


//Eventos da Página
function addEventos(){
    frm1.addEventListener("submit", (e) => {
        e.preventDefault();
    
        cifraComCifraDeCesar();
    
    });
    
    frm2.addEventListener("submit", (e) => {
        e.preventDefault();
    
        decifraCifraDeCesar();
        
    });
    
    frm1.addEventListener("focus",     
    clearField("frm2","frm3"));


}

//Inicializar Eventos da Página
window.addEventListener("load", addEventos);




