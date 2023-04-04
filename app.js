const express = require("express");
const rookout = require('rookout')
rookout.start({ 
    token: '611da17334e54f86fadb1b93971e2f201fb8237d1bfe8106d49e181ab8a591f8',
    labels: {
        env: 'dev'
    }
}).then(/*Start your application here*/)

const app = express();
app.set('view engine','ejs');
app.use(express.static("public"));
var items= ["Node.js Containers","Debug with Rookout"];
let todoItems = [];

 app.get("/",(req,res)=>{
    res.send("list",{newListItems: items});
 });

 app.post("/",(req,res)=>{

    item = req.newItem;

    if(req.list==="todo"){
        todoItems.push(item);
        res.redirect("/todo");
    }  
    else{
        items.push(item);
        res.redirect("/");
    }

});

app.listen(8080,()=>{
    console.log("Server running on port 8080");
});