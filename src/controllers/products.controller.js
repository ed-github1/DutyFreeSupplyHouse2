import Product from '../models/product.model.js'

export const createProduct = async (req, res) => {
  try {
    const { name, category, description } = req.body
    const product = new Product({
      name,
      category,
      description
    })

    if (req.file) {
      const { filename } = req.file
      product.setImageUrl(filename)
    }
    const productSaved = await product.save()
    res.json(201).json(productSaved)
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id)
  if (!product) return res.status(404).json({ message: 'product not found' })
  res.json(product)
}

export const updateProduct = async (req, res) => {}

export const getProducts = async (req, res) => {
  const products = await Product.find({})
  res.json(products)
}

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) return res.status(404).json({ message: 'product not found' })
  res.json(product)
}
