import React from 'react'
import Hero from './(Components)/Hero'
import Slogan from './(Components)/Slogan'
import ServiceCards from './(Components)/ServiceCards'
import Industries from './(Components)/Industries'

const page = () => {
  return (
    <div className='container space-y-12'>
      <Hero />
      <Slogan />
      <ServiceCards />
      <Industries />



      </div>
  )
}

export default page