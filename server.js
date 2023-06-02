const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello world</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: KerenMusenge1@gmail.com");
}); 

app.get("/about", function(req, res){
  res.send("My name is Keren and I love makeup!");
});

app.get("/Hobbies", function(req, res){
  res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});