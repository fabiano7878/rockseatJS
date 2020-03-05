//Versão sem a api AXIOS.
/**
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/fabiano7878');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){          
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject("Erro na requisição code: "+xhr.status);
                }
            }
        }
    });
}

minhaPromise()
    .then(function(reponse){
        console.log(reponse);
    })
    .catch(function(error){
        console.warn(error);
    });
 */

 //usando a api AXIOS para fazer a mesma coisa do codigo acima, usar o ajax e a promise.
 axios.get('https://api.github.com/users/fabiano7878')
    .then(function(reponse){
        console.log(reponse);
    })
    .catch(function(error){
        console.warn(error);
    });




/** Exercicios da Aula 4
 * Criar função que verifica se usuer é maior que 18 anos, usar promises.
*/

//Criando os Elementos, botão, campo texto e texto para botão.
var campoValidaIdade = document.createElement('input');
var btnValidaIdade = document.createElement('button');
var txtBtnValidaIdade = document.createTextNode('Idade');

//Atribuindo valores para o elemento Campo de Texto
campoValidaIdade.setAttribute('type','text');
campoValidaIdade.setAttribute('id', 'validaIdade');
campoValidaIdade.setAttribute('name', 'validaIdade');
campoValidaIdade.setAttribute('placeholder','Validar Idade Usuário');

//atribuindo informações ao botão.
btnValidaIdade.setAttribute('id','validaIdade');
btnValidaIdade.appendChild(txtBtnValidaIdade);

//adicionando o botão e o campo de texto na TextTrackList.
containerElement.appendChild(campoValidaIdade);
containerElement.appendChild(btnValidaIdade);


btnValidaIdade.onclick = function(idade){
    var promiseValidarIdade = function(){    
        return new Promise(function(resolve, reject){
            
        });
    }   
}

promiseValidarIdade()
    .then(function(reponse){
        console.log(reponse);
    })
    .catch(function(error){
        console.warn(error);
    });