"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Authenticated, Unauthenticated } from 'convex/react'

const Header = () => {
  return (
    <nav className=' bg-linear-to-r  from-black via-gray-950/60 to-gray-950/40 w-full z-10 ' >
        <div className='flex h-20 justify-around items-center ' >
            <Link href="/">
                <Image src="/spott.png" width={90} height={40} alt="Logo" />
            </Link>
            <div className='w-1/3' >
                search
            </div>
            <div>
                {/* Show the user button when the user is signed in */}
                <Authenticated>
                    <UserButton />
                </Authenticated>

                
                <Unauthenticated>
                    <SignInButton mode="modal"  >
                        <Button size="sm" >sign In</Button>
                    </SignInButton>
                </Unauthenticated>
            
            </div>
        </div>
        <div>
            
        </div>
    </nav>
  )
}

export default Header