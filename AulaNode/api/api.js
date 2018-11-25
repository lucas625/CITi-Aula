const express =  require('express');
const app = express();

//routes

app.get('/', (req,res)=>{
    res.send('api');
});

module.exports = app;//quem quiser vai ter acesso, esse app no caso seria a const