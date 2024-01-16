'use client'

import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import Stars from '@/components/global/Stars'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import UserDashboard from '@/components/register/Dashboard'
import Link from 'next/link'

async function getData(session: any, setUserData: any) {
  const rawData = await fetch('/api/user/getData', {
    method: 'post',
    body: JSON.stringify({
      id: session.data.user.id,
    }),
  })

  const userData = await rawData.json()
  setUserData(userData)
}

export default function UserDashboardPage() {
  const [userData, setUserData] = useState<any>(null)

  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session.status === 'authenticated') {
      if (session.data.user.userRegistered === true) {
        getData(session, setUserData)
      }
    } else if (session.status === 'unauthenticated') {
      router.replace('/user')
    }
  }, [session, router])

  return (
    <>
      <Stars />
      <Navbar />
      {!userData && (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
          Please Complete your Registration
          <Link href={'/user'} className="link">
            Click Here
          </Link>
        </div>
      )}
      {userData && <UserDashboard caData={userData} />}
      <Footer />
    </>
  )
}
