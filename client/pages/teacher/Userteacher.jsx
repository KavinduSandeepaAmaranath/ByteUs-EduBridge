import React from 'react'
import { Link } from 'react-router-dom'

const Userteacher = () => {
  return (
    <div className='mt-20 w-full flex'>
        <div className='bg-[#3B82F6]/15 w-100 h-[750px]'>
            <div className='flex items-center justify-center gap-5'>
                <div className='bg-white rounded-full mt-5'>
                    <img src="stuprofile.png" alt="" className='w-15 h-15 p-2' />
                </div>
                <div className='mt-5'>
                    <h1 className='font-bold text-2xl'>Teacher ID</h1>
                </div>
            </div>
            <div>
                <div className='bg-[#3B82F6] p-6 mt-10'>
                    <h1 className='font-bold text-white text-center text-2xl'>User Info</h1>
                </div>
            </div>
            <div>
                <div className='bg-[#3B82F6] p-6 mt-20'>
                    <Link to={'/teachercources'}><h1 className='font-bold text-white text-center text-2xl'>Courses</h1></Link>
                </div>
            </div>
            <div>
                <div className='bg-[#3B82F6] p-6 mt-20'>
                    <Link to={'/teacherprogress'}><h1 className='font-bold text-white text-center text-2xl'>Progress</h1></Link>
                </div>
            </div>
            <div>
                <div className='bg-[#3B82F6] p-6 mt-20'>
                    <Link to={'/'}><h1 className='font-bold text-white text-center text-2xl'>Log out</h1></Link>
                </div>
            </div>
        </div>
        <div className='w-full h-[750px] bg-[#3B82F6]/10 flex justify-center items-center'>
            <div className='flex items-center justify-center min-w-md rounded-2xl  bg-[#3B82F6]/30 p-10'>
                <form action="" className='space-y-10'>
                    <div className='flex items-center gap-10 '>
                        <label htmlFor="name" className='block text-xl font-bold w-32'>Name</label>
                        <input type="text" id='name' className='w-full bg-gray-50 py-3 px-5 rounded-2xl font-semibold text-gray-600' placeholder='Enter your name here' />
                    </div>
                    <div className='flex items-center gap-10 '>
                        <label htmlFor="name" className='block text-xl font-bold w-32'>Email</label>
                        <input type="text" id='email' className='w-full bg-gray-50 py-3 px-5 rounded-2xl font-semibold text-gray-600' placeholder='Enter your email here' />
                    </div>
                    <div className='flex items-center gap-10'>
                        <label htmlFor="name" className='block text-xl font-bold w-32'>Teacher ID</label>
                        <input type="text" id='name' className='w-full bg-gray-50 py-3 px-5 rounded-2xl font-semibold text-gray-600' placeholder='Enter your student ID' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Userteacher