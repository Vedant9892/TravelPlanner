import express from 'express'
import { createPlan, getPlan } from '../controllers/planController.js'

const router = express.Router()

router.post('/', createPlan)
router.get('/:id', getPlan)

export default router
