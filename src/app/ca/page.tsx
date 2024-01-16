'use client'
import Navbar from '@/components/global/Navbar'
import Stars from '@/components/global/Stars'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import Footer from '@/components/global/Footer'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function CaPage() {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/ca/dashboard')
    }
  }, [session, router])

  return (
    <>
      <Stars />
      <Navbar />
      <div className="w-full max-w-[75rem] mx-auto flex items-center justify-center min-h-screen">
        <div className="flex items-start md:items-start justify-center flex-col-reverse md:flex-row-reverse w-full max-w-4xl md:gap-x-12 pt-40 pb-20">
          <div className="flex flex-col items-start justify-center pb-10 gap-6">
            <h1 className="text-5xl font-bold">Campus Ambassador :</h1>
            <div>
              <h3 className="text-2xl pb-2">Level 1 (Bronze):</h3>
              <ul className="list-disc">
                <li> 10-24 Registration Required</li>
              </ul>
              <h3 className="text-xl pt-2 pb-2">Benefits-</h3>
              <ul className="list-disc">
                <li> Free Registration + Accommodation + Passes For Pronites</li>
                <li> Goodies</li>
                <li> Certificate</li>
                <li> Recommendation Letter</li>
              </ul>
            </div>

            {/* Level 2 Silver  */}
            <div>
              <h3 className="text-2xl pb-2">Level 2 (Silver):</h3>
              <ul className="list-disc">
                <li> 25-44 Registration Required</li>
              </ul>
              <h3 className="text-xl pt-2 pb-2">Benefits-</h3>
              <ul className="list-disc">
                <li> Free Registration + Accommodation + Passes For Pronites</li>
                <li> Goodies( Extra : T-Shirt + Bottle/Coffee mug )</li>
                <li> Certificate</li>
                <li> Recommendation Letter</li>
              </ul>
            </div>
            {/* LEvel 3 Gold */}
            <div>
              <h3 className="text-2xl pb-2">Level 3 (Gold):</h3>
              <ul className="list-disc">
                <li> 45+ Registration Required</li>
              </ul>
              <h3 className="text-xl pt-2 pb-2">Benefits-</h3>
              <ul className="list-disc">
                <li> Free Registration + Accommodation + Passes For Pronites</li>
                <li> Goodies( Extra : T-Shirt + Bottle/Coffee mug )</li>
                <li> Certificate</li>
                <li> Recommendation Letter</li>
                <li>
                  {' '}
                  One Extra Person Can Attend The Fest With Free Registration + Accommodation + Passes For Pronites
                </li>
              </ul>
            </div>
          </div>
          <div
            className="card shrink-0 w-full max-w-sm shadow-2xl bg-white/20 p-1 sticky top-16 md:top-40"
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <div
              className="bg-black/50 py-8 px-2 flex flex-col items-center justify-center backdrop-blur-lg"
              style={{
                clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
              }}
            >
              <Image src={'/static/deathStar.png'} alt="deathStar" width={300} height={300}></Image>
              <div className="form-control mt-6">
                <button
                  className="btn bg-gray-100 hover:bg-gray-400 text-black px-8"
                  onClick={() => {
                    signIn('google', { callbackUrl: '/ca/dashboard' })
                  }}
                >
                  <FcGoogle size={24} />
                  Login for CA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
