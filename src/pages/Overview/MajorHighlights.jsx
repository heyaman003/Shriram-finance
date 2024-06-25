import React from 'react'
import './MajorHighlights.css'

export default function MajorHighlights() {
  return (
   <div className='p-8 bg-gradient-to-r from-[#026E89] to-[#005067]'>
     <div>
     <h1 className="flex justify-center text-6xl mb-8 mt-8 text-white font-bold">Major Highlights of FY24</h1>
     <div className="flex justify-evenly space-x-12 items-center b">
        <div className="grid lg:grid-cols-5 sm:grid-cols-1  w-full  mt-2 mb-4">
            <div>
                <p className="border-highlights-1">13+</p>
                <p className="border-highlights-2 ">Years in existence</p>
            </div>
            <div>
                <p className="border-highlights-1">155</p>
                <p className="border-highlights-2">Branches</p>
            </div>
            <div >
                <p className=" border-highlights-1">16</p>
                <p className="text-xl border-highlights-2">States</p>
            </div>
            <div>
                <p className="border-highlights-1">AA+/Stable</p>
                <p className="border-highlights-2 ">Credit Rating</p>
            </div>
            <div>
                <p className="border-highlights-1">3,232</p>
                <p className="border-highlights-2">Personnel</p>
            </div>
            
        </div>
    </div>
    <div className="flex flex-col justify-start items-center">
        <div className="grid lg:grid-cols-5 sm:grid-cols-1 gap-16 w-full mt-2 mb-4">
            <div >
                <p className=" border-highlights-1">2,10,000+</p>
                <p className="text-xl border-highlights-2">Customers served</p>
            </div>
            <div>
                <p className="border-highlights-1">	<span>&#8377;</span>13,762<sub>crore</sub></p>
                <p className="border-highlights-2 ">Asset Under
                Management (AUM)</p>
                <p className='text-[#fff]'>As of 31st March 2024 <span></span></p>
                <p className='text-[#fff]'><span className='text-2xl font-[500]'>71% </span>Y-o-Y growth</p>
            </div>
            <div>
                <p className="border-highlights-1"><span>&#8377;</span>7,591<sub>crore</sub></p>
                <p className="border-highlights-2">Disbursals in FY24</p>
                <p className='text-[#fff]'><span className='text-2xl font-[500]'>83% </span>Y-o-Y growth</p>

            </div>
            <div >
                <p className=" border-highlights-1"><span>&#8377;</span>1429.60<sub>crore</sub></p>
                <p className="text-xl border-highlights-2">Total Revenue</p>
                <p className='text-[#fff]'><span className='text-2xl font-[500]'>82.4% </span>Y-o-Y growth</p>
            </div>
            <div>
                <p className="border-highlights-1"><span>&#8377;</span>217.40<sub>crore</sub></p>
                <p className="border-highlights-2 ">Profit after Tax for FY 24</p>
                <p className='text-[#fff]'><span className='text-2xl font-[500]'>58% </span>Y-o-Y growth</p>
            </div>
        </div>
    </div>
    <div className="flex flex-col justify-start items-center">
        <div className="grid lg:grid-cols-5 sm:grid-cols-1 gap-16 w-full  mt-2 mb-4">
            <div>
                <p className="border-highlights-1"><span>&#8377;</span>217.40<sub>crore</sub></p>
                <p className="border-highlights-2 ">Profit after Tax for FY 24</p>
                <p className='text-[#fff]'><span className='text-2xl font-[500]'>58% </span>Y-o-Y growth</p>
            </div>
            <div>
                <p className="border-highlights-1"><span>&#8377;</span>1924<sub>crore</sub></p>
                <p className="border-highlights-2">Net Worth</p>
                <p className='text-[#fff]'><span className='text-2xl font-[500]'>48% </span>Y-o-Y growth</p>
            </div>
            <div >
                <p className=" border-highlights-1">3rd largest</p>
                <pre className="text-xl border-highlights-2">Affordable Housing <br />Finance company in India</pre>
            </div>
            <div>
                <p className="border-highlights-1">Fastest</p>
                <pre className="border-highlights-2 ">growing AHFC in the <br />
                country</pre>
            </div>
            <div>
                <p className="border-highlights-1">Strong</p>
                <pre className="border-highlights-2">leadership team driving <br />
                quality business growth</pre>
            </div>
        </div>
    </div>
    <div className="flex flex-col justify-start items-center">
        <div className="grid lg:grid-cols-5 sm:grid-cols-1 gap-16 w-full  mt-2 mb-4">
            
            <div >
                <p className=" border-highlights-1">Dominant</p>
                <pre className="text-xl border-highlights-2">in Gujarat, Tamil Nadu, Andhra <br />
                Pradesh, Telangana and Karnataka</pre>
            </div>
            <div>
                <p className="border-highlights-1">Great Place
                to Work</p>
                <p className="border-highlights-2 ">For the 3rd time in a row</p>
            </div>
            <div>
                <p className="border-highlights-1">Top 50 Best Workplaces
                in BFSI (GPTW)</p>
                <p className="border-highlights-2">For the 2nd consecutive year</p>
            </div>
        </div>
    </div>
    </div>

   </div>
  )
}
