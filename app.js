const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("<h2>Привет Express!!!</h2>");
  console.log("Сервер запущен");
});

app.listen(4000);
