import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  id: String,
  eventName: String,
  eventDescription: String,
  coordinator1: String,
  coordinator2: String,
  coordinator1Mobile: String,
  coordinator2Mobile: String,
  prizeMoney: String,
  image: String,
  regFee: String,
  isTeam: String,
  teamSize: String,
  rulebook: String,
})

const EventsModel = mongoose.models.events || mongoose.model('events', eventSchema)
export default EventsModel
