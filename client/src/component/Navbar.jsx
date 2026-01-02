import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const[mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => setMobileMenu(!mobileMenu)

  return (
    <header className='fixed top-0 z-50 w-full'>
        <div className='bg-[#F8FAFC]/20 sm:p-5 sm:px-20 px-10 backdrop-blur-lg flex items-center justify-between' >
            <div>
                <Link to={'/'}><img src="Logo - Edubridge (1).png" className='sm:h-11 sm:w-15 h-11' alt="" /></Link>
            </div>
            <ul className='space-x-5 text-lg font-bold md:flex hidden'>
                <Link><li>Cources</li></Link>
                <Link><li>Resources</li></Link>
                <Link><li>About</li></Link>
                <Link><li>Dashboard</li></Link>
            </ul>
            <div className='items-center space-x-10 hidden md:flex'>
                <div className='bg-[#3B82F6] px-5 py-2 rounded-xl font-bold text-white w-32 text-center'>
                    <Link to={'/login'}><button>LOGIN</button></Link>
                </div>
                <div className='bg-[#3B82F6] px-5 py-2 rounded-xl font-bold text-white w-32 text-center'>
                    <Link to={'/register'}><button>REGISTER</button></Link>
                </div>
            </div>
            <div onClick={toggleMenu} className='flex md:hidden'>
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