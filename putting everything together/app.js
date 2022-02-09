//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// __
const mongoose=require("mongoose");


//_____delete
// const date = require(__dirname + "/date.js");



const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


//_____________delete
// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];


// __
mongoose.connect("mongodb://localhost:27017/todolistDB");


// ____adding schema

const itemsSchema={
    name:String
};

//___________mongoose model
const Item= mongoose.model("Item",itemsSchema);



//_____mongoose document

const item1=new Item({
name:"welcome to your todolist"
    });

    const item2=new Item({
        name:"hit the +button to add new item."
            });

            const item3=new Item({
                name:"hit this to delete an item."
                    });


const defaultItems=[item1,item2,item3];



app.get("/", function(req, res) {




  //___delete
// const day = date.getDate();


//_________find method (rendering database item)

Item.find({},function(err,foundItems){
if(foundItems.length===0){
    Item.insertMany(defaultItems,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("successful");
    }
});
res.redirect("/");
}
else{
 res.render("list", {listTitle: "Today", newListItems: foundItems});
}
   
   
});



});

app.post("/", function(req, res){

  const itemName = req.body.newItem;

  const item=new Item({
      name:itemName
  });


  item.save();
  res.redirect("/");


  app.post("/delete",function(req,res){
      console.log(req.body.checkbox);
  });

//   if (req.body.list === "Work") {
//     workItems.push(item);
//     res.redirect("/work");
//   } else {
//     items.push(item);
//     res.redirect("/");
//   }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
