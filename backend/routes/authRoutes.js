import express from 'express'
import { register, login, getCurrentUser } from '../controllers/authController.js'
import { uploadProfileImage } from '../middleware/upload.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/register', uploadProfileImage, register)
router.post('/login', login)
router.get('/me', authMiddleware, getCurrentUser)

export default router
