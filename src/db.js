import mongoose from 'mongoose'
import { MONGODB_URI } from './config.js'

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('>>> DB IS CONNECTED <<<')
  } catch (error) {
    console.log('Error connecting to Mongo DB Atlas ')
  }
}

export default connectDB
