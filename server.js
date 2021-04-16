//barebones of an express server
const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>hello</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: maltpearl@gmail.com");
});
app.get("/about", function (req, res) {
  res.send("hey this is an about me section on this page");
});
app.get("/hobbies", function (req, res) {
  res.send(
    "my hobbies include being cute, painting watercolor, and eating snacks"
  );
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
