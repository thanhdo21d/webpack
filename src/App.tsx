import { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './App.css'
import './style/index.scss'
import useRouteElements from './useRouteElements'
import { pause } from './utils/pause'
import Loader from './common/loader/Loader'
import { useQuery } from '@tanstack/react-query'
import layoutCommandApi from './api'
import { AppContext } from './contexts/app.context'
import { ClientSocketLine } from './socket/lineStreamSocket/LineSocket'

function App() {
  const routeElements = useRouteElements()
  const [isLoading, setIsLoading] = useState(true)

  const { setDataLayoutLine, layoutData } = useContext(AppContext)
  // const {
  //   data: dataLayout,
  //   isLoading: isDataLayoutLoading,
  //   isFetching: isDataLayoutFetching
  // } = useQuery({
  //   queryKey: ['leyoutCommand'],
  //   queryFn: () => {
  //     return layoutCommandApi.getAllDataLayoutCommand()
  //   }
  // })
 
  // useEffect(() => {
  //   if (dataLayout) setDataLayoutLine(dataLayout)
  // }, [dataLayout, setDataLayoutLine])
  pause(1000).then(() => {
    setIsLoading(false)
  })
  if (isLoading) return <Loader />
  return (
    <div>
      {routeElements}
      <ToastContainer />
    </div>
  )
}

export default App
