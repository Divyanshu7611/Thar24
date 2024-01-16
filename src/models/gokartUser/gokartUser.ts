import mongoose from 'mongoose'

const gokartUserSchema = new mongoose.Schema({
  captainID: String,
  membersId: Array,
  teamName: String,
})

const GoKartUser = mongoose.models.robowarusers || mongoose.model('gokartUser', gokartUserSchema)
export default GoKartUser
