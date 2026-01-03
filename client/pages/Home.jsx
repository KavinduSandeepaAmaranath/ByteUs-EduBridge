import { ArrowRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
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
            <div className='flex justify-between items-center sm:h-[600px]'>
                <div className='text-center'>
                    <h1 className='md:text-7xl sm:text-5xl text-5xl font-bold'><span className='bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Learning</span> Made</h1>
                    <h1 className='md:text-7xl sm:text-5xl font-bold text-5xl'>Simple</h1>
                    <p className='sm:text-lg md:text-xl text-base sm:mt-10 mt-5 font-semibold'>A simple web-basedplatform that helps <br /> teachers share lessons <br /> andtrack studentlearning progress easily.</p>
                    <div className='flex items-center justify-center text-white'>
                        <Link to={'/login'}><div className='flex justify-center sm:mt-10 mt-5 bg-[#3B82F6] sm:w-50  rounded-xl sm:px-5 sm:py-3 px-2 py-2 font-bold group hover:scale-105 transition-all duration-300'> 
                            <button>GET STARTED</button>
                            <ArrowRight />
                        </div></Link>
                    </div>
                </div>
                <div className='order-2 sm:order-1'>
                    <img src="frontbanner.png" alt="" />
                </div>
            </div>
            <div className='mt-10'>
                <div className='flex items-center justify-center'>
                    <h1 className='sm:text-6xl md:text-7xl font-bold text-5xl text-[#3B82F6]'>Features</h1>
                </div>
                <div className='text-center mt-5 sm:mt-10 justify-center sm:flex sm:gap-20'>
                    <div className='bg-[#3B82F6]/15 w-70 h-90 rounded-2xl hover:scale-105 hover:shadow-xl shadow-blue-100 transition-all duration-300'>
                        <div className='justify-center flex'>
                            <div className='rounded-full bg-white flex justify-center w-20 h-20 items-center mt-10'>
                                <img src="student.png" alt="" className='sm:w-30 sm:h-20' />
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <div className='justify-center items-center mt-5 font-bold text-black text-2xl'>
                                <h1>Learn easily</h1>
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <div className='rounded-fullflex justify-center items-center mt-5 font-semibold text-black text-xl'>
                                <p className='text-center'>Access learning <br /> materials anytime, <br /> anywhere.</p>
                            </div>
                        </div>                      
                    </div>
                    <div className='bg-[#3B82F6]/15 w-70 h-90 rounded-2xl hover:scale-105 hover:shadow-xl shadow-blue-100 transition-all duration-300'>
                        <div className='justify-center flex'>
                            <div className='rounded-full bg-white flex justify-center w-20 h-20 items-center mt-10'>
                                <img src="teacher.png" alt="" className='sm:w-30 sm:h-15' />
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <div className='justify-center items-center mt-5 font-bold text-black text-2xl'>
                                <h1>Teach simply</h1>
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <div className='rounded-fullflex justify-center items-center mt-5 font-semibold text-black text-xl'>
                                <p className='text-center'>Teachers can share <br /> lessons and track <br /> progress</p>
                            </div>
                        </div>                      
                    </div>
                    <div className='bg-[#3B82F6]/15 w-70 h-90 rounded-2xl hover:scale-105 hover:shadow-xl shadow-blue-100 transition-all duration-300'>
                        <div className='justify-center flex'>
                            <div className='rounded-full bg-white flex justify-center w-20 h-20 items-center mt-10'>
                                <img src="progress.png" alt="" className='sm:w-30 sm:h-25' />
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <div className='justify-center items-center mt-5 font-bold text-black text-2xl'>
                                <h1>Track progress</h1>
                            </div>
                        </div>
                        <div className='justify-center flex'>
                            <div className='rounded-fullflex justify-center items-center mt-5 font-semibold text-black text-xl'>
                                <p className='text-center'>Students and<br /> teachers can monitor <br />  learning completion.</p>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center sm:h-[600px] sm:mr-30'>
                <div className=''>
                    <img src="Inequalities-removebg.png" alt="" />
                </div>
                <div className='text-center'>
                    <h1 className='md:text-7xl sm:text-5xl text-5xl font-bold'><span className='bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Reduced</span> <br /> Inequalities</h1>
                    <p className='sm:text-lg md:text-xl text-base sm:mt-10 mt-5 font-semibold'>Promoting fairness and inclusivity by giving  <br /> every student the tools and resources they <br /> need to succeed, reducing educational <br /> inequalities.</p>
                </div>
            </div>
    </motion.div>
     <div className='w-full h-20 bottom-0 bg-[#3B82F6]/15 flex justify-center items-center font-semibold'>
        <p>©️ 2025 EduBridge | Built by ByteUs</p>
    </div>
  </> 
  )
}

export default Home