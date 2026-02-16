import multer from 'multer'

// Store file in memory (no disk). Field name must be "profileImage".
const storage = multer.memoryStorage()
export const uploadProfileImage = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
}).single('profileImage')
