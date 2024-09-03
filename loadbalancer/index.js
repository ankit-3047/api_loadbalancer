const express = require("express")
const http = require("http")
const httpProxy = require("http-proxy")
const app = express()
const targets= [ 
    {
        target:"http://localhost:3001",

    }
    ,
    {
        target:"http://localhost:3002",
        
    }
]
let randomIndex = 0;
const proxy = httpProxy.createProxyServer();
app.use((req,res)=>{
    const target = targets[randomIndex];
     randomIndex = Math.floor(Math.random() * targets.length);


    console.log(target);
    proxy.web(req,res,target)
})
const server = http.createServer(app)
app.listen(5005,()=>{
    console.log("Server started");
    
})