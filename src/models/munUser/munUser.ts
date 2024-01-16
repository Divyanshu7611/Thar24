import mongoose from 'mongoose'

const munUserSchema = new mongoose.Schema({
  tharID: String,
  munCount: String,
  munWon: String,
})

const MunUser = mongoose.models.munusers || mongoose.model('munusers', munUserSchema)
export default MunUser
