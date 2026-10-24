const fs = require('fs');
const express = require("express");
const app = express();
const port = 8000 ;
const path = require('path') 
    

    app.get('/' , (req , res)=>{
            res.sendFile(path.join(__dirname , 'viwes' , './Home.html'))
    })
    app.get('/about' , (req , res)=>{
        res.sendFile(path.join(__dirname , 'viwes' , './About.html' ))
    })
    app.get('/contect' , (req , res)=>{
        res.sendFile(path.join(__dirname , 'viwes' ,'./Contect.html'))
    })

    app.listen(port , (err)=>{
        err ? console.log(err) : console.log('server is start on the port :',port);;
        
    }) 