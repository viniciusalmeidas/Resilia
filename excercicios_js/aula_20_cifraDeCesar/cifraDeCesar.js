const frm1 = document.getElementById("frm1");
const frm2 = document.getElementById("frm2");
const lbCodificar = document.getElementById("lb-cod");
const btnCodificar = document.getElementById("btn-cod");
const lbDeCodificar = document.getElementById("lb-decod");
const btnDeCodificar = document.getElementById("btn-decod");

//Cifra com CharAt
function cifraComCifraDeCesar(){
    let mensagemEncriptada = [];   
    let msg = document.getElementById("msg").value;
    let desloc = document.getElementById("desloc").value;
    //Percorre a String da msg
    for (let i = 0; i < msg.length; i++) {
        //Transformada (letra -> número) e desloca
        mensagemEncriptada[i] = Number(msg.charCodeAt(i)) + Number(desloc);
        //Transformada (número ->letra)
        mensagemEncriptada[i] = String.fromCharCode(mensagemEncriptada[i])
    } 
    //Junta o vetor e apresenta na tela a resposta
    lbCodificar.value = mensagemEncriptada.join("");
    btnDeCodificar.disabled = false;    

}



//Decifra com CharAt
function decifraCifraDeCesar(){
    let mensagemDecifrada = [];
    const chave = document.getElementById("desloc").value;
    let cod = lbCodificar.value;
    let desloc = prompt("Qual é a chave? ")

    if (desloc != chave){
        frm3.reset();
        lbDeCodificar.style.backgroundColor="rgba(255,0,0,0.7)";
        return alert("Senha Incorreta");
    }
    else if (desloc == chave){
        //Percorre a String da COD    
        for (let i = 0; i < cod.length; i++) {
            //Transformada (letra -> número) e desloca
            mensagemDecifrada[i] = Number(cod.charCodeAt(i))- Number(desloc);
            //Transformada (número ->letra)
            mensagemDecifrada[i] = String.fromCharCode(mensagemDecifrada[i])
        }
        //Junta o vetor e apresenta na tela a resposta
        lbDeCodificar.value = mensagemDecifrada.join("");
        lbDeCodificar.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
    } 
}



//Eventos da Página
function addEventos(){
    
    frm1.addEventListener("keydown", function () {
        frm2.reset();
        frm3.reset();
        lbDeCodificar.style.backgroundColor = "transparent";
        btnDeCodificar.disabled = true;
    });
    
    
    frm1.addEventListener("submit", (e) => {
        e.preventDefault();
        cifraComCifraDeCesar();
    });
    
    frm2.addEventListener("submit", (e) => {
        e.preventDefault();
        decifraCifraDeCesar();
    });

}



//Inicializar Eventos da Página
window.addEventListener("load", addEventos);




