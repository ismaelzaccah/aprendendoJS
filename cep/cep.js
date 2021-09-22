var submitButton = document.querySelector("body div form button")
var zipCodeField = document.querySelector("body div form input")
var contentMain = document.querySelector("body div main")
// converte tudo que precisarei manipular em objetos --button--input--main--

submitButton.addEventListener("click", run)
//adiciona um "sensor" de click ao bottão que dispara o --run 

function run(event){
    event.preventDefault() // previne o recarregamento da pagina, comportamento padrão do --form--

    var zipCode = zipCodeField.value
    zipCode = zipCode.replace(" ", "") //--.replace-- substitui um caractere por outro
    zipCode = zipCode.replace("-", "") //--.replace-- substitui um caractere por outro
    zipCode = zipCode.replace(".", "") //--.replace-- substitui um caractere por outro
    zipCode = zipCode.trim() //--.trim()-- retira os espaços em branco do inicio e final da string
    
    axios //funciona como uma --promisse-- 
    .get(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then(function (response){ //em caso de resposta BEM sucedida, --return-- cai dentro dos parametros
            console.log(response.data.logradouro + " - Bairro: " +response.data.bairro)
        })
    .catch(function (error){ //em caso de resposta MAL sucedida, --ERRO-- cai dentro dos parametros
            console.log(error)
        })
}