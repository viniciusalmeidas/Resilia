var titulo = document.getElementById('title')
var descricao = document.getElementById('descricao')
var img = document.getElementById('img')
var btnEnviar = document.getElementById("btn");



class Controller{

    inicializador(data){
        
        console.log('controlador iniciou...')
        let escolhaData = new Model();
        escolhaData.Recebe(data);


        let view = new View();
        view.Mostrar(escolhaData);
    }
    
}


class View
{
    Mostrar(data){
        console.log('view iniciou')
        titulo.textContent = data.getTitle();
        img.src = data.getImg();
        descricao.textContent = data.getExplanation();
    }
}


class Model{
    constructor(){
        this._date = ''; 
        this._title ='';
        this._image ='';
        this._explanation='';
    }

    Recebe(data)
    {
        console.log('modelo iniciou', data);

        let request = new XMLHttpRequest();
        

        request.addEventListener('load', ()=>
        {
            if (request.status == 200)
            {

                console.log('Request event ok')
                
                let dados = this._processar(request.responseText);
                console.log(dados)
                
                this._atualizar(dados)
            }

        })
        
        request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=HxfsjMvsjh9PJ6dPJ40ikaqugjUIAJgQbjK8QVN3&date=${data}`,false);
        
        request.send();

    }

    _processar(String)
    {
        let resposta = JSON.parse(String);
        return resposta;
    }

    _atualizar(dados){
        this._date = dados.date; 
        this._title = dados.title;
        this._image = dados.hdurl;
        this._explanation = dados.explanation;
    }

    getDate(){
        return this._date;
    }

    getTitle(){
        return this._title;
    }

    getImg(){
        return this._image;
    }

    getExplanation(){
        return this._explanation;
    }

}



let controlador = new Controller();

//gatilho
btnEnviar.addEventListener('click', () => {

let dataEscolhida = document.getElementById('date').value;
    //inicia o programa
    controlador.inicializador(dataEscolhida);

});


    