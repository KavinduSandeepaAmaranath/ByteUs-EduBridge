import { Link, X } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Login = () => {

    const[isTeacher, setIsTeacher] = useState(false)
    const toggleTeacher = () => setIsTeacher(!isTeacher)

    const[studentId, setStudentId] = useState('')
    const[teacherId, setTeacherId] = useState('')
    const[password, setPassword] = useState('')
    const[success, setSuccess] = useState('')
    const[error, setError] = useState('')
    const[loading, setLoading] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        setSuccess('')

        const userData = {
            password: password,
            role: isTeacher ? 'teacher' : 'student',
            ...(isTeacher ? {teacher: teacherId} : {student: studentId})
        }

        try{
            const response = await fetch('',{
                method: 'POST',
                header: {
                    header: ''
                },
                body: JSON.stringify(userData)
            })
            const data  = await response.json()

            if(response.ok){
                setSuccess('Login successfully')
                setPassword('')
                setStudentId('')
                setTeacherId('')
            }else{
                setError('Login failed')
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
    className='min-h-screen bg-[#3B82F6]/10 backdrop-blur-3xl flex items-center justify-center'>
        <div className='min-w-md bg-[#3B82F6]/15 p-10 rounded-xl'>
            <div className='flex items-center justify-center sm:text-2xl font-bold mb-10'>
                <div>
                    <h1>Login form</h1>
                </div>
            </div>
            <div className='mt-5 mb-5'>
                <h1 className='text-lg font-semibold text-gray-600'> {isTeacher ? 'If you you are a student' : "If you are a teacher"} <span className='font-bold text-black hover:border-b-2' onClick={toggleTeacher}>{isTeacher ? "Click here" : "Click here"}</span></h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
                {!isTeacher && (
                    <div>
                        <label htmlFor="studentId" className='block text-xl font-bold'>Student ID</label>
                        <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} id='studentId' className='w-full bg-gray-50 py-3 px-5 rounded-2xl mt-3 font-semibold text-gray-600' placeholder='Enter your student ID here' />
                    </div>
                )}
                {isTeacher && (
                    <div>
                        <label htmlFor="teacherId" className='block text-xl font-bold'>Teacher ID</label>
                        <input type="text" value={teacherId} onChange={(e) => setTeacherId(e.target.value)} id='teacherId' className='w-full bg-gray-50 py-3 px-5 rounded-2xl mt-3 font-semibold text-gray-600' placeholder='Enter your student ID here' />
                    </div>
                )}
                <div>
                    <label htmlFor="passsword" className='block text-xl font-bold mt-5'>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id='password' className='w-full bg-gray-50 py-3 px-5 rounded-2xl mt-3 font-semibold text-gray-600' placeholder='Enter your password here' />
                </div>
                <div>
                    <button type='submit' className='bg-[#3B82F6] text-white w-full py-2 mt-10 rounded-3xl text-lg font-bold'>Submit</button>
                </div>
            </form>
        </div>
    </motion.div>
  )
}

export default Login

