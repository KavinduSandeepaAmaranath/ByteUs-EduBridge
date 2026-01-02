import { X } from 'lucide-react'
import React, { useState } from 'react'

const Login = () => {

    const[isTeacher, setIsTeacher] = useState(false)
    const toggleTeacher = () => setIsTeacher(!isTeacher)

  return (
    <div className='min-h-screen bg-lime-50 backdrop-blur-3xl flex items-center justify-center'>
        <div className='min-w-md bg-lime-300/50 p-10 rounded-xl'>
            <div className='flex items-center justify-between sm:text-2xl font-bold'>
                <div>
                    <h1>Login form</h1>
                </div>
                <div>
                    <button>
                        <X />
                    </button>
                </div>
            </div>
            <div className='mt-5 mb-5'>
                <h1 className='text-lg font-semibold text-gray-600'> {isTeacher ? 'If you you are a student' : "If you are a teacher"} <span className='font-bold text-black hover:border-b-2' onClick={toggleTeacher}>{isTeacher ? "Click here" : "Click here"}</span></h1>
            </div>
            <form action="">
                {!isTeacher && (
                    <div>
                        <label htmlFor="" className='block text-xl font-bold'>Student ID</label>
                        <input type="text" className='w-full bg-gray-50 py-3 px-5 rounded-2xl mt-3 font-semibold text-gray-600' placeholder='Enter your student ID here' />
                    </div>
                )}
                {isTeacher && (
                    <div>
                        <label htmlFor="" className='block text-xl font-bold'>Teacher ID</label>
                        <input type="text" className='w-full bg-gray-50 py-3 px-5 rounded-2xl mt-3 font-semibold text-gray-600' placeholder='Enter your student ID here' />
                    </div>
                )}
                <div>
                    <label htmlFor="" className='block text-xl font-bold mt-5'>Password</label>
                    <input type="password" className='w-full bg-gray-50 py-3 px-5 rounded-2xl mt-3 font-semibold text-gray-600' placeholder='Enter your password here' />
                </div>
                <div>
                    <button type='submit' className='bg-amber-300 w-full py-2 mt-10 rounded-3xl text-lg font-bold'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
