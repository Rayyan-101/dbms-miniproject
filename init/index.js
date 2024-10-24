const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js")

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/product_catalog");
}

const initDB=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj, owner:'66eb02cf4ee63d6b2c63e775'}));
    await Listing.insertMany(initData.data);
    console.log("data inserted successfully");
}

initDB();