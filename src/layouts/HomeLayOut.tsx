import React from 'react'
import Header from '~/components/Header/Header'
import LineComponent from '~/components/lineComponent'
import Toplayout from './Top/Toplayout'
import BottomTop from './Bottom/BottomTop'
import BottomBottomLeft from './Bottom/BottomBottomLeft'
import PopUpshowDetails from '~/features'

const HomeLayOut = () => {
  return (
    <div>
      <PopUpshowDetails />
      <Header />
      <div className='bg-[#d2cccc] h-screen pt-4 pl-3'>
        <div>
          <Toplayout />
        </div>
        <div className='mt-2'>
          <BottomTop />
        </div>
        <div className='mt-10'>
          <BottomBottomLeft />
        </div>
      </div>
    </div>
  )
}

export default HomeLayOut
