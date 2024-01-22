import React from 'react'
import Link from 'next/link'
import {FiPlusCircle, FiHome} from "react-icons/fi"

const Navbar = () => {
  return (
    <nav className='flex gap-6 justify-between items-center cursor-pointer'>
        <Link href={'/'} className='flex items-center gap-1'>
            <FiHome/> <span>Home</span>
        </Link>  
        <Link href={'/create'} className='flex items-center gap-1'>
            <FiPlusCircle/> <span>Create</span>
        </Link>  
          </nav>
  )
}

export default Navbar