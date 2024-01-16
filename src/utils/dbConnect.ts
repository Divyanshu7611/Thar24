import mongoose from 'mongoose'

export const ConnectMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise()
  } else {
    return await mongoose.connect(process.env.MONGODB_URL, { family: 4 })
  }
}
export const DisconnectMongoDB = async () => {
  return await mongoose.disconnect()
}
