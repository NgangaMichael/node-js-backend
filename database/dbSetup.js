import mongoose from 'mongoose';
class DatabaseConnection {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    async connect() {
        try {
            await mongoose.connect(this.dbConnection, {
                useUnifiedTopology: true
            });
            console.log('Connected to DB');
        } catch (err) {
            console.error('Error connecting to DB', err);
        }
    }
}

export default DatabaseConnection;
