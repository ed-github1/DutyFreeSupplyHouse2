import { Router } from 'express'
import upload from '../libs/storage.js'
import { authRequire } from '../middlewares/validateToken.js'
import {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct
} from '../controllers/products.controller.js'

const router = Router()

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.post('/products', authRequire, upload.single('image'), createProduct)
router.delete('/products/:id', authRequire, deleteProduct)
router.put('/products/:id', authRequire, updateProduct)

export default router
