import React from 'react'
import firstImg from '../../assets/34.jpg'
import secondImg from '../../assets/man.jpg'
export default function Internship() {
  return (
    <div>
      <div className="relative w-11/12 max-w-screen-xl px-1 mx-auto md:px-10">
        <div className='flex flex-col justify-between gap-5 py-16 lg:items-center lg:flex-row'>
        
        <div className="lg:w-[50%] relative">
            <span className=" ml-7 about-arrow text-[#FD0F00]">INTERNSHIP</span>
            <h1 className="sm:text-4xl font-semibold lg:leading-[80px]  text-white lg:text-7xl md:text-5xl pt-5">
            Nurturing Youth In The Digital Field.

            </h1>
            <p className="py-5 text-sm font-medium text-white md:text-base">
            Experience day-by-day work culture includes marketing, market research, software/tool and managing the social media .as well as Website.
            </p>
          </div>
          
          <div>
            <div className='flex lg:w-[50%]'>
            <img src={secondImg} alt="" className='h-[350px] h[450px] w-full object-cover bg-center' />
              <img src={firstImg} alt=""  className='h-[350px] w[800px] h[450px]  w-full  object-cover bg-center' />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
