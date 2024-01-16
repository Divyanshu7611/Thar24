import React from 'react'

export default function ContactCard({ name, number }) {
  return (
    <div
      className="w-full bg-gray-950 p-8 py-4"
      style={{
        clipPath: 'polygon(25px 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%, 0 25px)',
      }}
    >
      <h3>{name}</h3>
      <p>
        <a href={`tel:${number}`} className="link-hover">
          +91 {number}
        </a>
      </p>
    </div>
  )
}
