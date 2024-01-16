"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

export default function AfterMovie() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "top 25%",
          scrub: 1,
          // markers: true,
        },
      })
      .from(sectionRef.current, {
        transformOrigin: "top",
        rotateX: 90,
      });
  }, []);

  return (
    <section
      className="max-w-[75rem] flex items-center justify-center mx-auto bg-white/20 mt-8 p-1"
      style={{
        clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
      }}
      ref={sectionRef}
    >
      <main
        className="w-full max-w-[75rem] flex items-center justify-center mx-auto gap-8 py-8 bg-black/50 px-4 md:px-12 flex-col"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <h1 className="mars text-2xl md:text-4xl mb-2 text-center">Aftermovie 2020</h1>

        {/* <section
          className="flex items-center justify-center mx-auto gap-8 py-8 bg-black/50 px-12 bg-blend-multiply"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          
        </section> */}

        <div className="flex-grow w-full">
          <div
            className="p-1 bg-white/50"
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/95RDe4rNQ_A?si=5S4mXHbrvKHGe-AV&amp;controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full aspect-video p-5 bg-black"
              style={{
                clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
              }}
            ></iframe>
          </div>
        </div>
      </main>
    </section>
  )
}
