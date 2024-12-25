import React from 'react'

const Report = () => {
  return (
    <div className='w-[100%] px-[20px] py-[20px] bg-dark-blue rounded-[10px] flex flex-col gap-[20px] max-800:w-[100%]'>

       <span className="text-[16px]">Report</span>

       <div className="flex gap-[40px]  max-650:gap-[25px] max-480:gap-[15px]">

            <div className="Report">
               <span className="Report-text">#</span>
               <span className="Report-text-extend">01</span>
               <span className="Report-text-extend">02</span>
               <span className="Report-text-extend">03</span>
               <span className="Report-text-extend">04</span>     
            </div>

            <div className="Report">
               <span className="Report-text">Name</span>
               <span className="Report-text-extend">Fracture/Ligaments/Brokage</span>
               <span className="Report-text-extend">Complexity:</span>
               <span className="Report-text-extend">Confidence Score</span>
               <span className="Report-text-extend">Number of resting days</span> 
            </div>

            <div className="Report max-480:gap-[15px] max-370:gap-[12px]">
               <span className='Report-text h-[25px] max-650:h-[19px] max-480:h-[15px]'>Severity</span>
               <line className="h-[25px] max-650:h-[19px] max-480:h-[15px]"></line>

               <div className='h-[25px] flex items-center max-650:h-[19px] max-480:h-[15px] '>
                  <line className='w-[120px] h-[3px] bg-green-300 max-650:h-[2px] max-650:w-[84px] max-480:w-[60px]'></line>
                  <line className='w-[80px] h-[3px] bg-gray-700 max-650:h-[2px] max-650:w-[56px] max-480:w-[40px]'></line>
                </div>
                <div className='h-[25px] flex items-center max-650:h-[19px] max-480:h-[15px]'>
                  <line className='w-[180px] h-[3px] bg-blue-500 max-650:h-[2px] max-650:w-[126px] max-480:w-[90px]'></line>
                  <line className='w-[20px] h-[3px] bg-gray-700 max-650:h-[2px] max-650:w-[14px] max-480:w-[10px]'></line>
                </div>
                <div className='h-[25px] flex items-center max-650:h-[19px] max-480:h-[15px]'>
                  <line className='w-[80px] h-[3px] bg-red-300 max-650:h-[2px] max-650:w-[56px] max-480:w-[40px]'></line>     
                  <line className='w-[120px] h-[3px] bg-gray-700 max-650:h-[2px] max-650:w-[84px] max-480:w-[60px]'></line>
                </div>
            </div>

            <div className="Report gap-[20px] max-650:gap-[10px]">
               <div className='Report-text'>Figures</div>
               <span className='Report-color-box text-orange-400 bg-opacity-15 bg-orange-600 border border-orange-500'>0</span>
               <span className='Report-color-box text-green-300 bg-opacity-15 bg-green-300 border border-green-300'>0%</span>
               <span className='Report-color-box text-blue-500 bg-opacity-15 bg-blue-500 border border-blue-500'>0%</span>
               <span className='Report-color-box text-red-300 bg-opacity-15 bg-red-300 border border-red-300'>0</span>
    
            </div>

       </div>
    </div>
  )
}

export default Report
