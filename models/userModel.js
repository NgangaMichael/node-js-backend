import mongoose from 'mongoose';
class User {
    constructor({ username, age, gender, country, email }) {
        this.username = username;
        this.age = age;
        this.gender = gender;
        this.country = country;
        this.email = email;
    }

    static createModel() {
        const userSchema = new mongoose.Schema({
            username: String,
            age: Number,
            gender: String,
            country: String,
            email: String,
        }, { timestamps: true });

        return mongoose.model('User', userSchema);
    }
}

export default User.createModel();
