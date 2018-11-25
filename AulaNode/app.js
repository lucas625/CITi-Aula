const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const items = [];
const path = require('path');//serve para acessar path das coisas
const firebase = require('firebase');
const apiProvider = require('./api/api');
firebase.initializeApp({
        apiKey: "AIzaSyBmdRAAIQW3cBiEM1jjKRZmI_Xpn3kb8f8",
        authDomain: "aula-node.firebaseapp.com",
        databaseURL: "https://aula-node.firebaseio.com",
        projectId: "aula-node",
        storageBucket: "aula-node.appspot.com",
        messagingSenderId: "1074672112329"
});

const db = firebase.database();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const user={nome: "lucas", idade: 21};

app.get('/', (req,res) =>{
    console.log(req.query);//envia info do front pro back, separe-as por &. ?nome=lucas
    res.send(JSON.stringify(user));
});
/*
app.get('/:name', (req, res)=>{
    res.send(req.params.name);//manda para a página, fazendo a ligação também, mas é só por o / dps tals
});
*/
app.use('/views', express.static(path.join(__dirname, 'views')));

app.get('/home', (req,res) =>{
    res.sendFile(path.join(__dirname + "/views/home.html"));//linka com o html
});

app.post('/add_item', (req,res) =>{
    items.push(req.body.item);
    console.log(items);
    res.redirect('/home');
});

app.use('/api', apiProvider)

app.listen(process.env.PORT || 3000, ()=>{ // inicia o server no pc
    console.log('Ready');
});

app.get('/get_items', (req, res) =>{
    const response = [];
    db.ref('/items').once('value', (snapshot)=>{
        snapshot.forEach((snap) => {
            response.push(snap.val());
        });
        res.send(JSON.stringify(response));
    });
});