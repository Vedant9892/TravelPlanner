import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'
import User from '../models/User.js'
import { supabase } from '../config/supabase.js'

const BUCKET = 'profile-images'
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-change-in-production'

// POST /api/auth/register
export async function register(req, res) {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email and password are required' })
    }

    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json({ error: 'Email already registered' })

    let profileImageUrl = null
    if (req.file && req.file.buffer) {
      const ext = req.file.originalname.split('.').pop() || 'jpg'
      const filename = `${uuidv4()}.${ext}`
      const { error } = await supabase.storage.from(BUCKET).upload(filename, req.file.buffer, {
        contentType: req.file.mimetype,
        upsert: false,
      })
      if (error) {
        return res.status(400).json({ error: 'Failed to upload image: ' + error.message })
      }
      const { data } = supabase.storage.from(BUCKET).getPublicUrl(filename)
      profileImageUrl = data.publicUrl
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profileImage: profileImageUrl,
    })

    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
      createdAt: user.createdAt,
    }
    res.status(201).json({ message: 'Registration successful', user: userResponse })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// POST /api/auth/login
export async function login(req, res) {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ error: 'Invalid email or password' })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(401).json({ error: 'Invalid email or password' })

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' })
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
      createdAt: user.createdAt,
    }
    res.json({ token, user: userResponse })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
