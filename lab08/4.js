const express = require('express');

const app = express();

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/',(req,res)=>{
    res.send('Successful resposnse\nGo to: http://localhost:3000/login');
});

const port = 3000;
app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/verify', urlencodedParser,(req, res) => {
    const { username, password } = req.body;
    // res.send(`<h2>Login Successful${username} ${password}</h2>`);
    if(username=="ravindu" && password=="1234"){
        res.send(`<h2>Login Successful</h2>`);
    }
    else{
        res.send(`<h2>Login Unuccessful</h2>`);
    }
    

  });

