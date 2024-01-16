"use client";
import React, { useEffect, useRef } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutRTU() {
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
      id="aboutThar"
      ref={sectionRef}
    >
      <main
        className="max-w-[75rem] flex items-center justify-center mx-auto gap-8 bg-black/50 p-8"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <div className="flex-grow w-1/2">
          <h1 className="mars text-2xl md:text-4xl mb-2">About RTU</h1>
          <p className="text-sm md:text-xl tracking-wide md:text-justify">
            Rajasthan Technical University KOTA, is located on the banks of the Chambal River, spread over an area of
            more than 385 acres, it proudly holds the esteemed status of being one of the premier universities in the
            state of Rajasthan. With affiliations extending to over 200 colleges throughout Rajasthan, this institution
            educates a substantial student body of more than 150,000 individuals. Offering a wide range of courses,
            including engineering and MBA programs, the university is committed to achieving academic excellence in
            engineering. This commitment is realized through the provision of comprehensive knowledge to students,
            fostering research activities, and aligning with the evolving demands of industry, global trends, and
            societal needs.
          </p>
        </div>
        <div className="hidden md:block flex-grow w-1/2">
          <div
            className="p-1 bg-white/50"
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <img
              src="/static/rtuPhoto.png"
              alt=""
              className="h-full w-full"
              style={{
                clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
              }}
            />
          </div>
        </div>
      </main>
    </section>
  )
}
