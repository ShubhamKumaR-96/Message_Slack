import User from '../schema/user.js';
import crudRepository from './crudRepository.js';

const userRepository = {
  ...crudRepository(User),

  getUserByEmail: async (email) => {
    const user = await User.findOne({ email });
    return user;
  },
  getUserByName: async (name) => {
    const user = await User.findOne({ username: name }).select('-password') // exclude password
    return user;
  }
};

export default userRepository;

// export const createUser=async(user)=>{
//     const newUser=await User.create(user)
//     return newUser
// }

// export const getUsers=async()=>{
//     const users=await User.find()
//     return users
// }

// export const getUserById=async(id)=>{
//     const user=await User.findById(id)
//     return user
// }
// export const deleteUser=async(id)=>{
//     const user=await User.findByIdAndDelete(id)
//     return user
// }

// export const updateUser=async(id,user)=>{
//     const response=await User.findByIdAndUpdate(id,user,{new:true})
//     return response
// }
