var containerElement = document.querySelector('.todos');

var listaTodos = document.createElement('ul');

var lFazerCafe = document.createElement('li');
var lEstudarJs = document.createElement('li');
var lAcessoComunidade = document.createElement('li');


linhaFazerCafe();
linhaEstudar();

//Adicionando Linhas a Lista
listaTodos.appendChild(lFazerCafe);
listaTodos.appendChild(lEstudarJs);
listaTodos.appendChild(lAcessoComunidade);

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