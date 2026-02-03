import {  SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center w-full items-center h-screen absolute z-10 mt-20 top-20' >
      <SignUp/>
      </div>
  )
}

export default page