import express from 'express'
import { register, login } from '../controllers/authController.js'
import { uploadProfileImage } from '../middleware/upload.js'

const router = express.Router()

router.post('/register', uploadProfileImage, register)
router.post('/login', login)

export default router
