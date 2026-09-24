
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import dns from "dns";
import app from "./app.js";
dotenv.config();

dns.setServers(["1.1.1.1" , "8.8.8.8"]);
const startServer =async()=>{
    try{
        await connectDB();
       
        console.log( process.env.Mongo_DB_URI)

        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw  error;

        })
        app.listen(process.env.PORT|| 8000,()=>{
             console.log("\nServer is running on port " +
                 (process.env.PORT+"..." || 8000+"..."));
        })
    }
    catch(error){
            console.log(" Mongodb Connection failed...")
    }
}
startServer();