import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { v4 } from 'uuid'
import RegisterUser from '@/utils/registerUser'
// import CaUser from '@/models/ca/caUser'

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET_ID as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const tharID = v4().toString().split('-')[0].toUpperCase()

      const { name, email, image } = session.user
      await RegisterUser(tharID, name, email, image, false, false, false, false, false, false).then(async data => {
        session.user['id'] = await data.id
        session.user['tharID'] = await data.tharID
        session.user['caRegistered'] = await data.caRegistered
        session.user['userRegistered'] = await data.userRegistered
        session.user['isMunRegistered'] = await data.userRegistered
        session.user['isRoboWarRegistered'] = await data.userRegistered
        session.user['isRcNitroRegistered'] = await data.userRegistered
        session.user['isGoKartRegistered'] = await data.userRegistered
      })

      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
