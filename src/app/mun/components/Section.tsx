import React from 'react'
import Image from 'next/image'
import logo from '../assets/MUN RTU LOGO 1.png'
import polygon from '../assets/Polygon 1.png'

export default function Section() {
  return (
    <div
      id="section"
      className="bg-white text-black flex flex-col justify-center text-[Montserrat] p-5 pb-0 md:pt-10 md:pr-10 md:pl-10 h-full overflow-x-hidden overflow-y-auto"
    >
      <div className="max-w-[1080px] flex flex-col justify-center mx-auto my-auto">
        <div className="logo">
          <Image src={logo} alt="" height={80} width={80} objectFit="cover" />
        </div>
        <div className="max-w-[890px] md:text-left">
          <h1 className="font-bold text-[#5C5C5C] text-center underline text-2xl md:text-3xl p-3 md:p-5">
            Letter from Secretary-General
          </h1>
          <div className="text-base md:text-lg text-justify font-medium sm:text-sm">
            <p>
              <span className="font-semibold">Dear Delegates, respected Faculty Advisors, and the Secretariat,</span>
              <br />
              <br />
              It is my distinct honour and pleasure to invite you to Rajasthan Technical University Model United Nations
              Conference set to occur from January 22th-23th, 2024. MUN challenges students to think outside the box,
              and come up with creative solutions while acquiring skills in public speaking, leadership, and teamwork.
              We look forward to opening our doors to a diversity of thoughts and constructive, thought-provoking
              discussions
              <br />
              <br />
              This year’s conference will consist of three committees: The United Nations General Assembly, The
              International Monetary Fund, and The All India Political Parties Meet to make things interesting. The
              conference will continue to put forward thrilling simulations which allow delegates to react with regard
              to real-life situations.
              <br />
              <br />
              We would like to extend our sincerest welcome to all participants of the first session of RTU Model United
              Nations 2024. We would also like to avail this opportunity to express our deepest appreciation to all
              delegates, chairs, and volunteers for their endeavour to attend and contribute to the simulation of the
              United Nations at Rajasthan Technical University. We are honoured and privileged to work with you on the
              United Nations agenda.
              <br />
              <br />
              We also want to congratulate all of the delegates who have decided to come to this conference. Your
              interest and initiative to participate, and your devotion of time and energy to make this conference a
              success is appreciated. We are delighted and esteemed to be your hosts.
              <br />
              <br />
              We believe that the Delegates will jointly discharge the essential diplomatic responsibilities mandated to
              them by the Secretariat. Even though this is the first session of RTU Model United Nations, we assure all
              delegates and chairs that we shall put paramount efforts to ensure that the work is carried out adequately
              and that our endeavours meet with success.
              <br />
              <br />
              MUN-RTU is not only a conference that will benefit you on an academic level, considering your opportunity
              to broaden your knowledge and put it to use in engaging debates but it is also your chance to meet new
              people and create indelible memories. Do not miss out on such an experience and prepare yourself as you
              grab this amazing opportunity. I offer all of my best wishes to you and look forward to seeing you at RTU
              MUN 2024.
            </p>
          </div>
          <p className="text-base md:text-lg font-semibold mt-6">
            Warm Regards
            <br />
            Secretary-General
            <br />
            Govind Madan
            <br />
            MUN RTU
          </p>
        </div>
      </div>
      <div className="">
        <div className="relative max-w-[1080px] mx-auto flex justify-end">
          <Image alt="" src={polygon} className="relative polyimg right-20" />
        </div>
      </div>
    </div>
  )
}
