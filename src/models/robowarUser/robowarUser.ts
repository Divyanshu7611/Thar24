import mongoose from 'mongoose'

const roboWarUserSchema = new mongoose.Schema({
  captainID: String,
  membersId: Array,
  teamName: String,
})

const RoboWarUser = mongoose.models.robowarusers || mongoose.model('robowarusers', roboWarUserSchema)
export default RoboWarUser
