var containerElement = document.querySelector('.todos');

var listaTodos = document.createElement('ul');
listaTodos.setAttribute('id', 'listaTodos');
listaTodos.setAttribute('name', 'listaTodos');


//var lFazerCafe = document.createElement('li');
//var lEstudarJs = document.createElement('li');
//var lAcessoComunidade = document.createElement('li');


var campoNovaLinha = document.createElement('input');
var btnAdicionaLinha = document.createElement('button');
var txtBtnAdicionaLinha = document.createTextNode('adicionar');

campoNovaLinha.setAttribute('type','text');
campoNovaLinha.setAttribute('id', 'nomelinha');
campoNovaLinha.setAttribute('name', 'nomelinha');
campoNovaLinha.setAttribute('placeholder','Nome da Linha');

btnAdicionaLinha.setAttribute('id','addlinha');
btnAdicionaLinha.appendChild(txtBtnAdicionaLinha);

//linhaFazerCafe();
//linhaEstudar();
//linhaComunidade();


//Adicionando Linhas a Lista
//listaTodos.appendChild(lFazerCafe);
//listaTodos.appendChild(lEstudarJs);
//listaTodos.appendChild(lAcessoComunidade);

//Adicionando a Lista na Div 
//containerElement.appendChild(listaTodos);
containerElement.appendChild(campoNovaLinha);
containerElement.appendChild(btnAdicionaLinha);


//Linha "Fazer Café" tratando a linha do Café, adicionando o link "excluir".
/** function linhaFazerCafe() {
    var txtFazerCafe = document.createTextNode("Fazer caf\u00E9 - ");
    var linkCafe = document.createElement('a');
    linkCafe.setAttribute('href', '#');
    var txtExcluirCafe = document.createTextNode('excluir');
    linkCafe.appendChild(txtExcluirCafe);
    lFazerCafe.setAttribute('id', 'cafe');
    lFazerCafe.appendChild(txtFazerCafe);
    lFazerCafe.appendChild(linkCafe);
}*/

//Linha "Estudar" tratando a linha Estudar, adicionando o link "excluir".
/**function linhaEstudar() {
    var txtEstudar = document.createTextNode("Estudar JS - ");
    var linkEstudar = document.createElement('a');
    linkEstudar.setAttribute('href', '#');
    var txtExcluirEstudar = document.createTextNode('excluir');
    linkEstudar.appendChild(txtExcluirEstudar);
    lEstudarJs.setAttribute('id', 'estudar');
    lEstudarJs.appendChild(txtEstudar);
    lEstudarJs.appendChild(linkEstudar);
}*/

//Linha "Acesso a Comunidade" tratando a linha do Café, adicionando o link "excluir".
/**function linhaComunidade() {
    var txtComunidade = document.createTextNode("Comunidade - ");
    var linkComunidade = document.createElement('a');
    linkComunidade.setAttribute('href', '#');
    var txtExcluirComunidade = document.createTextNode('excluir');
    linkComunidade.appendChild(txtExcluirComunidade);
    lAcessoComunidade.setAttribute('id', 'comunidade');
    lAcessoComunidade.appendChild(txtComunidade);
    lAcessoComunidade.appendChild(linkComunidade);
}*/


var todos = JSON.parse(localStorage.getItem('lista_nomes')) || [];
btnAdicionaLinha.onclick = function(){                
    //var todos = ['Fazer café', 'Estudar','Comunidade'];
    var pnovaLinha = document.querySelector('#nomelinha').value;

    if(pnovaLinha === null || pnovaLinha === ''){
        alert('Adicione o nome da linha!');
    }else{
        /** 
        atualizaLista(pnovaLinha, todos); */
        todos.push(pnovaLinha);        
        nomelinha.value = ''
        renderTodo();
        salvarNoStorage();
    }            
}
/**
function atualizaLista(nome, todos) {    
     for(i = 0; i <= todos.length; i++){         
        if(todos.length == 0){            
           todos[i] = nome;
        }
        if(i > 0 && i == (todos.length - 1)){           
           todos[i+1] = nome;
           break; 
        }               
    }    
}  */


function novaLinha(todo){
    
    var addLinha = document.createElement('li');
    addLinha.setAttribute('id', todos.indexOf(todo));
    addLinha.setAttribute('name', todos.indexOf(todo));
    var txtaddlinha = document.createTextNode(todo+" - ");
    var linkaddlinha = document.createElement('a');
    linkaddlinha.setAttribute('href', '#');
    var pos = todos.indexOf(todo);
    linkaddlinha.setAttribute('onclick', 'excluirLinha('+pos+')');
    var txtExcluiraddlinha = document.createTextNode('excluir');
    linkaddlinha.appendChild(txtExcluiraddlinha);    
    addLinha.appendChild(txtaddlinha);
    addLinha.appendChild(linkaddlinha);
    var elementBR2 = document.createElement('BR');
    addLinha.appendChild(elementBR2); 
    listaTodos.appendChild(addLinha);
    containerElement.appendChild(listaTodos);   
}


function excluirLinha(pos){
    todos.splice(pos, 1);
    renderTodo();
    salvarNoStorage();
}

function renderTodo(){
    listaTodos.innerHTML = '';
    for(todo of todos){
        console.log('T: '+todo);          
          novaLinha(todo);
          //containerElement.appendChild(addLinha);
      }   
}
function salvarNoStorage(){
    localStorage.setItem('lista_nomes', JSON.stringify(todos));
}
