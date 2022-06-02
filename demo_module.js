const http = require('http');
const dt = require('./myfirstmodule');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{res.writeHead(200, {'Content-Type': 'text/html'});
res.write(`<h1>The date and time are currently: ${dt.myDateTime()}</h1>`);
res.end();
})

server.listen(port, host, ()=>{
    console.log('Servidor iniciado...');
});