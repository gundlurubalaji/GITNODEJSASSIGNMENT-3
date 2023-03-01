const fs=require("fs")
const http=require("http")
const server=http.createServer((request,response)=>{
    console.log("server is running")
    response.writeHead(200,{'content-Type':'text/html'});
    let read=fs.createReadStream('index.html');
    console.log(fs.createReadStream)
    read.pipe(response);
    
    
})
server.listen(4000,()=>{
    console.log("server is Running")
})