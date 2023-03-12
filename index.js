const express=require('express');
const app=express(); 
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.use(express.static('.'));
