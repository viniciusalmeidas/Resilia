const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn1");
const btn3 = document.getElementById("btn1");
const btn4 = document.getElementById("btn1");


//Eventos da Página
function addEventos(){
  
    btn1.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href='/aula_20_fase2.html';
    });
    
    btn2.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href='/aula_20_fase3.html';
    });
    
    btn3.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href='/aula_20_fase4.html';
    });
    
 
}



//Inicializar Eventos da Página
window.addEventListener("load", addEventos);




