import { configDotenv } from 'dotenv'
configDotenv()

export const MONGODB_URI = process.env.MONGODB_URI
export const PORT = process.env.PORT
export const SECRET = process.env.SECRET
export const APP_HOST = process.env.APP_HOST

