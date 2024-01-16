import mongoose from 'mongoose'

const teamEventSchema = new mongoose.Schema({
  id: String,
  eventID: String,
  teamName: String,
  captainTharID: String,
  teamMembersTharID: Array,
  paymentStatus: {
    type: Boolean,
    default: false,
  },
})

const TeamRegistration = mongoose.models.eventRegistration || mongoose.model('eventRegistration', teamEventSchema)
export default TeamRegistration
