import React from 'react'

const About = () => {
  return (
    <div>
        <div>
            <div className='flex justify-between items-center sm:h-[600px] gap-30'>
                <div className='text-center w-full'>
                    <h1 className='md:text-7xl sm:text-5xl text-5xl font-bold'>About <span className='bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'><br /> EDUBRIDGE</span></h1>
                    <p className='sm:text-lg md:text-xl text-base sm:mt-10 mt-5 font-semibold'>Choose courses, learn at your own pace,  <br /> and monitor your academic  <br /> progress.</p>
                </div>
                <div className='w-full'>
                  <img src="courses.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About