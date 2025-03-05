import React from 'react'

function Offers() {
  return (
    <div>
         <div className='max-w-6xl overflow-hidden mx-auto p-4'>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Offers</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className='flex-1 bg-[#96D3BF] rounded-lg p-4'>
            <button className='bg-white text-[#96D3BF] px-2 rounded-sm'>OFFER</button>
            <h3 className='font-semibold text-2xl mt-5'>Download the App & get</h3>
            <h3 className='font-semibold text-2xl'>₹ 200 HealthCash</h3>
            <button className="mt-5 px-5 py-1 bg-[#383E56] text-white text-lg rounded-lg shadow hover:bg-[#D84040]">
              Download Now
            </button>
          </div>
          <div className='flex-1 bg-[#FEBA7F] rounded-lg p-4'>
            <button className='bg-white text-[#FEBA7F] px-2 rounded-sm'>OFFER</button>
            <h3 className='font-semibold text-2xl mt-5'>Consult with specialists at</h3>
            <h3 className='font-semibold text-2xl'>just ₹199</h3>
            <button className="mt-5 px-5 py-1 bg-[#2C3930] text-white text-lg rounded-lg shadow hover:bg-[#D84040]">
              Consult Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
