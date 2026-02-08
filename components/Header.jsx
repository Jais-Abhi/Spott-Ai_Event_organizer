"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Authenticated, Unauthenticated } from 'convex/react'
import { BarLoader } from 'react-spinners'
import { useStoreUser } from '@/hooks/use-store-user.js'
import { Building, Plus, Ticket } from 'lucide-react'

const Header = () => {
    const {isLoading, isAuthenticated} = useStoreUser();
    console.log(isLoading);
  return (
    <nav className=' bg-linear-to-r  fixed top-0 from-black via-gray-950/60 to-gray-950/40 w-full z-10 ' >
        <div className='flex h-20 justify-around items-center  ' >
            <Link href="/">
                <Image src="/spott.png" width={90} height={40} alt="Logo" />
            </Link>
            <div className='w-1/3' >
                search
            </div>
            <div className='flex items-center' >
                <div className=' flex justify-center items-center mr-2 '>
                    <Button variant='ghost' asChild  >
                        <Link href={"/pricing"} className='' >
                        Pricing </Link>
                    </Button>
                    <Button variant='ghost' asChild  >
                        <Link href={"/explore"} className='' >
                        Explore </Link>
                    </Button>
                </div>
                {/* Show the user button when the user is signed in */}
                <div >
                    <Authenticated>
                        <div className='flex justify-center' >
                            <Button variant='default' asChild className="mr-4 "  >
                                <Link href={"/create-events"} className='' >
                                    <Plus className='font-black text-2xl' /> 
                                    <span >Create Events</span>
                                </Link>
                            </Button>
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Link
                                    label='My Tickets'
                                    labelIcon={<Ticket className='w-4' />}
                                    href='/my-tickets'
                                    />
                                    <UserButton.Link
                                    label='My Events'
                                    labelIcon={<Building className='w-4' />}
                                    href='/my-events'
                                    />
                                    <UserButton.Action label='manageAccount' />
                                </UserButton.MenuItems>
                            </UserButton>
                        </div>
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