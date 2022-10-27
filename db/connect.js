import mongoose from "mongoose";

const connectDb = () => {
    return mongoose.connect(process.env.MONGODB_URI)
}

export default connectDb