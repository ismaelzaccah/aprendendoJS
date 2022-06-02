//--Intervalo e timeout--
// tempo em ms ou seja 1s==1000ms

function doAction(){
    console.log('exectou')
}

window.setInterval(doAction, 3000)
// função executada em loop com intervalo de tempo determinado --3000ms--
// pode suprimir o --window--

setTimeout(doAction, 3000)
// função executada 1 vez após o tempo determinado --3000ms--
// --window-- foi suprimido
