'use client'
import { events as Events } from '@/utils/events'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

async function getRegisteredEvents(id, tharID) {
  const eventsReq = await fetch('/api/events/getRegisteredEvents', {
    method: 'post',
    body: JSON.stringify({
      id: id,
      tharID: tharID,
    }),
  })

  // console.log(await eventsReq.text())

  const res = await eventsReq.json()
  console.log()

  return res.data
}

export default function UserDashboard({ caData }: { caData: any }) {
  const [events, setEvents] = useState(null)
  const session = useSession()

  useEffect(() => {
    async function handle() {
      if (session.status === 'authenticated') {
        if (session.data.user) {
          const data = await getRegisteredEvents(session.data.user.id, session.data.user.tharID)
          setEvents(data)
        }
      }
    }
    handle()
  }, [session])

  return (
    <section className="min-h-screen w-full max-w-[75rem] mx-auto mt-36">
      <div
        className="bg-white/20"
        style={{
          clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
        }}
      >
        <div
          className="bg-black/50 flex flex-col items-center"
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
          }}
        >
          <div className="w-full flex flex-wrap items-center justify-center p-4 py-6 gap-x-12">
            <div className="h-24 aspect-square rounded-full overflow-hidden">
              <Image
                src={session.data.user.image}
                height={100}
                width={100}
                loading="lazy"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center md:items-start justify-center">
              <div className="text-center">
                {/* <h5>Name</h5> */}
                <h2 className="">
                  {session.data.user.name} ({session.data.user.tharID})
                </h2>
              </div>
              <div className="text-center">
                {/* <h5>Email</h5> */}
                <h4 className="">{caData.email}</h4>
              </div>
            </div>
            <Link href={'/checkout'} className="btn btn-warning btn-sm">
              Payments
            </Link>
            <button
              className="btn btn-primary btn-sm"
              onClick={e => {
                signOut()
              }}
            >
              Log Out
            </button>
          </div>

          {/* <div role="tablist" className="tabs tabs-boxed font-bold mb-2">
            <a role="tab" className="tab tab-active">
              Competitions
            </a>
            <a role="tab" className="tab">
              Events
            </a>
          </div> */}

          <div className="overflow-x-auto min-w-full md:px-8">
            {events && (
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Event Name</th>
                    <th>Team Name</th>
                    <th>Total Members</th>
                    <th>Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, index) => (
                    <tr key={event}>
                      <th>{index + 1}</th>
                      <td>{Events.find(o => o.id === event.eventID).eventName}</td>
                      <td>{event.teamName}</td>
                      <td>{event.teamMembersTharID.length}</td>
                      <td>{event.paymentStatus ? 'done' : 'pending'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {!events && (
            <div className="h-48 flex items-center justify-center flex-col">
              <span>No Events?</span>
              <Link href={'/#events'} className="link">
                Choose One
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
