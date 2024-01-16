import React from "react";

interface TeamCardProp {
  name: String;
  post: String;
  imgUrl: String;
}

export default function TeamCard({ name, post, imgUrl }: TeamCardProp) {
  return (
    <div
      className="p-1 bg-white"
      style={{
        clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
      }}
    >
      <div
        className={`relative w-72 h-80 bg-cover bg-center overflow-hidden`}
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          background: `url('${imgUrl}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute bottom-0 inset-x-0 bg-black/80 text-white flex flex-col items-start justify-center px-4 py-4">
          <h1 className="text-2xl">{name}</h1>
          <h2 className="text-warning text-xl">{post}</h2>
        </div>
      </div>
    </div>
  )
}
