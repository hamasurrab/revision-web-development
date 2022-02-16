const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});



app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;

    res.send("your result is "+result);
});

app.post("/bmi",function(req,res){
    var weight=Number(req.body.weight);
    var height=Number(req.body.height);
    var result=weight/(height*height);
res.send("your BMI is "+result);
});






app.listen(3000,function(){
    console.log("port is running on port on 3000");
});