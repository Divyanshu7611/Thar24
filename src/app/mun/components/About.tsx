import React from 'react'
import Image from 'next/image'
import vid from '../assets/Video.png'

export default function About() {
  return (
    <div className="bg-[#1D1C41] text-[Roboto]">
      <div className="max-w-[1100px] flex flex-col gap-5 mx-auto my-auto pt-10 pb-10 md:p-5">
        <div className="flex gap-5 items-center">
          <div className="h-1 w-20 bg-white ml-5"></div>
          <p className="font-bold text-xl MunKnow">Know About us</p>
        </div>

        <div className="flex flex-col md:flex-row md:max-w-[1080px] mx-auto">
          <div className="md:w-full text-justify flex flex-col pl-6 pr-6 md:pr-36 md:pl-24 lg:w-4/5 gap-5">
            <h1 className="text-5xl font-bold MunHead">What is MUN-RTU?</h1>
            <p className="text-xs">
              We are an atypical league of students from Rajasthan Technical University, Kota, a pioneer in Engineering,
              Technology, Research, and Development who strive to establish a platform for comprehensive debates and
              discussions with the flame of educational rigor. We envision conducting MUN-RTU with the spirit the
              drafters of the United Nations charter in June of 1945 contemplated, which was to establish an
              organization that would transcend international boundaries and serve as a forum for cooperation and as a
              unifying force on the global stage.
              <br />
              This is the genesis of MUN RTU on the national scale. Before this, the team conducted MUNs on the
              intra-university level. This year it is being conducted as a flagship event under ‘THAR’ - the
              techno-management fest of RTU Kota.
              <br />
              RTU-MUN strives to ensure both breadth and depth in our committee offerings. We hope that all delegates
              can find a topic that they are passionate about. Our team works tirelessly both before and throughout the
              conference to make debates as realistic as possible so that our delegates get a sense of the complexities
              of real-world international negotiation. And, as with the real United Nations, we strive to emphasize
              cooperation and compromise rather than the supremacy of any one country’s position. In this way, each
              delegate gets a chance to learn about not only current international affairs and a particular nation’s
              policies, but also how to keep to that position while working with tens or hundreds of other delegates in
              committee.
            </p>
          </div>

          <div className="flex flex-col items-center gap-10 md:w-2/5 lg:w-2/5 my-auto mx-auto mt-10">
            <div className="flex justify-center">
              <Image alt="" src={vid} width={250} height={250} objectFit="cover" />
            </div>
            <button className="bg-[#BD7B3C] px-4 py-2 text-base font-medium border-white border rounded-md hover:bg-[#ab7d52] text-white">
              Linktree
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
