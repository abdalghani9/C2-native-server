const express = require("express");

const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

let insert = "INSERT INTO messages (name,email,message)  VALUES (?,?,?)";

app.get("/send", (req, res) => {
  res.end("Server is on");
});

app.post("/send", (req, res) => {
  const uname = req.body.uname;
  const email = req.body.email;
  const message = req.body.message;

  db.query(insert, [uname, email, message], (err, result) => {
    if (err) throw err;
  });
});

app.listen(3001, () => {
  console.log("server is running");
});
