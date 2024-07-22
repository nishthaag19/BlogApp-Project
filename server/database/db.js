import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
console.log("hello",process.env.DB);
const Connection = async (username, password) => {
    const URL =process.env.DB;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;