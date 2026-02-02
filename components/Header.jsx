import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <nav className='fixed top-0 bg-linear-to-r  from-black via-gray-950/60 to-gray-950/40 w-full z-10' >
        <div className='flex h-20 justify-around items-center' >
            <Link href="/">
                <Image src="/spott.png" width={90} height={40} alt="Logo" />
            </Link>
            <div className='w-1/3' >
                search
            </div>
            <div>
                <Button variant="ghost">Login</Button>
            </div>
        </div>
        <div>
            
        </div>
    </nav>
  )
}

export default Header