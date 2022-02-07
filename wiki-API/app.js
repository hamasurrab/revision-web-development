const express =require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");



const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema={
    tittle:String,
    content:String
};

const Article=mongoose.model("Article",articleSchema);

app.route("/articles").get(function(req,res){
    Article.find(function(err,foundArticles){
        if(!err){
           res.send(foundArticles); 
        }
    else{
        res.send(err);
    }
});
})

.post(function(req,res){
    const newArticle=new Article({
        tittle:req.body.tittle,
        content:req.body.content
    });
        newArticle.save(function(err){
            if(!err){
                res.send("successfully added new article");
            }
            else{
                res.send(err);
            }
       
    });
})

.delete(function(req,res){
    Article.deleteMany(function(err){
        if(!err){
            res.send("successfully deleted all articles");
        }
        else{
            res.send(err);
        }
    });
});


app.route("/articles/:articleTittle")
.get(function(req,res){
    Article.findOne({tittle:req.params.articleTittle},function(err,foundArticle){
        if(foundArticle){
            res.send(foundArticle);
        }
        else{
            res.send("no article matching that tittle was found");
        }
    });
})



.put(function(req,res){
    Article.update(
        {tittle:req.params.articleTittle},
        {tittle:req.body.tittle, content:req.body.content},
        {overwrite:true},
        function(err){
            if(!err){
                res.send("successfully updated");
            }
        }
    );
})


.patch(function(req,res){
    Article.update(
        {tittle:req.params.articleTittle},
        {$set:req.body},
        function(err){
            if(!err){
                res.send("successfully updated articles");
            }
            else{
                res.send(err);
            }
        }
    );
})



.delete(function(req,res){
    Article.deleteOne(
        {tittle:req.params.articleTittle},
        function(err){
            if(!err){
                res.send("successfully deleted article");
            }
            else{
                res.send(err);
            }
        }
);
});


app.listen(3000,function(req,res){
    console.log("port is running on port 3000");
});
  



