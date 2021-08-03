//Seleção de elementos

var input = document.getElementById('idade')
//document.getElementById
//document.getElementsByClassName



var input = document.querySelector('div [name=idade]')

// .querySelector ou .querrySelectorAll pode receber:

// div#id        -- Id        #
// div.class     -- Classe    .
//[name='idade'] -- Atributo  []

console.log(input)