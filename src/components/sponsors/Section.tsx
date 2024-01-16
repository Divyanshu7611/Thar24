'use client'
import React from 'react'
import photo1 from '@/app/sponsors/sponser/BurgerGarage.png'
import photo2 from '@/app/sponsors/sponser/Istart.jpg'
import photo3 from '@/app/sponsors/sponser/KC.jpg'
import photo4 from '@/app/sponsors/sponser/Kappa.png'
import photo5 from '@/app/sponsors/sponser/Kota City Blog.png'
import photo6 from '@/app/sponsors/sponser/MAAC.png'
import photo7 from '@/app/sponsors/sponser/MSI.png'
import photo8 from '@/app/sponsors/sponser/MyFm.png'
import photo9 from '@/app/sponsors/sponser/NBC.png'
import photo10 from '@/app/sponsors/sponser/PizzaHut.png'
import photo11 from '@/app/sponsors/sponser/RedCheif.png'
import photo12 from '@/app/sponsors/sponser/RelianceDigital.png'
import photo13 from '@/app/sponsors/sponser/RelianceTrends.png'
import photo14 from '@/app/sponsors/sponser/SharePunjab.jpg'
import photo15 from '@/app/sponsors/sponser/SocialIt.png'
import photo16 from '@/app/sponsors/sponser/TribeVibe.png'
import Image from 'next/image'

export default function Section() {
  const SponserLogo = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
  ]

  return (
    <div className="mt-40 w-full">
      <h1 className="mars text-center">SPONSORS</h1>
      <div className="max-w-3xl mt-16 mx-auto flex flex-wrap gap-10 justify-center md:justify-between">
        {SponserLogo.map((photo, index) => (
          <Image key={index} alt={`Photo ${index + 1}`} src={photo} height={150} width={150} />
        ))}
      </div>
    </div>
  )
}
