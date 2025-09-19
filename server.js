// Task 2 
console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) =>{
    if(err) {
      console.log("ERROR:", err);
    } else {
    user = JSON.parse(data)
    }
 });

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get('/author', (req, res) => {
    res.render("author",{user: user});
});

app.get("/", function (req, res) {
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});




































// //Task 1

// console.log("Web Serverni boshlash");
// const express = require("express");
// const app = express();
// const http = require("http");

// // 1

// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// // 2: session

// // 3

// app.set("views", "wievs");
// app.set("views engine", "ejs");

// // 4

// app.get("/hello", function(req, res){
//     res.end(`<h1 style="background:red">HELLO WORLD = SALOM DUNYO</h1>`);
// });

// app.get("/gift", function(req, res){
//     res.end(`<h1 style="background:red">Siz sovgalar bolimidasiz</h1>`);
// });

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function(){
//     console.log(`the server is running successfully on port ${PORT}`);
// });
