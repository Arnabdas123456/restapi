const mongoose = require("mongoose");
const URI = 'mongodb://your connection(Local Host)/your DB name';

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
