const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/training_db', {
        useNewUrlParser: true,
    })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDb error', err))
