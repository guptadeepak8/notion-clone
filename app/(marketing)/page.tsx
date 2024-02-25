import React from 'react'
import Heading from './_components/heading'
import Heroes from './_components/heroes'
import Footer from './_components/footer'

export default function Marketpage() {
  return (
    <div className='min-h-full flex flex-col'>
      <div className='flex flex-col justify-center items-center md:justify-start gap-y-8 flex-1 text-center px-6 pb-10'>
        <Heading />
        <Heroes/>
      </div>
      <Footer/>
    </div>
  )
}
