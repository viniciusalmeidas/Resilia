


function viewPassword()
{
  var passwordInput = document.getElementById('password-field');
  var passStatus = document.getElementById('pass-status');
 
  if (passwordInput.type == 'password'){
    passwordInput.type='text';
    passStatus.className='fa fa-eye-slash';
    
  }
  else{
    passwordInput.type='password';
    passStatus.className='fa fa-eye';
  }
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

