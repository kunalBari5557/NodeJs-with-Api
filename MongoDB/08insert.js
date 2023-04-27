const dbConnect = require("./06mongoDbConnect");

const insert = async () => {
  const db = await dbConnect();
  const result = db.insertOne({
    name: "max 9",
    brand: "micromax",
    price: 920,
    category: "mobile",
  });
};

insert();
