console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

// MongDB chaqirish
const db = require("./server").db();

// MongoDB connect

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 Kirish codlari

// Har qanday browserdan kelayotgan requestlar uchun public folder ochiq degani
app.use(express.static("public"));

//json formatdagi data ni objectga exchage qilish
app.use(express.json());

// html formdan qabul qilinadigan data larni serverga kiritish uchun
app.use(express.urlencoded({ extended: true }));

//2 Session codlari

//3 Views codelari
//BSSR
// ejs orqali backend ni ichida frontend ni yashash
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success ! " });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
  // res.end(`<h1 style="color:green">hello world</h1>`);
});
app.get("/gift", function (req, res) {
  res.end(`<h1 style="color:green">You are in gifts section </h1>`);
});

module.exports = app;
