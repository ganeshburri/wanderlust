if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.js");

main()
    .then((res)=>{
    console.log("Connected to DB");
    })
    .catch((err)=>{
    console.log("Unable to connect DB");
});

async function main(){
    await mongoose.connect(process.env.ATLASDB_URL);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map(
        (obj)=>({...obj, owner: "6677c7487931d8ebe0c665bc", geometry:{ type: "Point", coordinates: [78.312,15.324] } }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();