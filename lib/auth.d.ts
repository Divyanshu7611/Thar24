import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    tharID: string
    caRegistered: boolean
    userRegistered: boolean
  }

  interface Session {
    user: User
  }
}
