const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const port = 5000

// DB Connect
require('./config/db.config')

// Router
require('./routes/product.routes')(app)

app.listen(port, () => console.log(`Server is running on port: ${port}`))
