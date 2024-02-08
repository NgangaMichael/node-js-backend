import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useUnifiedTopology: true
        });
        console.log('Connected to DB');
    } catch (err) {
        console.error('Error connecting to DB', err);
    }
};

export default connectToDatabase;