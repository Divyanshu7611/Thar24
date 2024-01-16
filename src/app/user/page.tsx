'use client'

import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import Stars from '@/components/global/Stars'
import Form from '@/components/register/Form'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'

export default function Page() {
  const session = useSession()
  const cacode = useSearchParams().get('cacode') || ''

  return (
    <>
      <Navbar />
      <Stars />

      <section
        className="max-w-[75rem] flex items-center justify-center mx-auto bg-white/20 p-1 mt-32 mb-20"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <section
          className="flex items-center justify-center mx-auto gap-8 py-8 bg-black/50 md:px-12 bg-blend-multiply w-full"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          <div
            className="p-1 bg-white sticky top-20 hidden md:block"
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <Image
              src={'/static/loginImg.png'}
              alt="login banner"
              height={800}
              width={450}
              style={{
                clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
              }}
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h2 className="font-semibold">
              Start Your <br /> <span className="text-primary">Technical </span> Journey
              <br />
              To the <span className="text-primary"> THAR 24 </span>
            </h2>
            <div className="w-full">
              {session.status === 'unauthenticated' && (
                <button
                  className="btn bg-gray-100 hover:bg-gray-400 text-black mt-4 "
                  onClick={() => {
                    signIn('google', { callbackUrl: '/user' })
                  }}
                >
                  <FcGoogle size={24} />
                  Login as Participant
                </button>
              )}
              {session.status === 'authenticated' && !session.data.user.userRegistered && (
                <Form
                  email={session.data.user.email}
                  image={session.data.user.image}
                  name={session.data.user.name}
                  tharID={session.data.user.tharID}
                  cacode={cacode}
                />
              )}
              {session.status === 'authenticated' && session.data.user.userRegistered == true && (
                <Link href={'/user/dashboard'} className="btn btn-primary mt-4">
                  Go To DashBoard
                </Link>
              )}
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  )
}
