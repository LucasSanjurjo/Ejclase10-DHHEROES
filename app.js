const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/home',(req ,res) =>{
    let htmlPath = path.join(__dirname, '/views/index.html');
    res.sendFile(htmlPath);
});

app.get('/lovelace',(req ,res) =>{
    let htmlPath = path.join(__dirname, '/views/lovelace.html');
    res.sendFile(htmlPath);
});

app.get('/turing',(req ,res) =>{
    let htmlPath = path.join(__dirname, '/views/turing.html');
    res.sendFile(htmlPath);
});

app.get('/hopper',(req ,res) =>{
    let htmlPath = path.join(__dirname, '/views/hopper.html');
    res.sendFile(htmlPath);
});

app.get('/hamilton',(req ,res) =>{
    let htmlPath = path.join(__dirname, '/views/hamilton.html');
    res.sendFile(htmlPath);
});

app.get('/clarke',(req ,res) =>{
    let htmlPath = path.join(__dirname, '/views/clarke.html');
    res.sendFile(htmlPath);
});

app.get('/berners-lee',(req ,res) =>{
    let htmlPath = path.join(__dirname, '/views/berners-lee.html');
    res.sendFile(htmlPath);
});

app.get('/babbage',(req ,res) =>{
    let htmlPath = path.join(__dirname, '/views/babbage.html');
    res.sendFile(htmlPath);
});



app.listen(3030, () => console.log('Levantando un servidor con Express'));
