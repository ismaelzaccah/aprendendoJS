//--Alterando conteúdo

const app = document.querySelector('div#idade')

// .outerHTML - todo o HTML do elemento
// .innerHTML - HTML interno
// .innerText - todo o testo, sem tags

app.innerText = '<p> Testando </p>'

console.log(app.outerHTML)
console.log(app.innerHTML)
console.log(app.innerText)
