//--Operadores Lógicos

var login = 'teste@teste.com'
var pw = 'teste'

if(login == 'teste@teste.com' && pw == 'teste'){
    console.log('liberado')
} else{
    console.log('negado')
}

//--Operador Ternário

var login = 'teste@teste.com'
var pw = 'teste'

var result = pw == 'teste' ? 'Liberado' : 'Negado'

console.log(result)

