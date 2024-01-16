import mongoose from 'mongoose'

const caUserSchema = new mongoose.Schema({
  tharID: String,
  caCode: String,
  name: String,
  image: String,
  email: String,
  gender: String,
  age: String,

  phone: String,
  collegeName: String,
  address: String,
  city: String,
  state: String,
  stream: String,
  yearOfStudy: String,
  graduationYear: String,
})

const CaUser = mongoose.models.ca || mongoose.model('ca', caUserSchema)
export default CaUser
