const express = require('express');
const path = require('path');
const session = require('express-session');
const {v4:uuidv4} = require ('uuid');
const router = require('./router');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());


app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized: true
}));

app.use('/static',express.static(path.join(__dirname,'public')));

app.use('/route',router);
app.get('/', (req,res)=> {
    res.render('base', {title:"login system"});
});

app.listen(port,()=> {console.log("listening at port 3000")});