import React from 'react'
import './LandingPage.css'
export default function LandingPage() {
  return (
    <>
       <div className='grid lg:grid-cols-2 gap-4 sm:grid-cols-1 sm:text-center bg-[#d9eef2]  p-4 '>
            <div className='relative flex justify-center items-center lg:w-[39vw] ml-16 '>
                    <img src="./LandingPage-img/landing_img-1.svg" alt="" className='animate-rotate'/>
                    <div className='absolute flex justify-center items-center lg:w-[34vw]'>
                        <img src="./LandingPage-img/landing_img-2.svg" alt="" className='animate-counterRotate'/>
                        <div className='absolute flex justify-center items-center lg:w-[14vw]'>
                            <img src="./LandingPage-img/landing_img-3.svg" alt="" className='animate-rotate'/>
                        </div>
                    </div>
                    <div className='absolute z-10 main-img lg:w-[30vw]'>
                        <img src="./LandingPage-img/landing_img-4.svg" alt="" />
                    </div>
            </div>
            <div className='flex justify-center items-center lg:text-6xl sm:text-2xl '>
                <div className='flex flex-col items-start'>
                    <h1 class='font-bebas font-600  gradient-border'>EMPOWERING <span class='text-[#0098B3]'> PEOPLE</span></h1>
                    <br />
                    <h1 class='font-bebas font-600  gradient-border'><span class='text-[#0098B3]'>ENHANCING </span>GROWTH</h1>
                    <br />
                    <h1 class='font-bebas font-600 '>ENSURING <span class='text-[#C82D91]'>AFFORDABILITY</span></h1>
                </div>
            </div>
       </div>

       <div className='grid grid-cols-1 bg-gradient-to-r from-[#026E89] to-[#005067]  w-full text-[#ffff] h-auto '>
             <h4 className='text-center font-900 lg:text-2xl py-4 mt-8'>Major Highlights of FY24</h4>
             <div className='grid lg:grid-cols-5  sm:grid-cols-1 sm:justify-center sm:items-center text-center gap-4 py-8'>
                  <div className='relative  px-6 '>
                      <span className='major-data'>13+</span>
                      <br />
                      <span className='major-categ font-500'>Years in existence</span>
                  </div>
                  <div className='relative px-6 '>
                      <span  className='major-data '>155</span>
                      <br />
                      <span className='major-categ font-500'>Branches</span>
                  </div>
                  <div className='relative  px-6 '>
                      <span  className='major-data'>16</span>
                      <br />
                      <span className='major-categ font-500'>States</span>
                  </div>
                  <div className='relative '>
                      <span  className='major-data'>AA+/stable</span>
                      <br />
                      <span className='major-categ font-500'>Credit Rating</span>
                  </div>
                  <div className='relative  mx-10 px-12'>
                      <span  className='major-data'>3,23</span>
                      <br />
                      <span className='major-categ font-500'>Personal</span>
                  </div>
             </div>
       </div>

       <div>
          <div className='head relative flex justify-start  mt-10 mb-10 '>
            <img src="./Highlights-img/Emp_img.svg" alt="" className='w-full'/>
            <p className='absolute lg:text-2xl sm:text-xm inset-0 top-[50%] left-[50%] font-medium  '>
                Empowering People with Affordable Housing Finance Solutions
            </p>
          </div>
       </div>


       <div className='grid lg:grid-cols-2  sm:grid-cols-1  gap-4  w-full ' >
            <div className='flex  items-center lg:pl-[9%]'>
                <img src="./Highlights-img/housing_img.svg" alt="" className='image-icon'/>
                <p className='text-3xl '>Housing 
                for All</p>
            </div>
            <div className='flex  items-center '>
                 <img src="./Highlights-img/fund_img.svg" alt="" className='image-icon' />
                 <p className='text-3xl '>Finding Ways to 
                 Funding Homes</p>
            </div>
       </div>
       <div className='grid lg:grid-cols-6 sm:grid-cols-1 gap-4 items-center sm:justify-start mt-16 '>
           <div className=' flex justify-center '>
              <img src="./Highlights-img/diamond_img.svg" alt="" className='image-icon ' />
           </div>
           <div className='relative  flex justify-center '>
                <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble'/>
                <span className='absolute inset-0 top-[25%] left-[52%] text-2xl'>Integrity</span>
           </div>
           <div className='relative flex justify-center '>
                <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble'/>
                <span className='absolute inset-0 top-[25%] left-[52%] text-2xl'>Trust</span>
           </div>
           <div className='relative flex justify-center '>
                <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble'/>
                <span className='absolute inset-0 top-[25%] left-[52%] text-2xl'>Passion</span>
           </div>
           <div className='relative flex justify-center '>
                <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble'/>
                <span className='absolute inset-0 top-[25%] left-[52%] text-2xl'>Agility</span>
           </div>
           <div className='relative flex justify-center '>
                <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble' />
                <span className='absolute inset-0 top-[25%] left-[52%] text-2xl'>Empathy</span>
           </div>
       </div>

       <div className='grid lg:grid-cols-2  sm:grid-cols-1 gap-4 justify-center items-center mt-16 mb-8'>
            <div className='portfolio overflow-hidden  ml-[10%] '>
                <img src="./Highlights-img/portfolio_img.svg" alt="" className='portfolio_img'/>
            </div>
            <div className='grid lg:justify-start font-900 lg:text-4xl  pr-16 '>
                <div className='flex '>
                   <img src="./Highlights-img/water_drop.svg" alt="" className='w-7'/>
                   <img src="./Highlights-img/water_drop.svg" alt="" className='w-7'/>
                </div>
               <p class="relative">
                  Our sustainable, granular and affordable portfolio, led by a strong distribution network, diversified liability franchise and strong credit underwriting, has endowed our business with strength and resiliency to generate competitive growth and profits.
                  <span class="absolute ">
                    <img src="./Highlights-img/water_drop.svg" alt="" class="drop rotate-180 w-4" /> 
                    <img src="./Highlights-img/water_drop.svg" alt="" class="drop rotate-180 w-4" /> 
                  </span>
                </p>
            </div>
       </div>
    </>
  )
}
