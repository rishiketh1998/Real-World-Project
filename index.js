let express = require("express");
let app = express();
let bodyParser = require("body-parser");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/",function(req, res){
    res.render("home.ejs")
});



app.get("/teacher-login",function(req,res){
    res.render("teacher-login"); 
    
});



app.get("/student-login",function(req,res){
    res.render("student-login"); 
    
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server has started");
});
