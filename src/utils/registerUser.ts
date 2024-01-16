import User from '@/models/user/user'
import { ConnectMongoDB, DisconnectMongoDB } from './dbConnect'

export default async function RegisterUser(
  tharID: string,
  name: string,
  email: string,
  image: string,
  caRegistered: boolean,
  userRegistered: boolean,
  isMunRegistered: boolean,
  isRoboWarRegistered: boolean,
  isRcNitroRegistered: boolean,
  isGoKartRegistered: boolean,
) {
  try {
    await ConnectMongoDB()

    let user = await User.findOne({ email })

    if (!user) {
      let user = await User.create({
        tharID,
        name,
        email,
        image,
        caRegistered,
        userRegistered,
        isMunRegistered,
        isRoboWarRegistered,
        isRcNitroRegistered,
        isGoKartRegistered,
      })

      await DisconnectMongoDB()

      return user
    } else {
      return user
    }
  } catch (error) {}
}
