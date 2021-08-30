var button = document.querySelector('#app')

button.addEventListener('click', function (){
    axios
    .get('https://api.github.com/usersr')
    .then(function (resposta){
        console.log(resposta)
    })
    .catch(function(erro){
        console.log(erro)
    })
})