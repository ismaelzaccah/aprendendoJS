//--Manipulação de Eventos

var input = document.querySelector('#idade input')
var button = document.querySelector('#idade button')
//querySelector armazena tudo na variavel, para retornar valor adicione '.value' ao final

function sayAge(){
    window.alert('A idade digitada foi: ' + input.value)
    //.value retornando valor numerico
}

button.addEventListener('click', sayAge)
//variavel.addEventListener('evento', função/comando)