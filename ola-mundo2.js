const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res)=>{
    res.setHeader('content-type', 'text/plain');
    res.end('Nosso segundo hello world em NodeJS!!!');
});

server.listen(port, hostname, ()=>{
    console.log(`Servidor rodando na porta http://${hostname}:${port}/`);
});