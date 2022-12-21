

const express = require("express");
const bodyParser =  require("body-parser");

const request = require("request");


const app = express();



app.listen(2000, function () {
    
    console.log("app is runninig on port 2000");
})

app.get("/" , function(req, res) 

{
res.sendFile(__dirname + "/signup.html");

}
)

app.post("/" , function (req,res) {


    
})