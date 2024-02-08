import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectToDatabase from './database/dbSetup.js'
import {userRoute} from './routes/userRoutes.js';

dotenv.config();
connectToDatabase()
app.use(express.json())
app.use(userRoute)

app.listen(process.env.API_PORT, () => {
    console.log('listening on port ' + process.env.API_PORT)
})