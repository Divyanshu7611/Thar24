import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  tharID: String,
  name: String,
  email: String,
  image: String,
  gender: String,
  age: String,
  caRegistered: Boolean,
  userRegistered: Boolean,
  isMunRegistered: Boolean,
  isRoboWarRegistered: Boolean,
  isRcNitroRegistered: Boolean,
  isGoKartRegistered: Boolean,
})

const User = mongoose.models.users || mongoose.model('users', userSchema)
export default User
