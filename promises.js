// --Promises - JS assíncrono--


var voceComprouOsProdutos = new Promise(function(resolve, reject){
    setTimeout(function(){
        var products = ['Camisa','Sapato','Calça']
        reject(products)
    }, 3000)
})

voceComprouOsProdutos
    .then(function(products){
        console.log(products)
    })
    .catch(function(error){
        console.log(error)
    })  
    
console.log(voceComprouOsProdutos)