import mongoose from "mongoose";

const connectDatabase = async () => {
    mongoose.connection.on('connected', () => {
        console.log('Database connection established');
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
}

export default connectDatabase;