var submitButton = document.querySelector("body div form button")
var zipCodeField = document.querySelector("body div form input")
var contentMain = document.querySelector("body div main")
// converte tudo que precisarei manipular em objetos --button--input--main--

submitButton.addEventListener("click", run)
//adiciona um "sensor" de click ao bottão que dispara o --run 

function run(event){
    event.preventDefault() // previne o recarregamento da pagina, comportamento padrão do --form--

    var zipCode = zipCodeField.value
    zipCode = zipCode.replace(" ", "") //--replace-- substitui um caractere por outro
    zipCode = zipCode.replace("-", "")
    zipCode = zipCode.replace(".", "") 
    zipCode = zipCode.trim() //--trim-- retira os espaços em branco do inicio e final da string
    
    axios //funciona como uma --promisse-- 
    .get(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then(function (response){ 
        console.log(response.data)
        
        createLine(response.data.logradouro)
        createLine(response.data.bairro)
        createLine(response.data.localidade + "/" + response.data.uf)
    })
    .catch(function (error){
        console.log(error)
    })
}

function createLine(text){
    var line = document.createElement("p")
    var content = document.createTextNode(text)

    line.appendChild(content)
    contentMain.appendChild(line)
}