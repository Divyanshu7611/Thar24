import React from 'react'

export default function Faqs() {
  return (
    <div className="text-black bg-white flex justify-center" id="faq">
      <div className="flex flex-col w-[1200px] mt-10 sm:mt-24 gap-5 mb-16 md:mb-20 lg:mb-24">
        <div>
          <h2>FAQs</h2>
        </div>
        <div className="flex justify-between flex-col lg:flex-row md:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full">
            <div className="collapse collapse-arrow border border-black">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-black">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-black">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
          {/* scond div  */}
          <div className="flex flex-col gap-4 w-full">
            <div className="collapse collapse-arrow border border-black">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-black">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-black">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
