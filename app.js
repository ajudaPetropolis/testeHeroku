const express = require("express");
const app = express();
const port = 3000;


app.get('/',function(req,res){
    res.sendFile(__dirname + "/static/index.html");
});


app.listen(port, function(){
    console.log("Servidor rodando na url http://localhost:"+port)
});