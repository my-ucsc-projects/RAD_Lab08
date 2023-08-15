const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Successful resposnse');
});

const port = 3000;
app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
});

