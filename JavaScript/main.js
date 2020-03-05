//Versão sem a api AXIO.
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr =new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/afoaline');
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