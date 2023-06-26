import mongoose, { ConnectOptions, Error} from "mongoose";
import * as dotenv from "dotenv";

export const connectToDB = async() => {

    dotenv.config();

    try{
        await mongoose.connect(process.env.DB_CONN_STRING,{
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions).then(() =>{
            console.log(`Connection to Database: ${process.env.DB_NAME}`);
        }).catch((err: Error) =>{
            console.log("An error occurred while connecting to Database",err.message);
        })
    }catch(err){
        console.log(err)
    }
}

