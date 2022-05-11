var express = require("express");
var app = express();
var { usuario } = require("./models");
var { empresa } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/usuarios", async function(req, res) {
  var resultado = await usuario.findAll();
  res.json(resultado);
});

app.get("/usuarios/:id", async function(req, res) {
  var resultado = await usuario.findByPk(req.params.id);
  res.json(resultado);
});

app.post("/usuarios", async function(req, res) {
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/usuarios/:id", async function(req, res) {
  var resultado = usuario.update(req.body, { where: { id: req.params.id } });
  res.json(resultado);
});

app.delete("/usuarios", async function(req, res) {
  usuario.destroy({ where: { id: 1 } });
});

// rotas empresas

app.get("/empresas", async function(req, res) {
  var resultado = await empresa.findAll();
  res.json(resultado);
});

app.get("/empresas/:id", async function(req, res) {
  var resultado = await empresa.findByPk(req.params.id);
  res.json(resultado);
});

app.post("/empresas", async function(req, res) {
  var resultado = empresa.create(req.body);
  res.json(resultado);
});

app.put("/empresas/:id", async function(req, res) {
  var resultado = empresa.update(req.body, { where: { id: req.params.id } });
  res.json(resultado);
});

app.delete("/empresas", async function(req, res) {
  empresa.destroy({ where: { id: 1 } });
});

app.listen(3000, function() {
  console.log("Servidor esta funcionando");
});

