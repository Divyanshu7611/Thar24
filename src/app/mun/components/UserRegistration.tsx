'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Form from './Form'

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
        <Form
          id={session.data.user.id}
          email={session.data.user.email}
          image={session.data.user.image}
          name={session.data.user.name}
          tharID={session.data.user.tharID}
          key={session.data.user.id}
        />
      )}
    </div>
  )
}
