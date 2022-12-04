import express from "express";
import cors from "cors";
import mysql from "mysql";
// import "./GrantAccess";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "mogo", //localhost
  user: "id19957532_mogo_user", //root
  password: "vq84qe|(t5iFKgUn", //""
  database: "id19957532_mogo", //test
});

let insert = "INSERT INTO messages (name,email,message)  VALUES (?,?,?)";

// app.get("/send", (req, res) => {
//   res.send("Welcome to send page");
//   res.end();
// });

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
