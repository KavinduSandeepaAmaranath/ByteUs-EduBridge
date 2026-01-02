import { Check, Trash } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Teachercources = () => {
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
                    <Link to={'/userteacher'}><h1 className='font-bold text-white text-center text-2xl'>User Info</h1></Link>
                </div>
            </div>
            <div>
                <div className='bg-[#3B82F6] p-6 mt-20'>
                    <h1 className='font-bold text-white text-center text-2xl'>Courses</h1>
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
            <div className='items-center justify-center min-w-md rounded-2xl  bg-[#3B82F6]/30 p-10 space-y-10'>
                <div>
                    <div>
                        <h1 className='font-bold text-xl'>Your Cources</h1>
                        <hr className='text-gray-500 mt-1'/>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='bg-white min-w-sm rounded-2xl '>
                        <h1 className='text-center p-4 font-bold'>Couse name</h1>
                    </div>
                    <div className='bg-[#3B82F6] px-5 py-3 rounded-2xl text-white font-bold'>
                        <Link to={'/addlesson'}><button>ADD</button></Link>
                    </div>
                    <div>
                        <Trash />
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='bg-white min-w-sm rounded-2xl'>
                        <h1 className='text-center p-4 font-bold'>Couse name</h1>
                    </div>
                    <div className='bg-[#3B82F6] px-5 py-3 rounded-2xl text-white font-bold'>
                        <Link to={'/addlesson'}><button>ADD</button></Link>
                    </div>
                    <div>
                        <Trash />
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='bg-white min-w-sm rounded-2xl'>
                        <h1 className='text-center p-4 font-bold'>Couse name</h1>
                    </div>
                    <div className='bg-[#3B82F6] px-5 py-3 rounded-2xl text-white font-bold'>
                        <Link to={'/addlesson'}><button>ADD</button></Link>
                    </div>
                    <div>
                        <Trash />
                    </div>
                </div>
                <div>
                    <div className='bg-[#3B82F6] px-5 py-3 rounded-2xl text-white font-bold w-50 text-center'>
                        <Link to={'/addcources'}><button>Add new cources</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Teachercources