const express=require("express");
const bodyParser=require("body-parser");



const app=express();

app.get("/",function(req,res){
// res.send("hello");
var today=new Date();
if(today.getDay()===6 || today.getDay()===0)
res.send("hey,it's a weeekend");

else{
    res.sendFile(__dirname+"/index.html");
}

});



app.listen(3000,function(){
    console.log("server is running on port 3000");
})