import jwt from 'jsonwebtoken'
import { SECRET } from '../config.js'

export const authRequire  = (req, res, next) => {
  const { token } = req.cookies
  if (!token)
    return res.status(401).json({ message: 'token was not provided, authorization denied' })

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'invalid token' })
    req.user = user
    next()
  })
}
