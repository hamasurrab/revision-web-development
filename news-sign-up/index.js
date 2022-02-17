const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");



const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});



app.post("/",function(req,res){
    
    
    var name=req.body.Name;
    var Email=req.body.email;
    var Password=req.body.password; 

    if(res.statusCode===200){
        res.sendFile(__dirname+"/success.html");
    }
    else{
        res.sendFile(__dirname+"/failure.html");
    }

console.log(name,Email,Password);
});

app.listen(3000,function(){
    console.log("server is runnning on port 3000");
});



//apikey=8aad6e16be637a0ed2d4dc9f4ddf9ae1-us5

//audience id=4d33a30303