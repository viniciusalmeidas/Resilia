const btnCriar = document.getElementById("btn-criar");
const btns = document.querySelectorAll(".btn");



var names = ["Vinicius", "Thome", "Norma"];

function createButtons(){    
    let newName = document.getElementById("lb-novo-nome").value;
    names.push(newName);
        
    let newBtn = document.createElement('button');
    newBtn.className = "btn";
    newBtn.textContent = newName;
    document.getElementById("container").appendChild(newBtn);
    newBtn.addEventListener("click", function(){
        alert("Olá " + newBtn.textContent);
    });
};



function addEvents(){
    
    btnCriar.addEventListener("click", createButtons);
    
    for (let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function(){
            alert("Olá "+ btns[i].innerHTML);
        });
    }
    
}



//Inicializar Eventos da Página
window.addEventListener("load", addEvents);