var express = require('express');
var router = express.Router();
const credential = {
    email:'justin@gmail.com',
    password:'password'

};
router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){

        req.session.user = req.body.email;
        //res.redirect('/dashboard');
        console.log(req.body.email);
        res.end("login successful");
        
    }
    else{
        console.log(req.body.email);
        res.end('Invalid username or password');
    }
});
module.exports = router;
