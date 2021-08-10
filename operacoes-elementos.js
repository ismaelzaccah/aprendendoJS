//--Operações em elementos--

//Criar e adicionar a seguinte tag:
//<a href="http://google.com">Visitar Google</a>

var divIdade = document.querySelector('div#idade')
// objeto --divIdade-- recebe a --<div id='idade'> </div>--


var link = document.createElement('a')
// cria a tag --<a></a>--

var textLink = document.createTextNode('Visitar Google')
// atribui o texto --'Visitar Google'-- ao --textLink--

link.href = 'http://google.com'
// adiciona atributo -- href="http://google.com"--
link.setAttribute('href', 'http://google.com')
// adiciona atributo -- href="http://google.com"--

link.appendChild(textLink)
//adiciona --textLink-- dentro da tag armazenada em --link--

divIdade.appendChild(link)
//adiciona --link-- dento da tag armazenada em --divIdade--