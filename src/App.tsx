import { FC, useState } from 'react'
import './style.css'
import './styles/app.scss'
const App: FC = () => {
  const [fullname, setFullname] = useState('vũ thành đô')
  console.log(fullname)
  return (
    <div className=''>
      <h1 className='!text-green-500'>{fullname}</h1>
      <h2 className='test_scss font-bold text-sm bg-red-600'>Bài viết được viết bởi {process.env.HOST}</h2>
    </div>
  )
}

export default App
