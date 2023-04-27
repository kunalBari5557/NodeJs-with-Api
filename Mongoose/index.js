//As per operation you can run query remove function comment 

const mongoose = require("mongoose");
const saveInDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
  const ProductModel = mongoose.model("product", ProductSchema);
  let data = new ProductModel({
    name: "m8",
    price: 8000,
    brand: "xyz",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

// saveInDB();

const updateInDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
  const Products = mongoose.model("products", ProductSchema);
  let data = await Products.updateMany(
    { name: "m8" },
    { $set: { price: 7500, name:'max8' } }
  );
  console.log(data);
};

// updateInDB();

const deleteInDB =async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
      name: String,
      price: Number,
      brand: String,
      category: String,
    });
    const Products = mongoose.model("products", ProductSchema);
    let data = await Products.deleteOne({price:'7500'});
    console.log(data);
}

// deleteInDB()

const findInDB =async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
      name: String,
      price: Number,
      brand: String,
      category: String,
    });
    const Products = mongoose.model("products", ProductSchema);
    let data = await Products.find();
    console.log(data);
}

findInDB()
