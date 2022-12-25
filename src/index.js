const express=require("express");
const bodyParser=require('body-parser');
const app=express();

const {PORT}=require('./config/server-config');

const setupAndStartServer=()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
            console.log(`Server started at ${PORT}`);
          })
}
setupAndStartServer();