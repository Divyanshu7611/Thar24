'use client'

import Dashboard from '@/components/ca/Dashboard'
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import Stars from '@/components/global/Stars'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Form from '@/components/ca/Form'

async function getData(session: any, setCAData: any, setIsCA: any) {
  const rawData = await fetch('/api/ca/getData', {
    method: 'post',
    body: JSON.stringify({
      id: session.data.user.id,
    }),
  })

  const caData = await rawData.json()

  setCAData(caData)
  setIsCA(true)
}

export default function CaDashboardPage() {
  const [isCA, setIsCA] = useState<boolean>(false)
  const [caData, setCAData] = useState<any>(null)

  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session.status === 'authenticated') {
      if (session.data.user.caRegistered) {
        getData(session, setCAData, setIsCA)
      }
    } else if (session.status === 'unauthenticated') {
      router.replace('/ca')
    }
  }, [session, router])

  return (
    <>
      <Stars />
      <Navbar />
      {isCA != true && session?.status == 'authenticated' && (
        <Form
          tharID={session.data.user.tharID}
          name={session.data.user.name}
          image={session.data.user.image}
          email={session.data.user.email}
        />
      )}
      {isCA == true && session.status == 'authenticated' && <Dashboard caData={caData} />}
      <Footer />
    </>
  )
}
