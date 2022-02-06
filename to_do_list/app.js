const express = require("express");
const bodyParser=require("body-parser");
const { redirect } = require("express/lib/response");


let items=["buy food","cook food","eat food"];
let workItems=[];
// const ejsLint = require('ejs-lint');



const app =express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get("/",function(req,res){
   
let today=new Date();
let Options = {
     weekday: 'long',
//  year: 'numeric', 
 month: 'short',
  day: 'numeric' };

let day=today.toLocaleDateString("en-US",Options);
// _________________________________________________________no need for this_____________________________________________________
// let currentDay=today.getDay();

// let day="";

// _______________________________________________________using(.toLocaledatestring)__________________________________________________________



// if(currentDay===6 || currentDay===0)
// {
//     // res.send("wow,it's a weekend");
//     day="weekend";
// } 
// else{
//     // res.send("it's weekdays");
//     day=weekdays;
// }

// _____________________________________________________________after using toLocaleDateString now no need of this
// switch (currentDay) {
//     case 0:
//         day="sunday";
//         break;
//         case 1:
//             day="monday";
//             break;
//             case 2:
//         day="tueday";
//         break;
//         case 3:
//         day="wednesday";
//         break;
//         case 4:
//         day="thursday";
//         break;
//         case 5:
//         day="friday";
//         break;
//         case 6:
//         day="saturday";
//         break;
//     default:
//         break;
// }


res.render("list",{listTittle:day, newListItem:items});


});


app.post("/",function(req,res){

let item=req.body.newItem;
// console.log(item);

if(req.body.list==="work"){
    workItems.push(item);
    res.redirect("/work");
}
else{
    items.push(item);
    res.redirect("/");
}

items.push(item);
res.redirect("/");

});




// ___________another root route________________________


app.get("/work",function(req,res){

res.render("list", {listTittle:"work List",newListItem:workItems});

});

app.post("/work",function(req,res){
    let item =req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});


app.get("/about",function(req,res){
    res.render("about");
});



app.listen(3000,function(){
    console.log("port is running on port 3000");
});