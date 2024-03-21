import React, { memo } from 'react'
import LogoFPTSShort from '~/assets/images/logo/Denso-logo-A9E6D85B8F-seeklogo.com.png'

interface PropConfig {
  height?: number
  width?: number
  fontSize?: number
}

const Logo: React.FC<PropConfig> = ({ height, fontSize }) => {
  return (
    <div className='flex h-full items-center'>
      <img className='pt-1 pr-1.5 shadow-xl' src={LogoFPTSShort} style={{ height: height ?? 25 }} alt='Logo denso' />
      <div className={`text-[#1AAF74] whitespace-nowrap px-2`}></div>
    </div>
  )
}
export default memo(Logo)
