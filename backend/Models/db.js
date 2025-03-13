import mongoose from "mongoose";
const mongo_url =process.env.MONGO_CONN;
mongoose.connect(mongo_url)
    .then(()=>{
        console.log('MongoDb connected');
        }).catch((err)=>{
            console.log('MongoDB Connection Error: ',err);
        })
        
