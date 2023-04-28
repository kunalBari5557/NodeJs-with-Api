const express = require("express");
const con = require("./config");
const app = express();

//get api
app.get("/", (req, resp) => {
  con.query("select * from users", (err, result) => {
    if (err) {
      resp.send("error");
    } else {
      resp.send(result);
    }
  });
  resp.send("route done");
});

//post api
app.use(express.json())
app.post("/", (req, resp) => {
    const data = req.body;//add data from postman
    con.query("INSERT INTO users SET ?", data, (error, result, fields) => {
      if (error) error;
      resp.send(result);
    });
//   resp.send("route ok");
});

//update api
app.put("/:id", (req, resp) => {
  const data=[req.body.name,req.body.password,req.body.user_type,req.params.id]
  con.query("UPDATE users SET name=?,password=?,user_type=? where id=?",data,(error,fields,result)=>{
    if (error) error;
      resp.send(result);
  })
});

//delete api
app.delete("/:id",(req,resp)=>{
  con.query("DELETE FROM users WHERE id="+req.params.id,(error,result,field)=>{
    if (error) error;
    resp.send(result);
  })
})

app.listen(5000);
