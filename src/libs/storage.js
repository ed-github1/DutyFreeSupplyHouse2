import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/storage/imgs')
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.png`)
  }
})

const upload = multer({ storage })

export default upload