import { StatusCodes } from 'http-status-codes';
import { signUpService } from '../services/userService.js';
import { customErrorResponse, internalErrorResponse, successResponse } from '../utils/common/responseObjects.js';

export const signup = async (req, res) => {
  try {
    const user = await signUpService(req.body);

    return res
      .status(StatusCodes.CREATED)
      .json(successResponse(user, 'user created successfully'));
  } catch (error) {
    console.log('user controller error',error)
    if (error.statusCode){
        return res.status(error.statusCode).json(customErrorResponse(error))
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error))
  }
};
