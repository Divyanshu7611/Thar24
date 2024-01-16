'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Form from '@/components/Events/RoboWar/Forms'

export default function UserRegistration() {
  const session = useSession()
  const [isRegisteredUser, setRegisteredUser] = useState<boolean>(false)
  useEffect(() => {
    if (session.status === 'authenticated' && session.data.user.userRegistered === true) {
      setRegisteredUser(true)
    }
  }, [session])
  return (
    <div>
      {isRegisteredUser && (
        <Form id={session.data.user.id} captainId={session.data.user.tharID} key={session.data.user.id} />
      )}
    </div>
  )
}
