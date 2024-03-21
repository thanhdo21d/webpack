import { memo, useState } from 'react'
import { NotiIcon } from '../../ui/icons/NotiIcon'
import { SetupIcon } from '../../ui/icons/SetupIcon'
import { CloseIcon } from '../../ui/icons/CloseIcon'
import Drawer from '@mui/material/Drawer/Drawer'
const Noti = () => {
  const [showNoti, setShowNoti] = useState(false)
  const showNotification = () => {
    console.log('Show Notification')
    setShowNoti(true)
  }
  const hideNotification = () => {
    console.log('Hide Notification')
    setShowNoti(false)
  }
  return (
    <>
      <div className='px-1.5 cursor-pointer' onClick={showNotification}>
        <NotiIcon />
      </div>
      <Drawer anchor='right' open={showNoti} onClose={hideNotification}>
        <div className=' bg-[#272B30] text-white w-[550px] '>
          <div className='noti-head flex justify-between py-1.5 items-center'>
            <div onClick={hideNotification}>
              <CloseIcon />
            </div>
            <span className='text-xl'>Thông báo</span>
            <div>
              <SetupIcon />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default memo(Noti)
