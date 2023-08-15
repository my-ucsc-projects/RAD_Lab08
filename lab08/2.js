const express = require('express');

const app = express();

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/',(req,res)=>{
    res.send('Successful resposnse\nGo to: http://localhost:3000/register');
});

app.get('/greet/Jhon',(req,res)=>{
    res.send('Hello, John!');
});

const port = 3000;
app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.post('/successful', urlencodedParser,(req, res) => {
    const { name, email, password } = req.body;
    res.send(`
      <h2>Registration Successful</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Password: ${password}<p>
    `);
  });

// const express = require("express");
// var bodyParser = require("body-parser");

// const app = express();

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get("/register", (req, res) => {
//   res.sendFile(__dirname + "\\register.html");
// });
// app.post("/success", urlencodedParser, (req, res) => {
//   res.send(`Username:${req.body.username}<br/>
//   password : ${req.body.password}<br/>
//   email : ${req.body.email}<br/>
//   `);
// });

// app.listen("8080");
