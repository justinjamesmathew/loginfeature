const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use('/static',express.static(path.join(__dirname,'public')));
app.get('/', (req,res)=> {
    res.render('base', {title:"login system"});
})
app.listen(port,()=> {console.log("listening at port 3000")});