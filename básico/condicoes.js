//--Condicinais IF ELSE--

// var isActive = false
// var message = ''

// if (isActive) { 
//     message = 'Está Ativo'
// } else {
//     message = 'Não está ativo'
// }

// console.log(message)


var semaforo = 'amarelo'
var message = ''

// if(semaforo == 'vermelho'){
//     message = 'Pare!'
// } else if(semaforo == 'verde') {
//     message = 'Pode passar'
// } else if(semaforo == 'amarelo'){
//     message = 'Atenção!'
// } else{
//     message = 'Formato inválido'
// }

switch (semaforo){
    case 'verde':
        message = 'Pode passar'
        break
    case 'vermelho':
        message = 'Pare!'
        break
    case 'amarelo':
        message = 'Atenção!'
        break
    default:
        message = 'Entrada inválida'
}

console.log(message)


