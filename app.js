// const sync = require('./models/sync')
// sync()

const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config()
const port = process.env.PORT || 3001
const app = express()
const authRouter = require('./routes/authRouter')
const checkAuth = require('./routes/authorization')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/posts', checkAuth)
app.use('/member', authRouter)

app.listen(port)