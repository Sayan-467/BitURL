import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-20 bg-purple-700 flex justify-between items-center px-6 text-white'>
        <div className='logo font-bold text-lg'>
        <Link href="/">BitURL</Link>
        </div>
        <ul className='flex justify-center items-center gap-4'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact us</li></Link>
            <li className='flex gap-3'>
                <Link href="/shorten"><button className='bg-purple-500 shadow-lg px-3 rounded-lg py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 shadow-lg px-3 rounded-lg py-1 font-bold'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
