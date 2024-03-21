// import Downshift from 'downshift'
import { memo, useEffect, useRef, useState } from 'react'

import { SearchIcon } from '../../ui/icons/SearchIcon'
const getHighlightedText = (text: string, highlight: string) => {
  const input = highlight.toLowerCase()
  const startIndex = text.toLowerCase().indexOf(input)
  const endIndex = startIndex + input.length

  if (startIndex === -1) {
    return text
  }
  return (
    <span className='text-sm min-w-[80px]'>
      {text.substring(0, startIndex)}
      <span className='font-semibold text-[#1AAF74]'>{text.substring(startIndex, endIndex)}</span>
      {text.substring(endIndex)}
    </span>
  )
  // };
}
type TProps = {
  index?: string
  features?: string
}
const SearchInput: React.FC<TProps> = ({ index }: TProps) => {
  const [dataSearchStockCode, setDataSearchStockCode] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Kiểm tra xem người dùng đã nhấn Ctrl + K chưa
      if (event.ctrlKey && event.key === 'k') {
        // Ngăn chặn hành vi mặc định của sự kiện
        event.preventDefault()
        // Focus vào input khi nhấn Ctrl + K
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return (
    <div className='relative'>
      <div className='absolute ml-1 top-2 left-1'>
        <SearchIcon />
      </div>
      <input
        className='bg-[#3f4044] pl-6 p-1 rounded mx-1 input_search_stock max-w-36'
        placeholder='Tìm kiếm'
        ref={inputRef}
      ></input>
      <div className='absolute top-1 right-1 text-[10px] font-bold leading-5 ml-1 mr-0.5 border border-solid border-[#2f3a46] bg-[#141a1f] px-1 rounded'>
        Ctril+k
      </div>
    </div>
  )
}
export default memo(SearchInput)
