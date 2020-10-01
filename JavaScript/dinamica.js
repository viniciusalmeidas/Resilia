
function view(t){
  var respostaBlock = document.getElementById('resposta-' + t);
  var imgBlock = document.getElementById('eyes-'+ t);  
  var name= imgBlock.getAttribute('src')
  if (name == "_imagesJs/answers.png"){
    respostaBlock.hidden = true;
    imgBlock.src = "_imagesJs/no-answer.png";
  }
  if (name == "_imagesJs/no-answer.png"){
    respostaBlock.removeAttribute("hidden");
    imgBlock.src = "_imagesJs/answers.png";
  }
}


function resposta1a() {
  return document.write("EducaTech, e Consultoria Industrial e Portuária<br/>");
  
}

function resposta1b() {
    return document.write("Singapura<br/>");
    
}

function resposta1c() {
    return document.write("1 filha e Solteiro.<br/>");
}

function resposta2() {
    
    document.write("Um bom barco.<br/>");
    
}

function resposta3() {
    document.write("Um ser humano como sou hoje. Porque não precisamos caçar e andamos de pé.<br/>");
}