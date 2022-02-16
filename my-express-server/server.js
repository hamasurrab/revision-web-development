const express=require("express");
const app=express();



app.get("/",function(req,res){
    res.send("hello world! what's goin on??");
});

app.get("/contact",function(req,res){
    res.send("contact me at hamschaudhary1154@gmail.com");
});



app.get("/about",function(req,res){
    res.send("<h1>hey i am the student of btech cse from iimt college of engineering from meerut</h1>");
});

app.listen(3000,function(){
    console.log("port is running on 3000");
});