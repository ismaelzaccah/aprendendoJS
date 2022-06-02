//--Prevenção padrão -- evento.preventDefault()

//Desliga alguma ação padrão de um evento (ex: desliga um link)

const input = document.querySelector('#idade input')
const button = document.querySelector('#idade button')

const activeCheckbox = document.querySelector('#activeCheckbox')
//Puxa o elemento checkbox para trabalhar

function sayAge(enablelink){
    if(!activeCheckbox.checked){// se checkbox NÃO estiver marcada
        enablelink.preventDefault()//desliga o comportamento Default
    }else{//se checkbox ESTIVER marcado
        window.alert(`A idade digitada foi: ${input.value} anos`)
        console.log(input.value)
    }
}

button.addEventListener('click', sayAge)
//botãohtml.escutandoEventos('cliqueDoMouse', função)

