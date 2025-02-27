const mongoose = require("mongoose");
const URI = 'mongodb://127.0.0.1:27017/students_api';

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connection sucessful");
    } catch (err) {
        console.log("database connection failed");
        console.log(err.message);
        process.exit(0)
    }
}
connectDB();
