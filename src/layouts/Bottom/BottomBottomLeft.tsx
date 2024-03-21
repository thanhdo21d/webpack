import React, { useEffect } from 'react'
import LineComponent from '~/components/lineComponent'
import { TbCarCrane } from 'react-icons/tb'
const style = { color: 'red' }
const BottomBottomLeft = () => {
  console.log('12')
  return (
    <div className='relative'>
      <div className='absolute z-50 top-[-35px]'>
        <TbCarCrane size={15} style={style} />
      </div>
      <div className='absolute z-50 top-[-20px] left-[30%]'>
        <TbCarCrane size={15} style={style} />
      </div>
      <div className='flex'>
        <div>
          <LineComponent
            text={'AGV <br/> Shaft 1'}
            css={'w-[65px] h-[66px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center'
           
          />
        </div>

        <div>
          <LineComponent
            text={'AVS 2'}
            css={'w-[55px] h-[66px] relative bg-white border-t border-b border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center pt-5'
            _idLine={'000a'}
          />
        </div>
        <div>
          <LineComponent
            text={'JAT CO'}
            css={'w-[70px] h-[66px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center pt-5'
            _idLine={'5cb5'}
          />
        </div>
        <div>
          <LineComponent
            text={'615K'}
            css={'w-[60px] h-[66px] relative bg-white border-t border-b border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center pt-5'
            _idLine={'7b2d'}
          />
        </div>
        <div>
          <LineComponent
            text={'FZ'}
            css={'w-[85px] h-[66px] relative bg-white border-l border-t border-b border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center pt-5'
            _idLine={'2afa'}
          />
        </div>
        <div>
          <div>
            <LineComponent
              text={'AFM SENSOR'}
              css={'w-[115px] h-[50px] relative bg-white border-t border-l border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-3'
            />
          </div>
          <div>
            <LineComponent
              text={''}
              css={'w-[115px] h-[16px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
        </div>
        <div className='ml-14'>
          <LineComponent
            text={''}
            css={'w-[45px] h-[66px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center'
          />
        </div>
        <div>
          <div>
            <LineComponent
              text={'AFM 3 Hàn'}
              css={'w-[115px] h-[33px] relative bg-white border-t border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'AFM 5 Hàn'}
              css={'w-[115px] h-[33px] relative bg-white border-t border-b border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
        </div>
        <div className=''>
          <LineComponent
            text={'AFM 5-2'}
            css={'w-[75px] h-[66px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center pt-5'
            _idLine={'0dc7'}
          />
        </div>
        <div className=''>
          <LineComponent
            text={'AFM 5-1'}
            css={'w-[75px] h-[66px] relative bg-white border-t border-b border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center pt-5'
            _idLine={'31d1'}
          />
        </div>
        <div className=''>
          <LineComponent
            text={'AFM 3-1'}
            css={'w-[75px] h-[66px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center pt-5'
            _idLine={'647a'}
          />
        </div>
        {/*  */}
        <div className='flex ml-8 relative'>
          <div className=''>
            <LineComponent
              text={'PQ & LOG'}
              css={'w-[88px] h-[66px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-5'
            />
          </div>
          <div className=''>
            <LineComponent
              text={'LOG'}
              css={'w-[105px] h-[66px] relative bg-white border-t border-b border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-5'
            />
          </div>
          <div className='absolute bottom-0 right-[-120px]'>
            <LineComponent
              text={'Trạm biến áp'}
              css={'w-[120px] h-[85px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-8'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBottomLeft
