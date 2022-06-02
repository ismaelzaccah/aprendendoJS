//--Introdução ao Javascript

var name = 'Ismael Zaccah' // string
var age = 25 //integer
var weight = 70.5 // float
var alive = true // boolean
var food = null // null
var time //undefined

var fruits = ['Morango','Maçã', 'Abacate', 'Pera'] // array

var person = {
    name: 'ismael',
    age: 25,
    alive: true,
    height: 172.5,
} // object

//--Concatenação--

var product = 'Camisa'
var price = 10

//--Operadores Aritmeticos--

var numero1 = 10
var numero2 = 3
var numero3 = 5
var result = (numero1 + numero2) * numero3

// console.log(result++)
// console.log(result)

//--Funções

function action(){
    console.log('Ação!')
    return 10
}

action()
console.log( 15 + action())

function mult(num1, num2){
    return num1 * num2
}

console.log(mult(3,25))