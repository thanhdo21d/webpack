import React from 'react'

const Loader = () => {
  const numberOfSpans = 4
  const spans = Array.from({ length: numberOfSpans }, (_, i) => i)
  return (
    <div className='flex justify-center mt-20'>
      <div className='cube-loader'>
        <div className='cube-top' />
        <div className='cube-wrapper'>
          {spans.map((index) => (
            <span key={index} className='cube-span' style={{ transform: `rotate(${index * 90}deg)` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loader
