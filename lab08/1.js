const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Successful resposnse\nGo to: http://localhost:3000/greet/Jhon');
});

app.get('/greet/Jhon',(req,res)=>{
    res.send('Hello, John!');
});

const port = 3000;
app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    res.send(`
      <h2>Registration Successful</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Password: ${password}</p>
    `);
  });