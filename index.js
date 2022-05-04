var express = require("express");
var app = express();
var { usuario } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
  var resultado = await usuario.findAll();
  res.json(resultado);
});

app.post("/", async function(req, res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/:id", async function (req, res){
  var resultado = usuario.update(req.body,{ where: { id: req.params.id }});
  res.json(resultado);
});

app.delete("/", async function(req, res){
  usuario.destroy({ where: { id: 1 }});
});

app.listen(3000, function(){
  console.log("Servidor esta funcionando");
});

