"use client";

import React, { useEffect, useRef } from "react";
import EventSlider from "./Events/EventSlider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Events() {
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
      id="events"
    >
      <main
        className="w-full max-w-[75rem] flex items-center justify-center mx-auto gap-8 py-8 bg-black/50 px-4 md:px-12 flex-col"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <h1 className="mars text-2xl md:text-4xl mb-2 text-center">Events Thar 24</h1>
        <EventSlider />
      </main>
    </section>
  )
}
