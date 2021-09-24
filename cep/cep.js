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
        
        if (response.data.erro){ // cria um erro caso o cep seja invalido e tenha resposta undefinied e pula pro --catch--
            throw new Error ("CEP  inválido")
        }
        
        console.log(response.data) 
        
        contentMain.innerHTML = "" // Limpa o conteudo de --contentMain-- antes de escrever os dados recebidos

        createLine(response.data.logradouro) // cria linha com Rua
        createLine(response.data.bairro) // cria linha com Bairro
        createLine(response.data.localidade + "/" + response.data.uf) // cria linha com Cidade/UF
    })
    .catch(function (error){
        console.log(error)
        
        contentMain.innerHTML = "" / // Limpa o conteudo de --contentMain-- antes de escrever os dados recebidos
        createLine("Ops, algo deu errado!") // escreve uma linha com msg de erro 
    })
}

function createLine(text){
    var line = document.createElement("p") //cria uma tag --p-- e atribui ao --line--
    var content = document.createTextNode(text) // cria o texto que será atribuido a --content--

    line.appendChild(content) // coloca o --content-- dentro da tag atribuida ao --line--
    contentMain.appendChild(line) // coloca a tag atribuida ao --line-- dentro da tag atibuida ao --contentMain--
}