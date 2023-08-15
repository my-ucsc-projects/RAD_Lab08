const express = require('express');

const app = express();

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/',(req,res)=>{
    res.send('Successful resposnse');
});

const port = 3000;
app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
});


app.get('/api/math', (req, res) => {
    const query = req.query;
    const num1 = Number(query.num1);
    const num2 = Number(query.num2);
    const operation = query.operation;
    let result;

    if (operation == 'add') result = num1 + num2;
    if (operation == 'subtract') result = num1 - num2;
    if (operation == 'multiply') result = num1 * num2;
    if (operation == 'divide') result = num1 / num2;

    return res.status(200).json({ result });
});

