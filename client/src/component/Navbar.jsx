import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const[mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => setMobileMenu(!mobileMenu)

  return (
    <header className='fixed top-0 z-50 w-full'>
        <div className='bg-amber-300/20 sm:p-5 p-3 sm:px-20 px-10 backdrop-blur-lg flex items-center justify-between' >
            <div>
                <h1 className='sm:text-xl font-bold'>EduBridge</h1>
            </div>
            <div className='flex items-center space-x-10 hidden sm:flex'>
                <div className='bg-blue-400 px-5 py-2 rounded-2xl font-bold'>
                    <Link to={'/login'}><button>Log in</button></Link>
                </div>
                <div className='bg-blue-400 px-5 py-2 rounded-2xl font-bold'>
                    <Link to={'/register'}><button>Register</button></Link>
                </div>
            </div>
            <div onClick={toggleMenu} className='flex sm:hidden'>
                {mobileMenu ? <X className='w-6 h-6'/> : <Menu className='w-6 h-6' />}
            </div>
        </div>
        {mobileMenu && (
            <motion.div 
            initial={{opacity:0 ,scale:0.8}}
            animate={{opacity:1, scale: 1}}
            transition={{
                type:'spring',
                damping:20,
                stiffness:200
            }}
            className='flex flex-col items-center justify-center mt-5 space-y-5'>
                <div className='text-xl font-bold'>
                    <button>Log in</button>
                </div>
                <div className='text-xl font-bold'>
                    <button>Register</button>
                </div>
            </motion.div>
        )}
    </header>
  )
}

export default Navbar