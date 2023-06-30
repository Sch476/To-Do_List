//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Water Plants", "Go for a Run", "Come Back"];

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');

app.use(express.static("public"));

app.get("/", function(req, res){
  var today=new Date();
  var currentDay=today.getDay();
  
  var options= {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day=today.toLocaleDateString("en-US",options);
  res.render("list",{
    dk: day, nli: items
  });
  
});

app.post("/",function(req,res){
  items.push(req.body.newItem);
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});