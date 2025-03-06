import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

function Newpage() {
    const navigate = useNavigate();

    return (
        <div className='bg-[#E8F9FF] min-h-screen flex items-center justify-center p-2'>
            <div className='bg-white rounded-lg shadow-lg w-full max-w-lg overflow-hidden'>
                <div className='flex items-center justify-between p-4 border-b border-gray-200'>
                    <h2 className='text-xl font-semibold text-gray-800'>Consult with a Doctor</h2>
                    <button 
                        onClick={() => navigate('/find-experts')}
                        className='text-gray-500 hover:text-gray-700 transition-colors duration-200'
                    >
                        <RxCross2 className='w-5 h-5' />
                    </button>
                </div>
                <div className='p-4'>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Tell us your symptom or health problem
                        </label>
                        <textarea 
                            rows={3}
                            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0C878] focus:border-transparent'
                            placeholder='Eg: fever, cold'
                        />
                    </div>
                    <p className='text-sm text-gray-500 mb-4'>
                        A relevant speciality will be shown below...
                    </p>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                            Mobile Number
                        </label>
                        <input 
                            type='text'
                            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0C878] focus:border-transparent'
                        />
                        <p className='text-xs text-gray-400 mt-1'>
                            A verification code will be sent to this number.
                        </p>
                    </div>
                    <button 
                        className='w-full bg-[#A0C878] text-white font-semibold py-2 rounded-lg hover:bg-[#8CB567] transition-colors duration-200 hover:bg-[#13005A]'
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Newpage;