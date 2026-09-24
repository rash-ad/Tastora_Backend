import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("URI:", process.env.Mongo_DB_URI);

        const connectIoInstance = await mongoose.connect(
            process.env.Mongo_DB_URI
        );

        console.log(
            "\nMongoDB connected successfully...\nHost: ",
            connectIoInstance.connection.host
        );

    } catch (error) {
        console.log("\nMongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;