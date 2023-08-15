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

app.use(function (req, res, next) {
    const routes = ['/greet', '/api/register', '/api/login', '/api/math'];

    if (routes.includes(req.path)) return next();

    return res.redirect('/404.html');
});
