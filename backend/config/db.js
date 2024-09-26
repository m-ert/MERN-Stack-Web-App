import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
}   catch{
        console.error(`Error: database connection failed`);
        process.exit(1); // 1 = failure
}
}

//        console.error(`Error: ${error.message}`);
