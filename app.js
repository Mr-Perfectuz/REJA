console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

// MongDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

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
  console.log("user entered /create-item ");
  const new_reja = req.body.reja;
  console.log(new_reja);
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     res.end("Something went wrong");
    //   } else {
    //     res.end("Successfully added");
    //   }
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

// DELETE
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

// Edit item
app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {
      id: new mongodb.ObjectId(data.id),
    },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

// Delete all items

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
});

// author

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered / ");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });

  // res.end(`<h1 style="color:green">hello world</h1>`);
});
app.get("/gift", function (req, res) {
  res.end(`<h1 style="color:green">You are in gifts section </h1>`);
});

module.exports = app;
