// --Promises - JS assíncrono--

//
var voceComprouOsProdutos = new Promise(function(resolve, reject){
//Variavel armazena --new Promisse--
    setTimeout(function(){
        var products = ['Camisa','Sapato','Calça']
        reject(products) // retorna --products-- ao final de --3000ms-- 
    }, 3000)
})

voceComprouOsProdutos
    .then(function(products){ // Será executado em Caso de --resolve--
        console.log(products)
    })
    .catch(function(error){ // Será executado em Caso de --reject--
        console.log(error)
    })  
    
console.log(voceComprouOsProdutos)
// Irá mostrar status da promessa --resolve, reject-- e retornar valor armazenado no mesmo