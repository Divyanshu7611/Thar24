import mongoose from 'mongoose'

const rcNitroUserSchema = new mongoose.Schema({
  captainID: String,
  membersId: Array,
  teamName: String,
})

const RcNitroUser = mongoose.models.rcnitrousers || mongoose.model('rcnitrousers', rcNitroUserSchema)
export default RcNitroUser
