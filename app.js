const express = require("express");
const path = require("path");

const app = express();

app.listen(process.env.PORT || 3000, console.log("Server running port 3000"));
app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/ingresa", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.get("*", (req, res) => {
  res.send("Esta Pagina no existe");
});
