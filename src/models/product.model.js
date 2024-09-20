import mongoose from 'mongoose'
import { PORT } from '../config.js'
import { APP_HOST } from '../config.js'

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  imgUrl: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

productSchema.methods.setImageUrl = function setImgUrl(filename) {
  this.imgUrl = `${APP_HOST}:${PORT}/public/${filename}`
}
export default mongoose.model('Product', productSchema)
