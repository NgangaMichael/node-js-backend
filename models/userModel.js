// userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    age: Number,
    gender: String,
    country: String,
    email: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
