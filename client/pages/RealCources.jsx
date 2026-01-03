import React from 'react'
import { motion } from 'framer-motion'

const RealCources = () => {
  return (
    <>
      <motion.div
      initial={{opacity:0, scale:0.8}}
      animate={{opacity:1, scale:1}}
      transition={{
      type:'spring',
      damping:20,
      stiffness:200,
      duration:1.2
      }}
      className='sm:mt-20 sm:mr-20 sm:ml-20 mt-20'>
          <div className='flex justify-between items-center sm:h-[600px] gap-30'>
              <div className='w-full'>
                  <img src="courses.png" alt="" />
              </div>
              <div className='text-center w-full'>
                  <h1 className='md:text-7xl sm:text-5xl text-5xl font-bold'>Your <span className='bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Learning</span> <br /> Journey</h1>
                  <p className='sm:text-lg md:text-xl text-base sm:mt-10 mt-5 font-semibold'>Choose courses, learn at your own pace,  <br /> and monitor your academic  <br /> progress.</p>
              </div>
          </div>
      </motion.div>
      <div className='mt-10'>
                <div className='flex items-center justify-center'>
                    <h1 className='sm:text-6xl md:text-7xl font-bold text-5xl'>Our <span className='text-[#3B82F6]'>Cources</span></h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 m-20 lg:grid-cols-4 text-center mt-5 sm:mt-10 justify-center sm:gap-20'>
                    <div className='bg-[#3B82F6]/15 w-70 h-full rounded-2xl hover:scale-105 hover:shadow-xl shadow-blue-100 transition-all duration-300'>
                        <div className='justify-center flex'>
                            <div className=' flex justify-center items-center mt-10 w-full'>
                                <img src="Introduction to Digital Literacy.png" alt="" className='sm:w-50 sm:h-40' />
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <div className='justify-center items-center mt-5 font-bold text-black text-2xl'>
                                <h1>Introduction to Digital literacy</h1>
                            </div>
                        </div>
                        <div className='justify-center flex p-2'>
                            <div className='rounded-fullflex justify-center items-center mt-5 font-semibold text-black text-sm'>
                                <p className='text-center'>Learn the basics of using digital tools, online platforms, and technology safely and effectively</p>
                            </div>
                        </div> 
                        <div className='flex items-center justify-center mb-10 mt-5'>
                          <div className='bg-[#3B82F6] px-5 py-3 rounded-2xl text-white font-bold w-40'>
                              <button>Enroll now</button>
                          </div>
                        </div>                     
                    </div>
                    <div className='bg-[#3B82F6]/15 w-70 h-full rounded-2xl hover:scale-105 hover:shadow-xl shadow-blue-100 transition-all duration-300'>
                        <div className='justify-center flex'>
                            <div className=' flex justify-center items-center mt-10 w-full'>
                                <img src="Fundamentals of Programming.png" alt="" className='sm:w-50 sm:h-40' />
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <div className='justify-center items-center mt-5 font-bold text-black text-2xl'>
                                <h1>Fundamentals of Programming</h1>
                            </div>
                        </div>
                        <div className='justify-center flex p-2'>
                            <div className='rounded-fullflex justify-center items-center mt-5 font-semibold text-black text-sm'>
                                <p className='text-center'>Understand core programming concepts such as logic, problem-solving, and basic coding ideas.</p>
                            </div>
                        </div> 
                        <div className='flex items-center justify-center mb-10 mt-5'>
                          <div className='bg-[#3B82F6] px-5 py-3 rounded-2xl text-white font-bold w-40'>
                              <button>Enroll now</button>
                          </div>
                        </div>                     
                    </div>
                    <div className='bg-[#3B82F6]/15 w-70 h-full rounded-2xl hover:scale-105 hover:shadow-xl shadow-blue-100 transition-all duration-300'>
                        <div className='justify-center flex'>
                            <div className=' flex justify-center items-center mt-10 w-full'>
                                <img src="Basic Mathematics for Everyday Use.png" alt="" className='sm:w-50 sm:h-40' />
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <div className='justify-center items-center mt-5 font-bold text-black text-2xl'>
                                <h1>Basic Mathematics for Everyday Use</h1>
                            </div>
                        </div>
                        <div className='justify-center flex p-2'>
                            <div className='rounded-fullflex justify-center items-center mt-5 font-semibold text-black text-sm'>
                                <p className='text-center'>Strengthen essential math skills used in daily life and academic learning.</p>
                            </div>
                        </div> 
                        <div className='flex items-center justify-center mb-10 mt-5'>
                          <div className='bg-[#3B82F6] px-5 py-3 rounded-2xl text-white font-bold w-40'>
                              <button>Enroll now</button>
                          </div>
                        </div>                     
                    </div>
                    <div className='bg-[#3B82F6]/15 w-70 h-full rounded-2xl hover:scale-105 hover:shadow-xl shadow-blue-100 transition-all duration-300'>
                        <div className='justify-center flex'>
                            <div className=' flex justify-center items-center mt-10 w-full'>
                                <img src="Effective Communication Skills copy.png" alt="" className='sm:w-50 sm:h-40' />
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <div className='justify-center items-center mt-5 font-bold text-black text-2xl'>
                                <h1>Effective Communication Skills</h1>
                            </div>
                        </div>
                        <div className='justify-center flex p-2'>
                            <div className='rounded-fullflex justify-center items-center mt-5 font-semibold text-black text-sm'>
                                <p className='text-center'>Develop clear communication skills for presentations, teamwork, and academic success.</p>
                            </div>
                        </div> 
                        <div className='flex items-center justify-center mb-10 mt-5'>
                          <div className='bg-[#3B82F6] px-5 py-3 rounded-2xl text-white font-bold w-40'>
                              <button>Enroll now</button>
                          </div>
                        </div>                     
                    </div>
                    <div className='bg-[#3B82F6]/15 w-70 h-full rounded-2xl hover:scale-105 hover:shadow-xl shadow-blue-100 transition-all duration-300'>
                        <div className='justify-center flex'>
                            <div className=' flex justify-center items-center mt-10 w-full'>
                                <img src="Introduction to Digital Literacy copy.png" alt="" className='sm:w-50 sm:h-40' />
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <div className='justify-center items-center mt-5 font-bold text-black text-2xl'>
                                <h1>Introduction to Online Learning</h1>
                            </div>
                        </div>
                        <div className='justify-center flex p-2'>
                            <div className='rounded-fullflex justify-center items-center mt-5 font-semibold text-black text-sm'>
                                <p className='text-center'>Learn how to manage time, stay motivated, and succeed in an online learning environment.</p>
                            </div>
                        </div> 
                        <div className='flex items-center justify-center mb-10 mt-5'>
                          <div className='bg-[#3B82F6] px-5 py-3 rounded-2xl text-white font-bold w-40'>
                              <button>Enroll now</button>
                          </div>
                        </div>                     
                    </div>
                </div>
            </div>
            <div className='w-full h-20 bottom-0 bg-[#3B82F6]/15 flex justify-center items-center font-semibold mt-10'>
              <p>©️ 2025 EduBridge | Built by ByteUs</p>
            </div>
    </>
  )
}

export default RealCources