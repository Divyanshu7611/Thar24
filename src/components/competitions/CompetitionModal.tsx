'use client'

import { signIn, useSession } from 'next-auth/react'
import React, { useRef } from 'react'

async function registerEvent(
  id: string,
  teamMemberRef: HTMLDivElement,
  tharID: string,
  teamName: string,
  eventID: string,
) {
  const teamMembers = [tharID]
  teamMemberRef.querySelectorAll('input')?.forEach(input => teamMembers.push(input.value.toUpperCase()))

  const req = await fetch('/api/events/register', {
    method: 'post',
    body: JSON.stringify({
      id: id,
      tharID: tharID,
      teamName: teamName,
      eventID: eventID,
      teamMembers: teamMembers,
      captainTharID: tharID,
    }),
  })
  if (req.status == 200) {
    alert('Registered Successfully')
  } else if (req.status == 202) {
    alert('already registered in same event with same ID')
  } else if (req.status == 203) {
    alert('please login with thar user')
  } else {
    alert('something went wrong, try again')
  }
}

export default function CompetitionModal({
  eventName,
  eventID,
  isTeam,
  teamCount,
}: {
  eventName: string
  eventID: string
  isTeam: boolean
  teamCount: any
}) {
  const submittingRef = useRef<boolean>(false)
  const teamMemberRef = useRef<HTMLDivElement>()
  const teamNameRef = useRef<HTMLInputElement>()
  const session = useSession()

  if (session.status == 'authenticated' && eventID) {
    return (
      <>
        <button className="btn btn-primary" onClick={() => (document.querySelector('#my_modal_1') as any).showModal()}>
          Register
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="text-lg">
              Complete Registration Details for <strong>{eventName}</strong>
            </h3>
            <form
              className="modal-action flex flex-col"
              onSubmit={async e => {
                e.preventDefault()
                submittingRef.current = true
                await registerEvent(
                  session.data.user.id,
                  teamMemberRef.current,
                  session.data.user.tharID,
                  teamNameRef.current.value,
                  eventID,
                )
                submittingRef.current = false
              }}
            >
              <div className="py-4">
                {isTeam ? (
                  <input type="text" className="input input-primary w-full" placeholder="Team Name" ref={teamNameRef} />
                ) : (
                  <input
                    type="text"
                    className="input input-primary w-full"
                    placeholder="Team Name"
                    value={session.data.user.name}
                    ref={teamNameRef}
                  />
                )}

                <p className="mt-2 mb-1">Team Details</p>
                <input
                  type="text"
                  className="input input-primary w-full"
                  placeholder="Your THAR ID"
                  value={session.data.user.tharID}
                />

                <div className="" ref={teamMemberRef}>
                  {teamCount[0] &&
                    teamCount.map(index => (
                      <input
                        type="text"
                        className="input input-primary w-full"
                        placeholder="Member THAR ID"
                        key={index}
                      />
                    ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`btn btn-primary disabled:btn-primary ${
                    submittingRef.current === true ? 'animate-pulse select-none' : ''
                  }`}
                  disabled={submittingRef.current}
                >
                  Confirm
                </button>
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </form>
          </div>
        </dialog>
      </>
    )
  } else {
    return (
      <>
        <button className="btn btn-primary" onClick={() => (document.querySelector('#my_modal_1') as any).showModal()}>
          Register
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box flex gap-4">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                signIn('google')
              }}
            >
              Login
            </button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </dialog>
      </>
    )
  }
}
