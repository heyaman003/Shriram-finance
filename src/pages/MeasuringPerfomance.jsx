import React from 'react'

const MeasuringPerfomance = () => {
  return (
    <div className='w-[86%] m-auto '>
      <h1 className='heading-big-measuring text-5xl font-bold my-5'>Measuring our Progress</h1>
      <div className="flex sm:flex-col md:flex-row  flex-wrap justify-between gap-1">
       <img className='sm:w-full md:w-[25%] my-4' src="./Graph/1.png" alt="" />
       <img className='sm:w-full md:w-[25%] my-4' src="./Graph/2.png" alt="" />
       <img className='sm:w-full md:w-[25%] my-4' src="./Graph/3.png" alt="" />
       <img className='sm:w-full md:w-[25%] my-4' src="./Graph/4.png" alt="" />
       <img className='sm:w-full md:w-[25%]  my-4' src="./Graph/5.png" alt="" />
       <img className='sm:w-full md:w-[25%] my-4' src="./Graph/5.png" alt="" />
      </div>
    </div>
  )
}

export default MeasuringPerfomance
