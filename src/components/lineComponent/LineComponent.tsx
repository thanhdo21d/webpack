import { Skeleton, Tooltip } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React, { memo, useContext, useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import layoutCommandApi from '~/api'
import { AppContext, IDefaultLayoutData } from '~/contexts/app.context'
import io from 'socket.io-client'

interface IpropCss {
  text: string
  css?: string
  cssText?: string
  image?: string
  id?: string
  _idLine?: string
  cssImage?: string
  toggleDrawer?: (newOpen: boolean) => void
}
const LineComponent = ({ text, css, cssText, toggleDrawer, id, image, _idLine, cssImage }: IpropCss) => {
  const { layoutData } = useContext(AppContext)
  const socket = io('ws://localhost:3000/', {
    transports: ['websocket', 'pulling', 'flashsocket']
  })
  const [dataLine, SetDataLine] = useState<IDefaultLayoutData>({
    _idLine: '',
    lineName: '',
    productivityRate: null,
    status: 0
  })
  useEffect(() => {
    socket.connect()
    socket.on(`data:${_idLine}`, (data) => {
      SetDataLine(data[0])
    })
    return () => {
      socket.disconnect()
    }
  }, [])
  const configColor = ['', 'text-[#07bc0c] font-bold', 'text-[#ff0017] font-bold']
  const handleToggleShowDrawer = () => {
    if (toggleDrawer) {
      toggleDrawer(true)
    }
  }
  const newResult = text.replace(/<br\s*\/?>/g, '')
  const isDataLayoutLoading = false
  const isDataLayoutFetching = false
  return (
    <div className=''>
      <Tooltip title={newResult}>
        <div
          onClick={handleToggleShowDrawer}
          id={id || ''}
          className={`${css ? css : 'custom-container w-[100px] h-[100px] relative border border-black'} !cursor-pointer transition duration-300 ease-in-out`}
        >
          {isDataLayoutLoading || isDataLayoutFetching ? (
            <>
              <Skeleton />
            </>
          ) : (
            <>
              <p
                className={`${cssText ? cssText : ''}   ${id ? '!text-white' : ''}`}
                dangerouslySetInnerHTML={{ __html: text }}
              ></p>
              <div className='absolute flex items-center justify-center bottom-1'>
                {image ? <img className={`w-[25px] block ${cssImage}`} src={image} /> : ''}
              </div>
              <p className={`${configColor[dataLine.status]} font-bold text-md text-center`}>
                {`${dataLine.productivityRate ? dataLine.productivityRate + '%' : ''} `}
              </p>
            </>
          )}
        </div>
      </Tooltip>
    </div>
  )
}

export default memo(LineComponent)
