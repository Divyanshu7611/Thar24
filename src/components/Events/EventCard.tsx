import Link from "next/link";
import React from "react";

interface EventCardProps {
  eventBGUrl: String;
  eventName: String;
}

export default function EventCard({ eventBGUrl, eventName }: EventCardProps) {
  return (
    <div
      className="h-72 p-1 bg-white"
      style={{
        clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
      }}
    >
      <div
        className="w-full h-full bg-black/50"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          background: `url(/events/${eventBGUrl ? eventBGUrl : 'gokart'}.png)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute bottom-0 inset-x-0 bg-black/80 text-white flex flex-col items-start justify-center px-4 py-4">
          <h1 className="text-2xl">{eventName || 'Go Kart'}</h1>
          <Link href={'/'} className="text-warning link text-xl underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}
