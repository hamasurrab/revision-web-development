const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewurlParser:true});

const fruitSchema= new mongoose.Schema({
  name: String,
  rating: Number,
  reviews: String
});

const Fruit= mongoose.model("Fruit",fruitSchema);
const fruit=new Fruit({
  name:"apple",
  rating:7,
  reviews:"amazing"
});

// fruit.save();



// ____________________________adding new schema______________
const personSchema=new mongoose.Schema({
  name:String,
  age:Number
});


// __adding model__

const Person = mongoose.model("Person", personSchema);
const person=new Person({
  name:"john",
  age:"37"
});

person.save();


// ____________adding more fruits_________

const kiwi =new Fruit({
  name:"kiwi",
  score:10,
  review:"gr8"
});

const orange =new Fruit({
  name:"orange",
  score:78,
  review:"hmm good"
});


const banana =new Fruit({
  name:"banana",
  score:6,
  review:"enegetic"
});


// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("successful");
//   }
// });





Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }
  else{
    // console.log(fruits);
    mongoose.connection.close();
  fruits.forEach(function(fruits){
    console.log(fruit.name);
  });
}


  
});