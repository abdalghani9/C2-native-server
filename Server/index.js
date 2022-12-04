const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

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

app.post("/send", (req, res) => {
  const uname = req.body.uname;
  const email = req.body.email;
  const message = req.body.message;

  db.query(insert, [uname, email, message], (err, result) => {
    if (err) throw err;
    if (result) {
      console.log(result);
      res.send(result);
    } else {
      console.log("no result");
    }
  });
});

app.listen(3001, () => {
  console.log("server is running");
});
