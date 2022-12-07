import express from "express";
import mysql from "mysql";
const cors = require("cors");
const corsOptions ={
   origin:'*',
   credentials:true,            
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) 

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
  host: "mogo", //localhost
  user: "id19957532_mogo_user", //root
  password: "vq84qe|(t5iFKgUn", //""
  database: "id19957532_mogo", //test
});

let insert = "INSERT INTO messages (name,email,message)  VALUES (?,?,?)";

app.post("/send", (req, res) => {
  const uname = req.body.uname;
  const email = req.body.email;
  const message = req.body.message;
  console.log(req.port);
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

app.get("/send", (req, res) => {
  res.send("it's running");
  res.end();
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
