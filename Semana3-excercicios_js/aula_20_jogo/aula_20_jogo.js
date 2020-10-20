const btnC1 = document.getElementById("btnC1");
const btnW = document.querySelector("#btnWrong");
const title = document.getElementById("title");
const text = document.getElementById("text");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const contImages = document.getElementById("contImages");
const btns = document.getElementById("btns");

textoFase2 = "Homer pode ajudar a Lisa a minimizar os danos da Usina Nuclear de Springfield, e para isso ele tem que conseguir chegar na Usina sem ativar nenhuma bomba."
+" Leve o Homer até a Usina!!"


function fase2(){
    title.textContent = "Homer, o Paizão!";
    text.textContent = textoFase2;
    img1.remove();
    img2.remove();
    img3.remove();
    btns.remove();
    var imgNova = document.createElement("img");
    contImages.appendChild(imgNova);

}



//Eventos da Página
function addEventos(){
  
    btnC1.addEventListener("click", (e) => {
        e.preventDefault();
        fase2();
    });
    
    btnW.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Resposta Errada!");
     });
 
}

//Inicializar Eventos da Página
window.addEventListener("load", addEventos);






