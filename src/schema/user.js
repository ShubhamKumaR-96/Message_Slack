import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email already exits '],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address'
      ]
    },
    password: { type: String, required: [true, 'Password is required'] },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: [true, 'Username already exits'],
      match: [
        /^[a-zA-Z0-9]+$/,
        'Username must contain only letters and numbers'
      ]
    },
    avatar:{type:String}
  },
  { timestamps: true }
);

userSchema.pre("save",function saveUser(next){
    const user=this;
    const SALT=bcrypt.genSaltSync(6)
    const hashedPassword=bcrypt.hashSync(user.password,SALT)
    user.password=hashedPassword
    user.avatar=`https://robohash.org/${user.username}`
    next()
})

const User = mongoose.model('User', userSchema);

export default User;
