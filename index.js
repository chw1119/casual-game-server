const express = require('express');
const app = express();

app.use(express.static("./client"))

app.get('/',function(req,res){
    res.redirect("/html/main.html")
})

app.listen(8080);


//뭐 제작중?