'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

export default function Form({
  tharID,
  name,
  image,
  email,
  cacode,
}: {
  tharID: string
  name: string
  image: string
  email: string
  cacode: string
}) {
  const router = useRouter()

  const [formData, setFormData] = useState<any>({
    tharID,
    name,
    image,
    email,
  })

  const phoneRef = useRef<string | undefined>('')
  const collegeRef = useRef<string | undefined>('')
  const genderRef = useRef<string | undefined>('')
  const ageRef = useRef<string | undefined>('')

  const addrRef = useRef<string | undefined>('')
  const cityRef = useRef<string | undefined>('')
  const stateRef = useRef<string | undefined>('')

  const streamRef = useRef<string | undefined>('')
  const yearRef = useRef<string | undefined>('')
  const graduationRef = useRef<string | undefined>('')

  const refRef = useRef<string | undefined>('')

  const submittingRef = useRef<boolean>(false)

  const session = useSession()

  async function handleSubmit() {
    formData['id'] = session.data.user.id

    formData['phone'] = phoneRef.current
    formData['age'] = ageRef.current
    formData['gender'] = genderRef.current

    formData['collegeName'] = collegeRef.current.toUpperCase()

    formData['addr'] = addrRef.current.toUpperCase()
    formData['city'] = cityRef.current.toUpperCase()
    formData['state'] = stateRef.current.toUpperCase()

    formData['stream'] = streamRef.current.toUpperCase()
    formData['yearOfStudy'] = yearRef.current.toUpperCase()
    formData['graduatingYear'] = graduationRef.current

    formData['referralCode'] = refRef.current.toUpperCase()

    if (
      phoneRef.current === '' ||
      genderRef.current === '' ||
      ageRef.current === '' ||
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
          age: ageRef.current,
          gender: genderRef.current,
          collegeName: collegeRef.current.toUpperCase(),

          address: addrRef.current.toUpperCase(),
          city: cityRef.current.toUpperCase(),
          state: stateRef.current.toUpperCase(),

          stream: streamRef.current.toUpperCase(),
          yearOfStudy: yearRef.current.toUpperCase(),
          graduationYear: graduationRef.current.toUpperCase(),

          referralCode: refRef.current.toUpperCase(),
        })

        const req = await fetch('/api/user/register', {
          method: 'post',
          body: JSON.stringify(formData),
        })
        // const res = await req.json()

        if (req.status == 200) {
          session.update()
          router.push('/user/dashboard')
        }
      } else {
        alert('please fill correct Details')
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className={`max-w-2xl w-full mx-auto flex flex-col items-center justify-center`}
        onSubmit={async e => {
          e.preventDefault()
          submittingRef.current = true
          await handleSubmit()
          submittingRef.current = false
        }}
      >
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            onChange={e => {
              phoneRef.current = e.target.value
            }}
          />
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            onChange={e => {
              ageRef.current = e.target.value
            }}
          />
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="">
            <div className="label">
              <span className="label-text">Gender</span>
            </div>
            <select
              className="select select-bordered w-full max-w-lg"
              onChange={e => {
                genderRef.current = e.target.value
              }}
            >
              <option disabled selected>
                Select
              </option>
              <option>MALE</option>

              <option>FEMALE</option>
              <option>OTHERS</option>
            </select>
          </label>
        </div>

        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">College Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            onChange={e => {
              collegeRef.current = e.target.value
            }}
          />
        </div>

        <div className="form-control w-full max-w-lg">
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

        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">City</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            onChange={e => {
              cityRef.current = e.target.value
            }}
          />
        </div>

        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">State</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            onChange={e => {
              stateRef.current = e.target.value
            }}
          />
        </div>

        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Stream</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            onChange={e => {
              streamRef.current = e.target.value
            }}
          />
        </div>

        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Year Of Study (ex. First, Second, fourth)</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            onChange={e => {
              yearRef.current = e.target.value
            }}
          />
        </div>

        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Graduation Year (ex. 2024, 2027)</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            onChange={e => {
              graduationRef.current = e.target.value
            }}
          />
        </div>

        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Referral Code (Optional)</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            onChange={e => {
              refRef.current = e.target.value
            }}
          />
        </div>

        <button
          className={`w-full btn btn-primary disabled:btn-primary self-end max-w-xs mt-2 btn-sm px-1 ${
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
