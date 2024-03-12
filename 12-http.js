const http= require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url ==='/about'){
        res.end('About page');
    }
   res.end(`
    <h1>OOOPS</h1>
    <p>404 error</p>
  
   `);
});

server.listen(5000);