import { X } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Register = () => {

    const[isTeacher, setIsTeacher] = useState(false)
    const toggleTeacher = () => setIsTeacher(!isTeacher)

    const[name, setName] = useState('')
    const[studentId, setStudentId] = useState('')
    const[teacherId, setTeacherId] = useState('')
    const[email, setEmail] = useState('')
    const[passsword, setPassword] = useState('')
    const[error, setError] = useState('')
    const[success, setSuccess] = useState('')
    const[loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        setSuccess('')

        const userData = {
            name: name,
            email: email,
            password: passsword,
            role: isTeacher ? 'teacher' : 'student',
            ...(isTeacher ? {teacher: teacherId} : {student: studentId})
        }
          const url = isTeacher 
          ? 'http://localhost:5000/api/auth/teacherRegister'
          : 'http://localhost:5000/api/auth/studentRegister'
        try{
              const response = await fetch(url, {
          method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(userData)
        })
            const data  = await response.json()

            if(response.ok){
                setSuccess('Registration successfully')
                setName('')
                setEmail('')
                setPassword('')
                setStudentId('')
                setTeacherId('')
            }else{
                setError('Registration failed')
            }
        }catch(error){
            setError('Server did not response')
        }finally{
            setLoading(false)
        }
    }

  return (
    <motion.div 
    initial={{opacity:0, scale:0.8}}
    animate={{opacity:1, scale: 1}}
    transition={{
        type:'spring',
        damping:20,
        stiffness:200
    }}
    className='min-h-screen bg-[#3B82F6]/10 flex items-center justify-center'>
        <div className='min-w-md bg-[#3B82F6]/15 p-5 rounded-xl'>
            <div className='flex items-center justify-center sm:text-2xl font-bold mb-10'>
                <div>
                    <h1>Register</h1>
                </div>
            </div>
            <div className='mt-5 mb-5'>
                <h1 className='text-lg font-semibold text-gray-600'> {isTeacher ? 'If you you are a student' : "If you are a teacher"} <span className='font-bold text-black hover:border-b-2' onClick={toggleTeacher}>{isTeacher ? "Click here" : "Click here"}</span></h1>
            </div>

            {error && (
                <div className='bg-red-400 text-white p-3 rounded-2xl'>
                    {error}
                </div>
            )}

            {success && (
                <div className='bg-green-500 text-white p-3 rounded-2xl'>
                    {success}
                </div>
            )}

            <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className='block text-xl font-bold'>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id='name' className='w-full bg-gray-50 py-3 px-5 rounded-2xl mt-3 font-semibold text-gray-600' placeholder='Enter your name here' />
                    </div>

                {!isTeacher && (
                    <div className='mt-5'>
                        <label htmlFor="studentId" className='block text-xl font-bold'>Student ID</label>
                        <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} id='studentId' className='w-full bg-gray-50 py-3 px-5 rounded-2xl mt-3 font-semibold text-gray-600' placeholder='Enter your student ID here' />
                    </div>
                )}
                {isTeacher && (
                    <div className='mt-5'>
                        <label htmlFor="teacherId" className='block text-xl font-bold'>Teacher ID</label>
                        <input type="text" value={teacherId} onChange={(e) => setTeacherId(e.target.value)} id='teacherId' className='w-full bg-gray-50 py-3 px-5 rounded-2xl mt-3 font-semibold text-gray-600' placeholder='Enter your student ID here' />
                    </div>
                )}
                <div className='mt-5'>
                    <label htmlFor="email" className='block text-xl font-bold'>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='email' className='w-full bg-gray-50 py-3 px-5 rounded-2xl mt-3 font-semibold text-gray-600' placeholder='Enter your email' />
                </div>
                <div>
                    <label htmlFor="password" className='block text-xl font-bold mt-5'>Password</label>
                    <input type="password" value={passsword} onChange={(e) => setPassword(e.target.value)} id='password' className='w-full bg-gray-50 py-3 px-5 rounded-2xl mt-3 font-semibold text-gray-600' placeholder='Enter your password here' />
                </div>
                <div>
                    <button type='submit' className='bg-[#3B82F6] text-white w-full font-bold py-2 mt-10 rounded-3xl'>{loading ? 'Submitting' : 'Submit'}</button>
                </div>
            </form>
        </div>
    </motion.div>
  )
}

export default Register