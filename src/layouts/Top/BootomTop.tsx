import React from 'react'
import LineComponent from '~/components/lineComponent'
import locationIcons from "~/assets/images/line/location.png"

const BootomTop = () => {
  return (
    <div className='mt-5 '>
      <div className='flex'>
        <div className='mr-10 flex'>
          <LineComponent
            text={'LOG <br/> AREA'}
            css={'w-[200px] h-[160px] relative  bg-white  border border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center pt-10 '
            _idLine={'5845'}
          />
          <LineComponent
            text={'Khu <br/> đóng <br/> gói'}
            css={'w-[80px] h-[160px] relative bg-white  border-t border-b border-r border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center pt-8 '
          />
        </div>
        {/*  */}
        <div>
          <div>
            <LineComponent
              text={'EGRV'}
              css={'w-[130px] h-[23px] relative bg-white  border border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'LS EGRV'}
              css={'w-[130px] h-[23px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center '
            />
          </div>
          <div>
            <LineComponent
              text={'O2 SENSOR'}
              css={'w-[130px] h-[23px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center  '
            />
          </div>
          <div>
            <LineComponent
              text={'DC EGR4'}
              css={'w-[130px] h-[23px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center '
            />
          </div>
          <div>
            <LineComponent
              text={'DC EGR 1'}
              css={'w-[130px] h-[23px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'DC EGR 3'}
              css={'w-[130px] h-[23px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center '
            />
          </div>
          <div>
            <LineComponent
              text={'MCV-E'}
              css={'w-[130px] h-[23px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center  '
            />
          </div>
        </div>
        <div className='ml-10'>
          <div>
            <LineComponent
              text={'Core Laser'}
              css={'w-[100px] h-[17px] relative border bg-white  border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-medium text-sm text-center  '
            />
          </div>
          <div>
            <LineComponent
              text={'Washing 1'}
              css={'w-[100px] h-[17px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-medium text-sm text-center  '
            />
          </div>
          <div>
            <LineComponent
              text={'Washing 2'}
              css={'w-[100px] h-[17px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-medium text-sm text-center  '
            />
          </div>
          <div>
            <LineComponent
              text={'Washing 3'}
              css={'w-[100px] h-[17px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-medium text-sm text-center  '
            />
          </div>
          <div>
            <LineComponent
              text={'Hàn Braket'}
              css={'w-[100px] h-[17px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-medium text-sm text-center  '
            />
          </div>
          <div>
            <LineComponent
              text={'Washing 4'}
              css={'w-[100px] h-[17px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-medium text-sm text-center  '
            />
          </div>
          <div>
            <LineComponent
              text={'Washing 5'}
              css={'w-[100px] h-[17px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-medium text-sm text-center  '
            />
          </div>
          <div>
            <LineComponent
              text={'Washing 6'}
              css={'w-[100px] h-[17px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-medium text-sm text-center  '
            />
          </div>
          <div>
            <LineComponent
              text={'Washing 7'}
              css={'w-[100px] h-[17px] relative bg-white  border-l border-b border-r border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-medium text-sm text-center '
            />
          </div>
        </div>

        {/*  */}
        <div className='ml-6 relative top-[-30px]'>
          <div className='flex'>
            <div>
              <LineComponent
                text={'VCT <br/>Rotor 4'}
                css={'w-[65px] h-[60px] relative bg-white  border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
               
              />
            </div>
            <div>
              <LineComponent
                text={'VCT <br/>Rotor 3'}
                css={'w-[65px] h-[60px] relative bg-white  border-t border-r border-b border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
          </div>
          <div className='flex'>
            <div>
              <LineComponent
                text={'VCT <br/>Rotor 2'}
                css={'w-[65px] h-[60px] relative bg-white  border-l border-r border-b border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
            <div>
              <LineComponent
                text={'VCT <br/>Housing'}
                css={'w-[65px] h-[60px] relative bg-white   border-r border-b border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
          </div>
          <div>
            <div>
              <LineComponent
                text={''}
                css={'w-[130px] h-[30px] relative  bg-white  border-r border-l border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
          </div>
          <div>
            <div>
              <LineComponent
                text={'Break area'}
                css={'w-[130px] h-[40px] relative  bg-white border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className='ml-6 relative top-[-30px]'>
          <div>
            <LineComponent
              text={'MID L1'}
              css={'w-[121.5px] h-[31.5px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center '
            />
          </div>
          <div>
            <LineComponent
              text={'MID L2'}
              css={'w-[121.5px] h-[31.5px] relative bg-white border-b border-r border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center '
            />
          </div>
          <div>
            <LineComponent
              text={'MID L3'}
              css={'w-[121.5px] h-[31.5px] relative bg-white border-b border-r border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center '
            />
          </div>
          <div>
            <LineComponent
              text={'MID L4'}
              css={'w-[121.5px] h-[31.5px] relative bg-white border-b border-r border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center '
            />
          </div>
          <div>
            <LineComponent
              text={'MID L6'}
              css={'w-[121.5px] h-[31.5px] relative bg-white border-b border-r border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center '
            />
          </div>
          <div>
            <LineComponent
              text={'MID L5'}
              css={'w-[121.5px] h-[31.5px] relative bg-white border-b border-r border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center '
            />
          </div>
        </div>
        {/*  */}
        <div className='ml-6 relative top-[-30px] flex gap-3'>
          <div>
            <div>
              <LineComponent
                text={'Diecast 1'}
                css={'w-[81.5px] h-[30px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
            <div className='mt-2'>
              <LineComponent
                text={'Diecast 2'}
               
               
                css={'w-[81.5px] h-[30px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
            <div className='mt-2'>
              <LineComponent
                text={'Diecast 3'}
                css={'w-[81.5px] h-[30px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
            <div className='mt-2'>
              <LineComponent
                text={''}
                css={'w-[81.5px] h-[67.5px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
          </div>
          <div>
            <div className=''>
              <LineComponent
                text={'Kouki'}
                css={'w-[61.5px] h-[57.5px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
            <div className=''>
              <LineComponent
                text={'Die <br/>maint'}
                css={'w-[61.5px] h-[58.5px] relative bg-white border-r border-l border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
            <div className=''>
              <LineComponent
                text={'Kaizen'}
                css={'w-[61.5px] h-[64.5px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center pt-3'
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className='ml-12 relative top-[-70px] '>
          <div className='absolute'>
            <div>
              <LineComponent
                text={'Tầng 1<br/> Phòng lắp máy <br/> Kouki '}
                css={'w-[120px] h-[70px]  bg-white border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center'
              />
            </div>
            <div className=''>
              <LineComponent
                text={'Kho dự phòng <br/> MA (tầng 2'}
                css={'w-[120px] h-[50px]  bg-white border-l border-r border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center'
              />
            </div>
            <div className=''>
              <LineComponent
                text={'Compress air'}
                css={'w-[120px] h-[35px]  bg-white border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center '
              />
            </div>
            <div className=''>
              <LineComponent
                text={'Trạm biến áp'}
                
                css={'w-[120px] h-[35.5px]  bg-white border-l border-r border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center pt-2'
              />
            </div>
            <div className=''>
              <LineComponent
                text={'Compress air'}
               
                css={'w-[120px] h-[35.5px]  bg-white border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center pt-1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BootomTop
