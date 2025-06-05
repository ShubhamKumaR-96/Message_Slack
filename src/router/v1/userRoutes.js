import express from 'express'
import { StatusCodes } from 'http-status-codes';

const router=express.Router()

router.use('/',(req,res)=>{
    return res.status(StatusCodes.OK).json({msg:"get/users"})
})

export default router;