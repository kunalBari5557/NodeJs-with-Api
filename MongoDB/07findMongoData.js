const dbConnect = require("./06mongoDbConnect");

//type 1 You can try for find data
// dbConnection().then((resp)=>{
// resp.find().toArray().then((data)=>{
//     console.log(data)
// })
// })

//type 2 You can try for find data
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};

main();
