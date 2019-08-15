var containerLement = document.querySelector('.todos');

var listaTodos = document.createElement('ul');

var lFazerCafe = document.createComment('li');
var lEstudarJs = document.createComment('li');
var lAcessoComunidade = document.createComment('li');

listaTodos.appendChild(lFazerCafe);
listaTodos.appendChild(lEstudarJs);

containerLement.appendChild(listaTodos);