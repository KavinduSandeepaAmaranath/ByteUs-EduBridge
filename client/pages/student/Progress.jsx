import React from 'react'
import { Link } from 'react-router-dom'

const Progress = () => {
  return (
    <motion.div 
    initial={{opacity:0, scale:0.8}}
    animate={{opacity:1, scale: 1}}
    transition={{
        type:'spring',
        damping:20,
        stiffness:200
    }}
    className='mt-20 w-full'>
        <div className='bg-[#3B82F6]/15 w-100 h-[750px]'>
            <div className='flex items-center justify-center gap-5'>
                <div className='bg-white rounded-full mt-5'>
                    <img src="stuprofile.png" alt="" className='w-15 h-15 p-2' />
                </div>
                <div className='mt-5'>
                    <h1 className='font-bold text-2xl'>Student ID</h1>
                </div>
            </div>
            <div>
                <div className='bg-[#3B82F6] p-6 mt-10'>
                    <Link to={'/dashboard'}><h1 className='font-bold text-white text-center text-2xl'>User Info</h1></Link>
                </div>
            </div>
            <div>
                <div className='bg-[#3B82F6] p-6 mt-20'>
                    <Link to={'/cources'}><h1 className='font-bold text-white text-center text-2xl'>Courses</h1></Link>
                </div>
            </div>
            <div>
                <div className='bg-[#3B82F6] p-6 mt-20'>
                    <h1 className='font-bold text-white text-center text-2xl'>Progress</h1>
                </div>
            </div>
            <div>
                <div className='bg-[#3B82F6] p-6 mt-20'>
                    <Link to={'/'}><h1 className='font-bold text-white text-center text-2xl'>Log out</h1></Link>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Progress