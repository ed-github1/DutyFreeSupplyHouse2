import app from './app.js'
import { PORT } from './config.js'
import connectDB from './db.js'

connectDB()


app.listen()
console.log('Server Running on', PORT)
