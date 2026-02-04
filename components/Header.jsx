"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Authenticated, Unauthenticated } from 'convex/react'
import { BarLoader } from 'react-spinners'
import { useStoreUser } from '@/hooks/use-store-user.js'

const Header = () => {
    const {isLoading, isAuthenticated} = useStoreUser();
    console.log(isLoading);
  return (
    <nav className=' bg-linear-to-r text-4xl  fixed top-0 from-black via-gray-950/60 to-gray-950/40 w-full z-10 ' >
        
        <div className='flex h-20 justify-around items-center ' >
            <Link href="/">
                <Image src="/spott.png" width={90} height={40} alt="Logo" />
            </Link>
            <div className='w-1/3' >
                search
            </div>
            <div className='flex justify-center items-center gap-14 mr-20' >
                <div className=' pr-12 '>
                    hello
                    <Button variant='ghost' asChild  >
                        <Link href={"/pricing"} className='mr-12' >
                        Pricing </Link>
                    </Button>
                </div>
                <div className='p-8' >
                    button
                </div>
                <div className='p-8' >
                    button
                </div>
                {/* Show the user button when the user is signed in */}
                <div className='pr-[10rem]' >
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
        </div>
        <div>
            {/* mobile search */}
        </div>
        {isLoading && 
        <div className='w-full bottom-0 absolute' >
            <BarLoader  width={"100%"} color='#eb1bfe'  />
        </div>
        }
    </nav>
  )
}

export default Header