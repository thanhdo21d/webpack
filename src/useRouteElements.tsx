import path from '../src/constants/path'
import { useRoutes } from 'react-router-dom'
import HomeLayOut from './layouts/HomeLayOut'
import MyLayout from './features/DynamicLayout/MylayOut'
import PopUpshowDetails from './features'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <HomeLayOut />
    },
    {
      path: '/my-layout',
      element: <MyLayout />
    },
    {
      path: '/popup',
      element: <PopUpshowDetails />
    }
  ])
  return routeElements
}
