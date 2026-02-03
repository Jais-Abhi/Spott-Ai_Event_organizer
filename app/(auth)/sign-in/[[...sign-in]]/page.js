import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center w-full items-center h-screen pt-40' >
      <SignIn/>
      </div>
  )
}

export default page