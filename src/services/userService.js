import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository';
import clientError from '../utils/errors/clientError';
import ValidationError from '../utils/errors/validationsError';
import { createJWT } from '../utils/common/authUtils';

export const signUpService = async (data) => {
  try {
    const newUser = await userRepository.create(data);
    return newUser;
  } catch (error) {
    console.log('User service error', error);
    if (error.name === 'ValidationError') {
      throw new ValidationError({ error: error.errors }, error.message);
    }
    if (error.name === 'MongoServerError' && error.code === 11000) {
      throw new ValidationError(
        { error: ['A user with same email or username already exits'] },
        'A user with same email or username already exits'
      );
    }
  }
};

export const signinService = async (data) => {
  try {
    const user = await userRepository.getUserByEmail(data.email);

    if (!user) {
      throw new clientError({
        explanation: 'Invalid data sent from the client',
        message: 'No registered user found with this email',
        statusCode: StatusCodes.NOT_FOUND
      });
    }

    const isMatch = bcrypt.compareSync(data.password, user.password);

    if (!isMatch) {
      throw new Error({
        explanation: 'Invalid data sent from the client',
        message: 'Invalid password, please try again',
        statusCode: StatusCodes.BAD_REQUEST
      });
    }
    return {
      username:user.username,
      avatar:user.avatar,
      email:user.email,
      token:createJWT({id:user._id,email:user.email})
    }
  } catch (error) {
    console.log('User service error',error)
    throw error
  }
};
