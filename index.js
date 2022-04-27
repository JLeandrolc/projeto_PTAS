var express = require("express");
var app = express();
var { usuarios } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", function(req, res){
  res.send("olá mundo")
});

app.post("/", async function(req, res){
  var resultados = usuario.create(req.body);
  res.json(resultados);
});

app.listen(3000, function(){
  console.log("o servidor esta funcionando");
});

