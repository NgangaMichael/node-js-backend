const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(process.env.DB_CONNECTION, {
        useUnifiedTopology: true

    })
    .then(res => console.log('Connected to DB'))
    .catch(err => console.log('Error connecting to DB', err))
}