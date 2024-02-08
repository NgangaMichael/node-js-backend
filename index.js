const express = require('express')
const app = express()
const dotenv = require('dotenv')
const dbSetup = require('./database/dbSetup')
const userRoute = require('./routes/userRoutes')

dotenv.config();
dbSetup()
app.use(express.json())
app.use(userRoute)

app.listen(process.env.API_PORT, () => {
    console.log('listening on port ' + process.env.API_PORT)
})