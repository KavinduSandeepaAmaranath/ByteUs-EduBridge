import { Lightbulb } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0, scale:0.8}}
    animate={{opacity:1, scale:1}}
    transition={{
    type:'spring',
    damping:20,
    stiffness:200,
    duration:1.2
    }}
    className='m-20'>
        <div>
            <div className='flex justify-between items-center sm:h-[600px] gap-30'>
                <div className='text-center w-full'>
                    <h1 className='md:text-7xl sm:text-5xl text-5xl font-bold'>About <span className='bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'><br /> EDUBRIDGE</span></h1>
                    <p className='sm:text-lg md:text-xl text-base sm:mt-10 mt-5 font-semibold'><span className='bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'>EDUBRIDGE</span> is a simple web-based <br /> learning and progress tracking <br /> platform designed to support <br /> inclusive and equitable access to <br /> education.</p>
                </div>
                <div className='w-full'>
                  <img src="courses.png" alt="" />
                </div>
            </div>
            <div>
                <div className='flex items-center justify-center'>
                    <h1 className='sm:text-6xl md:text-7xl font-bold text-5xl'>Our <span className='text-[#3B82F6]'>Mission</span></h1>
                </div>
                <div>
                    <p className='sm:text-lg md:text-xl text-base sm:mt-10 mt-5 font-semibold text-center'>To reduce learning gaps by providing a lightweight and easy-to-use digital learning <br /> platform that supports quality education for everyone.</p>
                </div>
            </div>
            <div className='mt-20'>
                <div className='flex items-center justify-items-start'>
                    <h1 className='sm:text-6xl md:text-7xl font-bold text-5xl'>What <span className='text-[#3B82F6]'>We</span> Do</h1>
                </div>
                <div>
                    <div className='flex justify-items-start ml-10 mt-10 items-center gap-5'>
                        <div>
                            <Lightbulb />
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>Support learning</h1>
                        </div>
                    </div>
                    <div>
                        <p className='sm:text-lg md:text-xl text-base sm:mt-5 ml-30 mt-1 font-semibold '>Provide structured courses and learning <br /> materials for students.</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-items-start ml-10 mt-10 items-center gap-5'>
                        <div>
                            <Lightbulb />
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>Track progress</h1>
                        </div>
                    </div>
                    <div>
                        <p className='sm:text-lg md:text-xl text-base sm:mt-5 ml-30 mt-1 font-semibold '>Help educators monitor student performance <br /> and completion.</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-items-start ml-10 mt-10 items-center gap-5'>
                        <div>
                            <Lightbulb />
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>Promote Inclusion</h1>
                        </div>
                    </div>
                    <div>
                        <p className='sm:text-lg md:text-xl text-base sm:mt-5 ml-30 mt-1 font-semibold '>Ensure equal learning opportunities <br /> regardless of background.</p>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About