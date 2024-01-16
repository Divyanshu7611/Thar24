'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

export default function Form({
  tharID,
  name,
  image,
  email,
}: {
  tharID: string
  name: string
  image: string
  email: string
}) {
  const [formData, setFormData] = useState<any>({
    tharID,
    name,
    image,
    email,
  })

  const phoneRef = useRef<string | undefined>('')
  const collegeRef = useRef<string | undefined>('')

  const addrRef = useRef<string | undefined>('')
  const cityRef = useRef<string | undefined>('')
  const stateRef = useRef<string | undefined>('')

  const streamRef = useRef<string | undefined>('')
  const yearRef = useRef<string | undefined>('')
  const graduationRef = useRef<string | undefined>('')

  const submittingRef = useRef<boolean>(false)

  const session = useSession()

  async function handleSubmit() {
    formData['id'] = session.data.user.id

    formData['phone'] = phoneRef.current
    formData['collegeName'] = collegeRef.current.toLocaleUpperCase()

    formData['addr'] = addrRef.current.toLocaleUpperCase()
    formData['city'] = cityRef.current.toLocaleUpperCase()
    formData['state'] = stateRef.current.toLocaleUpperCase()

    formData['stream'] = streamRef.current.toLocaleUpperCase()
    formData['yearOfStudy'] = yearRef.current.toLocaleUpperCase()
    formData['graduatingYear'] = graduationRef.current

    if (
      phoneRef.current === '' ||
      collegeRef.current === '' ||
      addrRef.current === '' ||
      cityRef.current === '' ||
      stateRef.current === '' ||
      streamRef.current === '' ||
      yearRef.current === '' ||
      graduationRef.current === ''
    ) {
      alert('please fill All details')
    } else {
      if (phoneRef.current.length === 10) {
        setFormData({
          ...formData,
          phone: phoneRef.current,
          collegeName: collegeRef.current,

          address: addrRef.current,
          city: cityRef.current,
          state: stateRef.current,

          stream: streamRef.current,
          yearOfStudy: yearRef.current,
          graduationYear: graduationRef.current,
        })

        const req = await fetch('/api/ca/register', {
          method: 'post',
          body: JSON.stringify(formData),
        })
        // const res = await req.json()

        if (req.status) {
          session.update()
        }
      } else {
        alert('please fill correct Details')
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 md:mt-auto">
      <h2 className="font-semibold text-2xl">Complete your Details</h2>
      <form
        className={`max-w-2xl w-full mx-auto grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 justify-items-center`}
        onSubmit={async e => {
          e.preventDefault()
          submittingRef.current = true
          await handleSubmit()
          submittingRef.current = false
        }}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={e => {
              phoneRef.current = e.target.value
            }}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">College Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={e => {
              collegeRef.current = e.target.value
            }}
          />
        </div>

        <div className="form-control w-full px-0 md:px-2 max-w-xs md:max-w-6xl md:col-span-2">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            onChange={e => {
              addrRef.current = e.target.value
            }}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">City</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={e => {
              cityRef.current = e.target.value
            }}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">State</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={e => {
              stateRef.current = e.target.value
            }}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Stream</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={e => {
              streamRef.current = e.target.value
            }}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Year Of Study (ex. First, Second, fourth)</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={e => {
              yearRef.current = e.target.value
            }}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Graduation Year (ex. 2024, 2027)</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={e => {
              graduationRef.current = e.target.value
            }}
          />
        </div>
        <button
          className={`w-full btn btn-primary disabled:btn-primary self-end max-w-xs ${
            submittingRef.current === true ? 'animate-pulse select-none' : ''
          }`}
          disabled={submittingRef.current}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
