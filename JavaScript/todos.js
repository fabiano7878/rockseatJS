var containerElement = document.querySelector('.todos');

var listaTodos = document.createElement('ul');

var lFazerCafe = document.createElement('li');
var lEstudarJs = document.createElement('li');
var lAcessoComunidade = document.createElement('li');

var campoNovaLinha = document.createElement('input');
var btnAdicionaLinha = document.createElement('button');
var txtBtnAdicionaLinha = document.createTextNode('adicionar');

campoNovaLinha.setAttribute('type','text');
campoNovaLinha.setAttribute('id', 'nomelinha');
campoNovaLinha.setAttribute('name', 'nomelinha');
campoNovaLinha.setAttribute('placeholder','Nome da Linha');

btnAdicionaLinha.setAttribute('id','addlinha');
btnAdicionaLinha.appendChild(txtBtnAdicionaLinha);

linhaFazerCafe();
linhaEstudar();

//Adicionando Linhas a Lista
listaTodos.appendChild(lFazerCafe);
listaTodos.appendChild(lEstudarJs);
listaTodos.appendChild(lAcessoComunidade);
listaTodos.appendChild(campoNovaLinha);
listaTodos.appendChild(btnAdicionaLinha);

//Adicionando a Lista na Div 
containerElement.appendChild(listaTodos);

//Linha "Fazer Café" tratando a linha do Café, adicionando o link "excluir".
function linhaFazerCafe() {
    var txtFazerCafe = document.createTextNode("Fazer caf\u00E9 - ");
    var linkCafe = document.createElement('a');
    linkCafe.setAttribute('href', '#');
    var txtExcluirCafe = document.createTextNode('excluir');
    linkCafe.appendChild(txtExcluirCafe);
    lFazerCafe.setAttribute('id', 'cafe');
    lFazerCafe.appendChild(txtFazerCafe);
    lFazerCafe.appendChild(linkCafe);
}

//Linha "Fazer Café" tratando a linha do Café, adicionando o link "excluir".
function linhaEstudar() {
    var txtEstudar = document.createTextNode("Estudar JS - ");
    var linkEstudar = document.createElement('a');
    linkEstudar.setAttribute('href', '#');
    var txtExcluirEstudar = document.createTextNode('excluir');
    linkEstudar.appendChild(txtExcluirEstudar);
    lEstudarJs.setAttribute('id', 'estudar');
    lEstudarJs.appendChild(txtEstudar);
    lEstudarJs.appendChild(linkEstudar);
}




btnAdicionaLinha.onclick = function(){                
    var todos = ['Fazer café', 'Estudar','Comunidade'];    
    var pnovaLinha = document.querySelector('#nomelinha').value;

    if(pnovaLinha === null || pnovaLinha === ''){
        alert('Adicione o nome da linha!');
    }else{
        addNovaLinha(pnovaLinha, todos);
    }

    console.log('1: '+todos);
    for(todo of todos){
        console.log('T: '+todo);
    }
}
function addNovaLinha(nome, todos) {    
    console.log('Parametros nome: '+nome+' todos: '+todos);
    console.log('tamanho: '+todos.length);
    for(i = 0; i < todos.length; i++){        
        console.log('i: '+i+' todos: '+todos.length);
        if(todos.length == 0){
            console.log(' = 0');
           todos[i] = nome;
        }
        if(i == (todos.length - 1)){
           console.log(' =! 0 ');
           todos[i+1] = nome;
           break; 
        }               
    }
    console.log('tamanho: '+todos.length);
}

