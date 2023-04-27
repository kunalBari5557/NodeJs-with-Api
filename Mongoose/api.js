const express = require("express");
require("./config");
const Product = require("./product");

const app = express();

//Post api
app.use(express.json());
app.post("/create", async (req, resp) => {
  console.log(req.body);
  let data = new Product(req.body);
  let result = await data.save();
  resp.send(result);
});

//Get api
app.get("/list", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});

//Delete api
app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});

//Update api
app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Product.updateOne(req.params, {
    $set: req.body,
  });
  resp.send(data);
});

app.listen(5000);
