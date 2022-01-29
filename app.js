const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, console.log("Server running port 3000"));
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});
app.get("/ofertas", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/ofertas.html"));
});
app.get("/tiendas", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/tiendas.html"));
});
app.get("/vender", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/vender.html"));
});
app.get("/ayuda", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/ayuda.html"));
});
app.get("/ingresa", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/ingresa.html"));
});
app.get("/compras", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/compras.html"));
});
app.get("*", (req, res) => {
  res.send("Esta Pagina no existe");
});
