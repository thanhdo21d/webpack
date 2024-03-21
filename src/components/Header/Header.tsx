import Language from './components/Language'
import Logo from './components/Logo'
import Noti from './components/Noti'
import TimeLine from './components/TimeLine'
import MarqueeHeader from './components/Marquee'
import SearchInput from './components/SearchInput'
const Header = () => {
  return (
    <>
      <div className='manrope flex justify-between bg-[#1A1D1F] px-2 py-1 text-white  border-b border-[#a7b094]'>
        <Logo />
        <MarqueeHeader />
        <div className='flex justify-end  h-full items-center'>
          <TimeLine />
          <SearchInput />
          <Language />
          <Noti />
        </div>
      </div>
    </>
  )
}

export default Header
