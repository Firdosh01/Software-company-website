import React from 'react'
import { websiteDesigning } from '../common/constent'

export default function WebsiteDesigning() {
  return (
    <secion>
      <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto md:px-10">
        <div>
          <h1 className="py-5 text-3xl tracking-widest text-center md:text-7xl text-services ">Website Designing</h1>
        </div>

        <div className='grid grid-cols-1 gap-8 mt-5 lg:grid-cols-3 md:grid-cols-2'>
          {
            websiteDesigning.map((websiteDesign) => {
              return (
                <div key={websiteDesign.id} className=''>
                  <div>
                  <div className='my-3 duration-500 cursor-pointer hover:mt-2'>
                    <img src={websiteDesign.img} alt="" loading='lazy' />
                  </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </secion>
  )
}
