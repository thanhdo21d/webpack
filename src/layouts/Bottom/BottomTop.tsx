import React from 'react'
import LineComponent from '~/components/lineComponent'
import RightBottom from '../right/RightBottom'
import RightBottomAfter from '../right/RightBottomAfter'
import locationIcons from '~/assets/images/line/location.png'
import managerIcons from '~/assets/images/logo/management.png'
const BottomTop = () => {
  return (
    <div className='flex'>
      <div>
        <div className='flex gap-5'>
          <div className=''>
            <LineComponent
              text={'MFG Office'}
              css={'w-[130px] h-[75px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-5'
              // id={'blink'}
              _idLine={'43e2'}
            />
          </div>
          <div className=''>
            <LineComponent
              text={'Phòng điều hành'}
              css={'w-[130px] h-[75px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-1'
              image={`${managerIcons}`}
              cssImage={' ml-12 p-1'}
            />
          </div>
        </div>
        {/*  */}
        <div className='mt-5 flex gap-5'>
          <div className='relative bg-white border border-[#8c7b7b] shadow-2xl'>
            <LineComponent
              text={'Khu tuyển chọn'}
              css={'w-[130px] h-[155px] relative '}
              cssText='text-black font-bold text-center pt-1'
            />
            <LineComponent
              text={'ASAICH <br/> I'}
              css={'w-[60px] h-[60px] absolute border-t border-l border-black !left-[70px] bottom-0'}
              cssText='text-black font-bold text-center pt-1'
            />
          </div>
          <div className=''>
            <LineComponent
              text={'Kyoso Rabo'}
              css={'w-[130px] h-[90px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-5'
              _idLine={'40f4'}
            />
            <LineComponent
              text={'Quality Anshinkan'}
              css={'w-[130px] h-[65px] relative bg-white border-l border-r border-b border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-1'
            />
          </div>
        </div>
      </div>
      <div>
        <div className='ml-10'>
          <div>
            <LineComponent
              text={'VIC 2 '}
              css={'w-[130px] h-[23px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'VIC Manifold '}
              css={'w-[130px] h-[23px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'VIC 3 '}
              css={'w-[130px] h-[23px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div className='flex items-center'>
            <div>
              <LineComponent
                text={'VIC 5'}
                css={'w-[65px] h-[23px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center'
              />
            </div>
            <div>
              <LineComponent
                text={'VIC 6'}
                css={'w-[65px] h-[23px] relative bg-white border-r border-b  border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center'
              />
            </div>
          </div>
          <div>
            <LineComponent
              text={'VIC 4'}
              css={'w-[130px] h-[23px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'I-VLV 3'}
              css={'w-[130px] h-[23px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'I-VLV 1,2'}
              css={'w-[130px] h-[23px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'SUZUKI ZE'}
              css={'w-[130px] h-[23px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'OCV 3'}
              css={'w-[130px] h-[23px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'OCV 2'}
              css={'w-[130px] h-[23px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'OCV 1'}
              css={'w-[130px] h-[23px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
        </div>
      </div>
      <div className='ml-10'>
        <div>
          <LineComponent
            text={'Middle-Lower'}
            css={'w-[120px] h-[33px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center'
          />
        </div>
        <div>
          <LineComponent
            text={'Upper'}
            css={'w-[120px] h-[22px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center'
          />
        </div>
        <div>
          <LineComponent
            text={'MidL-MidH'}
            css={'w-[120px] h-[22px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center'
          />
        </div>
        <div>
          <LineComponent
            text={'Core 615K'}
            css={'w-[120px] h-[22px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center'
          />
        </div>
        <div>
          <LineComponent
            text={'Hàn IVLV 1,2'}
            css={'w-[120px] h-[22px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center'
          />
        </div>
        <div className='flex'>
          <div>
            <LineComponent
              text={'Rửa <br/> 615K'}
              css={'w-[60px] h-[46px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
          <div>
            <LineComponent
              text={'Rửa <br/> DCEGR'}
              css={'w-[60px] h-[46px] relative bg-white border-r border-b  border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
        </div>
        <div>
          <LineComponent
            text={'FAS Coating'}
            css={'w-[120px] h-[22px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center'
          />
        </div>
        <div className='flex'>
          <div className=''>
            <div>
              <LineComponent
                text={'RửaFZ'}
                css={'w-[80px] h-[31px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center'
              />
            </div>
            <div>
              <LineComponent
                text={'Rửa AVS'}
                css={'w-[80px] h-[32px] relative bg-white border-r border-b border-l border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center'
              />
            </div>
          </div>
          <div>
            <LineComponent
              text={'Hàn <br/> FZ'}
              css={'w-[40px] h-[63px] relative bg-white border-r border-b border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center'
            />
          </div>
        </div>
      </div>

      <div className='ml-5'>
        <RightBottom />
      </div>
      <div className='ml-5'>
        <RightBottomAfter />
      </div>
      {/*  */}
      <div className='ml-6 relative'>
        <div className='flex gap-3'>
          <div>
            <LineComponent
              text={'PARTS <br/>  W/H'}
              css={'w-[81.5px] h-[252px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-20'
            />
          </div>
          <div>
            <LineComponent
              text={'PARTS <br/>  W/H'}
              css={'w-[61.5px] h-[222px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
              cssText='text-black font-bold text-center pt-14'
            />
            <div className='absolute right-[-46px] bottom-[-40px]'>
              <LineComponent
                text={'Tuyển  <br/> chọn'}
                css={'w-[70px] h-[60px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
                cssText='text-black font-bold text-center'
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='ml-[45px] '>
        <div>
          <LineComponent
            text={'Khu nhập linh <br/> kiện LOG'}
            css={'w-[120px] h-[252px] relative bg-white border border-[#8c7b7b] shadow-2xl'}
            cssText='text-black font-bold text-center pt-20'
          />
        </div>
      </div>
    </div>
  )
}

export default BottomTop
