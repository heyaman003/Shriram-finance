import React from 'react'
import './LandingPage.css'
import BodSlider from '../../components/BodSlider/BodSlider'
import MHighlights from '../../components/Highlights/Highlights'
import Quote from '../../components/Quote/Quote'
export default function LandingPage() {
    return (
        <>
            <div className='grid lg:grid-cols-2 gap-4 sm:grid-cols-1 sm:text-center bg-[#d9eef2]  p-4 w-full m-auto'>
                <div className='relative flex justify-center items-center lg:w-[39vw] m-auto '>
                    <img src="./LandingPage-img/landing_img-1.svg" alt="" className='animate-rotate' />
                    <div className='absolute flex justify-center items-center lg:w-[34vw]'>
                        <img src="./LandingPage-img/landing_img-2.svg" alt="" className='animate-counterRotate' />
                        <div className='absolute flex justify-center items-center lg:w-[14vw]'>
                            <img src="./LandingPage-img/landing_img-3.svg" alt="" className='animate-rotate' />
                        </div>
                    </div>
                    <div className='absolute z-10 main-img lg:w-[30vw] sm:w-[20vw]'>
                        <img src="./LandingPage-img/landing_img-4.svg" alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center lg:text-6xl sm:text-2xl m-auto'>
                    <div className='flex flex-col items-start landing-page-hero-container'>
                        <h1 class='font-bebas font-bold  gradient-border'>EMPOWERING <span class='text-[#0098B3]'> PEOPLE</span></h1>
                        <br />
                        <h1 class='font-bebas font-bold  gradient-border'><span class='text-[#0098B3]'>ENHANCING </span>GROWTH</h1>
                        <br />
                        <h1 class='font-bebas font-bold '>ENSURING <span class='text-[#C82D91]'>AFFORDABILITY</span></h1>
                    </div>
                </div>
            </div>

            {/* <div className='grid grid-cols-1 bg-gradient-to-r from-[#026E89] to-[#005067]  w-full text-[#ffff] h-auto '>
                <h4 className='text-center font-900 lg:text-2xl py-4 mt-8'>Major Highlights of FY24</h4>
                <div className='grid lg:grid-cols-5  sm:grid-cols-1 sm:justify-center sm:items-center text-center gap-4 py-8'>
                    <div className='relative  px-6 '>
                        <span className='major-data'>13+</span>
                        <br />
                        <span className='major-categ font-500'>Years in existence</span>
                    </div>
                    <div className='relative px-6 '>
                        <span className='major-data '>155</span>
                        <br />
                        <span className='major-categ font-500'>Branches</span>
                    </div>
                    <div className='relative  px-6 '>
                        <span className='major-data'>16</span>
                        <br />
                        <span className='major-categ font-500'>States</span>
                    </div>
                    <div className='relative '>
                        <span className='major-data'>AA+/stable</span>
                        <br />
                        <span className='major-categ font-500'>Credit Rating</span>
                    </div>
                    <div className='relative  mx-10 px-12'>
                        <span className='major-data'>3,23</span>
                        <br />
                        <span className='major-categ font-500'>Personal</span>
                    </div>
                </div>
            </div> */}
            <MHighlights />

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-8'>
                <div className='head relative flex justify-start  mt-10 mb-10 '>
                    <img src="./Highlights-img/Emp_img.svg" alt="" className='w-full '/>
                    <p className='absolute lg:text-3xl sm:text-2xl inset-0 top-[48%] left-[50%] font-bold  '>
                        Empowering <span className='text-[#0098B3]'>People Enhancing</span> Growth Ensuring <span className='text-[#67236e]'>Affordability</span>
                    </p>
                </div>
                <div className='lg:text-2xl pt-10 text-[#0098B3] font-600'>
                       <p>For us at Shriram Housing Finance Limited (SHFL),
                        empowerment is an endeavour that begins with
                        a better understanding of what our customers
                        need and culminates with the fulfilment of their
                        aspirations of owning their own homes. This is
                        what we mean by saying that empowerment for us
                        has more than one connotation.</p>
                </div>
            </div>


            <div className='grid lg:grid-cols-2 disc-section  sm:grid-cols-1  gap-4  w-full ' >

                <div className='flex flex-col'>
                    <p className='val-heading text-[#006b95]'>Vision</p>
                    <div className='flex items-center '>
                        <img src="./Highlights-img/housing_img.svg" alt="" className='image-icon' />
                        <p className='text-3xl '>Housing
                            for All</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='val-heading text-[#006b95]'>Mission</p>
                            <div className='flex  items-center '>
                                <img src="./Highlights-img/fund_img.svg" alt="" className='image-icon' />
                                <p className='text-3xl '>Finding Ways to
                                    Funding Homes</p>
                            </div>
                </div>
            </div>
              

            <div className='disc-section mt-8'>
            <h1 className='marginal val-heading w-full text-[#006b95]'>Our Values</h1>
            <div className='grid  lg:grid-cols-6 sm:grid-cols-1 gap-4 items-center sm:justify-start mt-2 '>
                <div className='flex flex-col justify-center relative'>
                    <img src="./Highlights-img/diamond_img.svg" alt="" className='image-icon ' />
                </div>
                <div className='relative  flex justify-center '>
                    <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble' />
                    <span className='absolute inset-0 top-[25%] left-[52%] text-2xl'>Integrity</span>
                </div>
                <div className='relative flex justify-center '>
                    <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble' />
                    <span className='absolute inset-0 top-[25%] left-[52%] text-2xl'>Trust</span>
                </div>
                <div className='relative flex justify-center '>
                    <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble' />
                    <span className='absolute inset-0 top-[25%] left-[52%] text-2xl'>Passion</span>
                </div>
                <div className='relative flex justify-center '>
                    <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble' />
                    <span className='absolute inset-0 top-[25%] left-[52%] text-2xl'>Agility</span>
                </div>
                <div className='relative flex justify-center '>
                    <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble' />
                    <span className='absolute inset-0 top-[25%] left-[52%] text-2xl'>Empathy</span>
                </div>
            </div>
            </div>
            <BodSlider />
            <Quote />


        </>
    )
}
