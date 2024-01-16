import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CompetitionCard({ image, eventName, id, isTeam, teamSize }) {
  if (image) {
    return (
      <div
        className="p-1 bg-white/20 md:hover:scale-105 transition-all"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <div
          className="card card-compact bg-base-100 shadow-xl bg-black/50"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          <figure
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <Image
              height={400}
              width={400}
              src={'/competitions/' + image + '.png'}
              alt="Event"
              className="aspect-square object-cover transition-all md:grayscale contrast-125 md:hover:grayscale-0 md:hover:contrast-100"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title line-clamp-1">{eventName}</h2>
            <div className="flex gap-2">
              <div className="badge badge-secondary">{isTeam == 'TRUE' ? 'Team' : 'Solo'}</div>
              <div className="badge badge-secondary">Max Members {teamSize}</div>
            </div>
            <div className="card-actions justify-start">
              <Link href={'/competitions/' + id} className="btn btn-sm btn-primary btn-outline border-2">
                View
              </Link>
              {/* <button className="btn btn-sm btn-primary btn-outline border-2">Register</button> */}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return
  }
}
