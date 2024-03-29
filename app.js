const http=require('http');

const server = http.createServer((req,res)=>{

    console.log(req);

    res.end('Response message ...');//end the re
})

server.listen(5000)
