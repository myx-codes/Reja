console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: session

// 3

app.set("views", "wievs");
app.set("views engine", "ejs");

// 4

app.get("/hello", function(req, res){
    res.end(`<h1 style="background:red">HELLO WORLD = SALOM DUNYO</h1>`);
});

app.get("/gift", function(req, res){
    res.end(`<h1 style="background:red">Siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`the server is running successfully on port ${PORT}`);
});
