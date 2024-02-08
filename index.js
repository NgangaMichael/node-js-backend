import express from 'express';
import dotenv from 'dotenv';
import DatabaseConnection from './database/dbSetup.js';
import { userRoute } from './routes/userRoutes.js';

dotenv.config();

const dbConnection = new DatabaseConnection(process.env.DB_CONNECTION);

async function startServer() {
    try {
        await dbConnection.connect();
        const app = express();

        app.use(express.json());
        app.use(userRoute);

        app.listen(process.env.API_PORT, () => {
            console.log('Listening on port ' + process.env.API_PORT);
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the application if the database connection fails
    }
}

startServer();