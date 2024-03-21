import React from 'react'
import LineComponent from '~/components/lineComponent'

const RightBottom = () => {
  return (
    <div>
      <div>
        <LineComponent
          text={'MID H1'}
          css={'w-[120px] h-[40px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
      <div>
        <LineComponent
          text={'MID H2'}
          css={'w-[120px] h-[40px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
      <div className='mt-7'>
        <LineComponent
          text={'MID H3'}
          css={'w-[120px] h-[40px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
      <div>
        <LineComponent
          text={'MID H4'}
          css={'w-[120px] h-[40px] relative bg-white border-r border-b  border-l border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
      <div className='mt-6'>
        <LineComponent
          text={'MID H4'}
          css={'w-[120px] h-[40px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
    </div>
  )
}

export default RightBottom
