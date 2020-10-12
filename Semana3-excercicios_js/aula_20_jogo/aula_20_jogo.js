const frm1 = document.getElementById("frm1");


//Eventos da Página
function addEventos(){
    
    .addEventListener("keydown", function () {
        frm2.reset();
        frm3.reset();
        lbDeCodificar.style.backgroundColor = "transparent";
        btnDeCodificar.disabled = true;
    });
    
    
    .addEventListener("submit", (e) => {
        e.preventDefault();
    
    });
    
 
}



//Inicializar Eventos da Página
window.addEventListener("load", addEventos);




