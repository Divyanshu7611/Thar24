'use client'
import React, { useRef, useState } from 'react'
import Navbar from '@/components/Events/RcNitro/RcNavbar'

export default function Form({ id, captainId }: { id: string; captainId: string }) {
  const memberFormRef = useRef<HTMLDivElement>()
  const teamNameRef = useRef<HTMLInputElement>()

  const [formData, setFormData] = useState({
    id: id,
    captainId: captainId,
    teamName: '',
    membersId: [],
  })
  // function part
  function addMemberInput() {
    if (memberFormRef.current.childElementCount < 5) {
      const elementCout = memberFormRef.current.childElementCount + 1
      const node = document.createElement('input')
      node.classList.add('input', 'input-bordered', 'max-w-xs', 'mt-4')
      // node.setAttribute('type', 'button')
      node.setAttribute('placeholder', 'RcNitro member-' + elementCout + ' ID')

      memberFormRef.current.appendChild(node)
    } else {
      alert('han bas bahut hai ')
    }
  }

  async function handleSubmit() {
    const allMemberInputs = memberFormRef.current.querySelectorAll('input')
    formData['id'] = id
    formData['teamName'] = teamNameRef.current.value.toUpperCase()
    formData.membersId.push(captainId)
    allMemberInputs.forEach(input => {
      formData.membersId.push(input.value.toUpperCase())
      // console.log(input.value)
    })

    console.log(formData)
    fetch('/api/register/rcnitro', {
      method: 'post',
      body: JSON.stringify(formData),
    })
  }
  return (
    <>
      <Navbar />

      <section
        className="flex min-h-screen flex-col items-center justify-center pt-32"
        style={{
          backgroundImage: `url("/events/Framercnitro.png")`,
          backgroundSize: 'cover',
          backgroundPosition: `center`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="p-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 items-start">
          <form
            className={`bg-black/70 py-12 max-w-2xl w-full mx-auto flex flex-col items-center justify-center px-8`}
            onSubmit={async e => {
              e.preventDefault()
            }}
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Captain TharId</span>
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Team Name</span>
              </label>
              <input
                type="text"
                ref={teamNameRef}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <button
              // className={`w-full btn mx-auto btn-primary disabled:btn-primary self-end max-w-xs mt-2 btn-sm px-1 ${
              //   submittingRef.current === true ? 'animate-pulse select-none' : ''
              // }`}
              // disabled={submittingRef.current}

              className="w-full btn mx-auto btn-primary disabled:btn-primary self-end max-w-xs mt-2 btn-sm px-1"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
          <form
            className={`bg-black/70 py-12 md:mt-0 mt-5 max-w-xs w-full mx-auto flex flex-col items-center justify-start px-8`}
            onSubmit={async e => {
              e.preventDefault()
            }}
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%, 0 50px)',
            }}
          >
            <div className="" ref={memberFormRef}>
              <input type="text" placeholder="RcNitro member-1 ID" className="input input-bordered  max-w-xs" />
            </div>

            <button
              className=" btn mx-auto btn-warning disabled:btn-primary max-w-xs mt-2 btn-sm px-1"
              type="button"
              onClick={addMemberInput}
            >
              Add
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
