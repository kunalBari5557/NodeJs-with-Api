const dbConnect = require("./06mongoDbConnect");

const updateData = async () => {
  let data = await dbConnect();
  let result = data.updateOne(
    { name: "max 9" },
    { $set: { name: "max 9 pro", price:555 } }
  );
  console.log(result);
};

updateData();
