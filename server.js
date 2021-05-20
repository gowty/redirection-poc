//=============================================================================
//                       <--- Developed By Icon Team --->
//=============================================================================

// npm packages
let express = require("express");
let bodyParser = require("body-parser");

let app = express();
let path = require("path");

app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/redirect", function (req, res) {
  console.log({ b: req.body });
  if (req.body.type === "Enroll") {
    return res.redirect("https://www.qinnow.com");
  }
  if (req.body.type === "Transfer") {
    return res.redirect("https://sportsmadeez.com");
  }
});

// creating static server
app.listen({ port: 8000 }, () => {
  console.log("Henry Schein server started => (8000) production");
});
