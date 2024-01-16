/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className="max-w-[65rem] flex items-center justify-center mx-auto bg-white/20 mt-32 p-1"
      style={{
        clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
      }}
      ref={sectionRef}
    >
      <section
        className="flex items-center justify-center mx-auto gap-8 py-8 bg-black/50 px-12 bg-blend-multiply"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <div className="flex flex-col gap-10">
          <h1 className="mars text-3xl md:text-6xl text-center mb-2 text-orange-400">ACCOMODATION</h1>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div
              className="bg-black/50 transition-all hover:scale-105 duration-500 w-full md:w-1/2 py-8 px-2 flex flex-col items-center justify-center backdrop-blur-lg"
              style={{
                clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
              }}
            >
              <Image src={'/static/deathStar.png'} alt="deathStar" width={250} height={250}></Image>
              <div className="form-control mt-6">
                <button className="btn bg-orange-400 hover:bg-gray-400 text-black px-8">
                  <Link href="/accomodation/checkout">REGISTER NOW</Link>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-md md:text-xl text-justify">
                THAR, the flagship techno-management fest of Rajasthan Technical University, Kota, is a three-day event
                that provides a platform for students to showcase their technical and management skills, network with
                industry experts, and learn from successful entrepreneurs. The fest&apos;s theme, &quot;Navigating the
                Technical Dunes,&quot; reflects the ever-changing and challenging landscape of the tech industry, and
                the need for students to be adaptable, skilled, and resourceful. Each day of the fest features a variety
                of events, including competitions, workshops, and pronites
              </p>
            </div>
          </div>
          {/* Guidlines  */}
          <div>
            <h1 className="text-center md:text-4xl text-3xl text-orange-400 font-bold">ACCOMODATION GUIDELINES</h1>
            <ol className="list-decimal flex flex-col gap-5 font-semibold p-5 md:text-lg text-sm text-justify">
              <li>
                Accommodation charges are INR 600 per candidate for 3 days. Maximum of 4 nights stay allowed (21st JAN
                10AM - 25th JAN 10AM). It includes food facility also.
              </li>
              <li>Check-in: 10:00 AM to 10:00 PM on your check-in date</li>
              <li>Check-out: 6:00 AM to 10:00 AM on 25th JAN</li>
              <li>
                Confirmed Accommodation can be cancelled through email only. Send an e-mail having your Acco ID and the
                number of members for whom accommodation has to be cancelled, at thar.techfest@rtu.ac.in. The subject of
                the email should be &quot;&quot;Cancellation of Accommodation&quot;&quot; For any cancellations before
                deadline, 80% of the total amount shall be refunded after the festival. There shall be no refunds for
                cancellation after the deadline.Deadline of cancellation: 18th JANUARY 2024.
              </li>
            </ol>
          </div>
          {/* Instructions  */}
          <div>
            <h1 className="text-center text-3xl md:text-4xl text-orange-400 font-bold">INSTRUCTIONS</h1>
            <ol className="list-decimal flex flex-col gap-5 p-5 font-semibold md:text-lg text-sm text-justify">
              <li>
                All guests carrying electronic items of any kind will have to declare them at the RTU Kota main gate
                through a &apos;Gate Pass&apos;. The belongings will also be checked on the way out of RTU Kota along
                with the &apos;Gate Pass&apos;, failing to do so will result in the belongings being impounded.
              </li>
              <li>
                All guests are required to carry their valid government photo ID proofs at all times. In addition, the
                student participants are also required to carry their valid College photo ID card. Any guest failing to
                produce their ID card will not be permitted inside the campus during THAR 2024.
              </li>
              <li>
                All guests will be provided with a mattress. Techfest will not provide mattress cover, blankets, or
                pillows. The guests are encouraged to arrange them on their own (if required), since the weather might
                get cold during the night.
              </li>
              <li>
                Any commodities issued to the guests would have to be returned in sound condition to the organizers
                during check-out.
              </li>
              <li>
                Entry will be only through the &apos;Main Gate&apos; of RTU Kota. All other gates will be closed for
                entry.
              </li>
              <li>
                Random checks would be made to avoid any illegal stay at the campus. Any team failing to produce their
                electronic/physical receipts of accommodation would be heavily fined and disqualified.
              </li>
              <li>
                Alcohol, drugs, sharp objects, and explosives of any kind are strictly prohibited inside the campus. Any
                other item if deemed unsafe will be prohibited. The decision of Security and THAR team will be final in
                case of any disputes.
              </li>
              <li>No outside vehicles will be allowed into the campus during THAR 2024.</li>
              <li>
                All guests are required to maintain the decorum and cleanliness of the campus, and follow the rules of
                the campus at all times.
              </li>
              <li>
                THAR 2024 and RTU Kota will not be responsible for any mishaps that occur through the duration of stay
                for RTU Kota.
              </li>
            </ol>
          </div>
          {/* FAQQS */}
          <div className="mb-12">
            <h1 className="text-center text-3xl md:text-4xl text-orange-400 font-bold">FAQs</h1>

            <div className="w-full flex flex-col gap-5 mt-5">
              <div className="collapse collapse-arrow border-2">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">How to avail accommodation?</div>
                <div className="collapse-content">
                  <ol className="list-decimal">
                    <li>Click on Register now</li>
                    <li>Complete the payment procedure.</li>
                  </ol>
                </div>
              </div>
              <div className="collapse collapse-arrow border-2 ">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">What is the payment procedure?</div>
                <div className="collapse-content">
                  <p>
                    The payment procedure will be online. The accommodation charges are provided under the tab
                    Accommodation Charges on the hospitality page. You will have to report at the accommodation desk
                    with the email printout and the mandatory documents. Failing to bring any of the documents may lead
                    to the cancellation of your accommodation.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border-2 ">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">How do I know that my payment is confirmed?</div>
                <div className="collapse-content">
                  <p>
                    Confirmation is not confirmed till a confirmation mail is not received in 24 hours. If not received
                    confirmation in 24 hours, then mail your transaction ID, THAR ID, name, amount to{' '}
                    <strong>thar.techfest@rtu.ac.in</strong> with the subject as Transaction ID :: team ID ::
                    Confirmation mail not received.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border-2 ">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Documents that guests should carry?</div>
                <div className="collapse-content">
                  <ul className="list-decimal">
                    <li>Any valid Govt photo ID</li>
                    <li> Print out of Email confirmation</li>
                    <li>Gate pass</li>
                    <li>Valid College ID for participants</li>
                  </ul>
                </div>
              </div>
              <div className="collapse collapse-arrow border-2 ">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Should I carry my ID card with me?</div>
                <div className="collapse-content">
                  <p>
                    It is mandatory for all guest participants to carry college IDs. This is for your own convenience.
                    Moreover, you will be asked to produce your college ID cards at the time of allotment of rooms.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow border-2 ">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">What are the Accommodation charges?</div>
                <div className="collapse-content">
                  <p>
                    The accommodation charges and other necessary details regarding the payment will be available under
                    the tab Accommodation Charges.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow border-2 ">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">What kind of accommodation is provided?</div>
                <div className="collapse-content">
                  <p>
                    Accommodation is provided on a shared basis inside campus hostels or outside hotels. One mattress,
                    and enough space for keeping luggage, and other essential commodities will be provided. Girls and
                    boys will be accommodated separately. The number of guests in a room will be decided by THAR and
                    will be allotted by THAR Team.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow border-2 ">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Does the accommodation facilities include food facilities?
                </div>
                <div className="collapse-content">
                  <p>Yes, the accommodation charges include food facilities.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow border-2 ">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Can I enter RTU Kota campus at any time?</div>
                <div className="collapse-content">
                  <p>
                    You can enter RTU Main gate anytime by showing a valid photo ID proof during 6am to 10pm, however,
                    you need to have accommodation inside the campus to stay in the campus after 10pm.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border-2 ">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Can we get accommodation on the spot at RTU?</div>
                <div className="collapse-content">
                  <p>
                    No confirmation of accommodation will be provided. It is completely subject to the availability of
                    rooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
