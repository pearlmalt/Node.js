const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email
        status: "subscribed"
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  };


const jsonData = JSON.stringify(data);
const url = "https://us1.api.mailchimp.com/3.0/lists/dd8316becd";

const options = {
  method: "POST",
  auth: "pearl:d67c4865933b975058333c43b69e9864-us1"
}
const request = https.request(url, options, function(response){

if (response.statusCode === 200) {
  res.sendFile(__dirname + "/success.html");
} else {
  res.sendFile(__dirname + "/failure.html");
}

  response.on("data", function(data){
    console.log(JSON.parse(data));
  });
});


request.end();

};

app.post("/failure", function(req, res){
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("3000000000");
});


// api key
// d67c4865933b975058333c43b69e9864-us1
//
// list id:
// dd8316becd
