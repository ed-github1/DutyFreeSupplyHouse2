import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import productsRouter from './routes/product.routes.js'
import authRouter from './routes/auth.routes.js'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
// imgUrl path
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static('dist'))

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/public', express.static(`${__dirname}/storage/imgs`))
app.use('/api', authRouter)
app.use('/api', productsRouter)

export default app
