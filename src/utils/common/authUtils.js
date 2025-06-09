import jwt from 'jsonwebtoken'
import { JWT_EXPIRTY, JWT_SCERET } from '../../Config/ServerConfig.js'

export const createJWT=(payload)=>{
    return jwt.sign(payload,JWT_SCERET,{
        expiresIn:JWT_EXPIRTY
    })
}