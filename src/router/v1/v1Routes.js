import express from 'express'
import userRouter from './userRoutes.js'

const router=express.Router()

router.use('/users',userRouter)

export default router;