import React from 'react'
import LineComponent from '~/components/lineComponent'

const RightBottomAfter = () => {
  return (
    <div>
      <div>
        <LineComponent
          text={'SLEEVE 1'}
          css={'w-[120px] h-[31.5px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
      <div>
        <LineComponent
          text={'SLEEVE 5'}
          css={'w-[120px] h-[31.5px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
      <div>
        <LineComponent
          text={'SLEEVE 3'}
          css={'w-[120px] h-[31.5px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
      <div>
        <LineComponent
          text={'SLEEVE 4'}
          css={'w-[120px] h-[31.5px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
      <div>
        <LineComponent
          text={'SLEEVE BU 2'}
          css={'w-[120px] h-[31.5px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
      <div>
        <LineComponent
          text={'SLEEVE BU 1'}
          css={'w-[120px] h-[31.5px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
      <div>
        <LineComponent
          text={'SLEEVE 6'}
          css={'w-[120px] h-[31.5px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
      <div>
        <LineComponent
          text={'Break area'}
          css={'w-[120px] h-[31.5px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
          cssText='text-black font-bold text-center'
        />
      </div>
    </div>
  )
}

export default RightBottomAfter
