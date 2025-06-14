import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3001;

export const NODE_ENV=process.env.NODE_ENV || 'development'

export const DEV_DB_URL=process.env.DEV_DB_URL;

export const PROD_DB_URL=process.env.PROD_DB_URL

export const JWT_SCERET=process.env.JWT_SCERET

export const JWT_EXPIRTY=process.envJWT_EXPIRTY || '1d'
