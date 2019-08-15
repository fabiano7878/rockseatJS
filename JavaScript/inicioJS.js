var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };
   
   var habilidades = ["JavaScript", "ReactJS", "React Native", "C#", "Java"];
   
   function enderecoCliente(endereco){    
       alert("O usuário mora em "+endereco.cidade+" / "+endereco.uf+", no bairro "+endereco.bairro+", na rua "+endereco.rua+" com nº "+endereco.numero);
   }
   
   function pares(aux, aux2){
       var pares = [] ;    
       while(aux <= aux2 ){        
           if(aux % 2 == 0){
               pares.push(aux);
           }
           aux++ 
       }
       alert("Os numeros Pares do Range são: "+pares);
   }
   
   function temHabilidade(skills){    
       for(i = 0; i < skills.length; i++){
         if(skills.indexOf("Oracle") > -1){
               alert("true");
               return true;
           }else{
               alert("false");
               return false;
           }
       }
   }
   function mostraAlerta(){
       alert("O Botão foi clicado!");
   }
   
   function mostraAvisoBusca(){
       alert("Buscador: ");
   }
   
   function mostraAlertaTextoBusca(){
       alert("Escreva o texto para buscar!");
   }
   
   //criando a variavel com o valor do id do campo nome.
   var inputElement = document.getElementById('nome');
   console.log(inputElement);
   //criando a variavel com o valor dos input, retorna uma collection e caso hajam varias inputs na tela precisa saber qual é o elemento especifico que vc quer.
   var inputElementByTag = document.getElementsByTagName('input');
   console.log(inputElementByTag);
   console.log("Pegando somente 1 item por TagName:");
   var inputElementByTagItem = document.getElementsByTagName('input')[2];
   console.log(inputElementByTagItem);
   //criando a variavel com o valor dos elementos que usam a Class de estilos cadastro, retorna uma collection, precisa saber qual o elemento que vc quer.
   var inputElementByClassName = document.getElementsByClassName('cadastro');
   console.log(inputElementByClassName);
   console.log("Pegando somente 1 item por ClassName:");
   var inputElementByClassNameItem = document.getElementsByClassName('cadastro')[1];
   console.log(inputElementByClassNameItem);
   
   /** Criando uma variavel com o elemento input da tela, para cessar o elemento estou usando o QuerySelector onde é possivel navegar pelos elementos até o meu especifico, 
   * o Query Selector retorna somente 1 elemento, no caso o primeiro elemento encontrado e não uma lista como outros exemplos que vimos, porém, se precisamos que retorne a
   * Collection dos elementos utilizamos a função "QuerySelectorAll", segue exemplo abaixo.
   */
   var inputByQuerySelector = document.querySelector('body div#cadastro input');
   console.log("Pegando somente item através do QuerySelector:");
   console.log(inputByQuerySelector);
   var inputByQuerySelectorSimply = document.querySelector('div#cadastro input');
   console.log("Simplificando: ");
   console.log(inputByQuerySelectorSimply);
   var inputByQuerySelectorSimply2 = document.querySelector('input[name=nome]');
   console.log("Simplificando 02: ");
   console.log(inputByQuerySelectorSimply2);
   
   //Exemplo QuerySelector All, retorna Coleção
   var inputByQuerySelectorAll = document.querySelectorAll('input');
   console.log("Retorna Collection: ");
   console.log(inputByQuerySelectorAll);
   
   
   var inputElement = document.querySelector('input[name=nome]');
   var btnElement = document.querySelector('button.botao');
   
   btnElement.onclick = function(){
       var text = inputElement.value;
       alert(text);    
   }
   
   
   var elementLink = document.createElement('a');
   elementLink.setAttribute('href', 'http://rocketseat.com.br');
   elementLink.setAttribute('title', 'site da RocketSeat');
   
   
   var textElemntLink = document.createTextNode('rocketseat');
   elementLink.appendChild(textElemntLink);
   
   var containerLink = document.querySelector('#paraLink');
   containerLink.appendChild(elementLink);
   
   var elementBR = document.createElement('BR');
   //console.log(elementBR);
   var elementBR2 = document.createElement('BR');
   /**
   * Após entendi que não adianta replicar a variavel que elá só irá adicionar 1 vez o o elemento
   * porém há possibilidade de criar um looping e incrementar a creação do elemento e da variavel, desta froma
   * seria possivel que gerasse mais vezes o elemento com o mesmo nome.
   */
   containerLink.appendChild(elementBR);
   containerLink.appendChild(elementBR2);
   
   var elementoCampoNome = document.createElement('INPUT');
   elementoCampoNome.setAttribute('type','text');
   elementoCampoNome.setAttribute('name','campoNome');
   elementoCampoNome.setAttribute('id','campoNome');
   
   containerLink.appendChild(elementoCampoNome);
   
   /** No exemplo abaixo primeiramente criei a variavel para pegar pelo id do elemento, já no segundo exemplo
   * estou buscando o elemento pelo tipo e pela class.
   */ 
   //var  removeInputSenha = document.querySelector('#senha');
   var  removeInputSenha = document.querySelector('input.senha');
   containerLink.removeChild(removeInputSenha);
   
   
   var btnElementoRocket = document.createElement('button');
   var txtbtnElementoRocket= document.createTextNode('enviar');
   btnElementoRocket.setAttribute('nome', 'msgRocket');
   btnElementoRocket.setAttribute('id', 'msgRocket');
   btnElementoRocket.setAttribute('title', 'Envia mensagem para RocketSeat');
   btnElementoRocket.appendChild(txtbtnElementoRocket);
   
   
   btnElementoRocket.onclick = function(){
       var text = document.querySelector('#campoNome').value;
       alert(text);
   }
   
   containerLink.appendChild(btnElementoRocket);
   
   
   var divBox = document.createElement('div');
   divBox.setAttribute('class','box');
   
   divBox.style.width = 100;
   divBox.style.height = 100;
   divBox.style.backgroundColor = '#f00';
   
   containerLink.appendChild(divBox);
   
   