import React from 'react'
import LineComponent from '~/components/lineComponent'
import BootomTop from './BootomTop'
import { setActiveDrawer } from '~/store/slice/toggleShowDrawer'
import { useAppDispatch } from '~/store/hook'
import locationIcons from "~/assets/images/line/placeholder.png"

const Toplayout = () => {
  const dispatch = useAppDispatch()
  const toggleDrawer = (newOpen: boolean) => {
    dispatch(setActiveDrawer(newOpen))
  }
  return (
    <div>
      <div className='flex'>
        <div className='mr-10 cursor-pointer'>
          <LineComponent
            text={'Khu xuất hàng'}
            image={locationIcons}
            toggleDrawer={toggleDrawer}
            css='bg-white custom-container w-[100px] h-[100px] relative border border-[#8c7b7b] shadow-2xl'
            cssText='text-black font-bold text-center pt-1'
          />
        </div>
        {/*  */}
        <div>
          <div className='flex'>
            <div>
              <LineComponent
                text={'CVT  <br/> Packing'}
                css='bg-white custom-container w-[100px] h-[100px] relative border border-[#8c7b7b] shadow-2xl'
                cssText='text-black font-bold text-center pt-1 '
                _idLine={'5845'}
              />
            </div>
            <div>
              <LineComponent
                text={'CVT <br/> Feature'}
                css='bg-white custom-container w-[100px] h-[100px] relative border-t border-b border-r border-[#8c7b7b] shadow-2xl'
                cssText='text-black font-bold text-center pt-1 '
              />
            </div>
            <div>
              <div>
                <LineComponent
                  text={'DCT Body'}
                  css={
                    'w-[100px] h-[33px] relative border  bg-white border-t border-b border-r border-[#8c7b7b] shadow-2xl'
                  }
                  cssText='text-black font-bold text-center pt-1 '
                />
              </div>
              <div>
                <LineComponent
                  text={'CVT Body1'}
                  css={'w-[100px] h-[33px] relative border  bg-white  border-b border-r border-[#8c7b7b] shadow-2xl'}
                  cssText='text-black font-bold text-center pt-1 '
                />
              </div>
              <div>
                <LineComponent
                  text={'CVT Body2'}
                  css={'w-[100px] h-[34px] relative border  bg-white  border-b border-r border-[#8c7b7b] shadow-2xl'}
                  cssText='text-black font-bold text-center pt-1 '
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='w-[130px] h-[100px] relative  flex bg-white  border border-[#8c7b7b] shadow-2xl'>
          <div className='w-[30px] bg-white '></div>
          <div>
            <LineComponent
              text={'Solenoid 2'}
              css={'w-[100px] h-[33px] relative bg-white   border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-1 '
            />
            <LineComponent
              text={'Solenoid 1'}
              css={'w-[97px] absolute right-[-3px] h-[33px] relative bg-white  border-t border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-1 '
            />
          </div>
        </div>
        {/*  */}
        <div>
          <div className='ml-10 flex'>
            <div>
              <LineComponent
                text={'AT SOL'}
                css={'w-[90px] h-[66px] relative bg-white  border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center pt-1 '
              />
            </div>
            <div>
              <LineComponent
                text={'APM<br/> 6-1'}
                css={'w-[47.2px] h-[66px] relative bg-white  border-t border-b border-r border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center pt-1 '
              />
            </div>
            <div>
              <LineComponent
                text={'APM<br/> 6-2'}
                css={'w-[47.2px] h-[66px] relative bg-white  border-t border-b border-r border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center pt-1 '
              />
            </div>
            <div>
              <LineComponent
                text={'APM<br/> 3'}
                css={'w-[47.2px] h-[66px] relative bg-white  border-t border-b border-r border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center pt-1 '
              />
            </div>
            <div>
              <LineComponent
                text={'APM<br/> 1'}
                css={'w-[47.2px] h-[66px] relative bg-white  border-t border-b border-r border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center pt-1 '
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className='ml-7 flex'>
            <div>
              <LineComponent
                text={'WC'}
                css={'w-[50px] h-[66px] relative bg-white  border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center pt-5 '
              />
            </div>
            <div>
              <LineComponent
                text={'TOOL'}
                css={'w-[120.2px] h-[66px] relative bg-white  border-t border-b border-r border-[#8c7b7b]  shadow-2xl'}
                cssText='text-black font-bold text-center pt-5 '
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className='ml-7 '>
            <div>
              <LineComponent
                text={'Waste Storage'}
                css={'w-[120px] h-[36px] relative bg-white  border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center pt-1 '
              />
            </div>
          </div>
        </div>
      </div>

      <div className='relative'>
        <BootomTop />
      </div>
    </div>
  )
}

export default Toplayout
