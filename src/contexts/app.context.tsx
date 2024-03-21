import { createContext, useState } from 'react'
import { SuccessResponse } from '~/types/utils.type'
import { getLayoutDataFromLocal } from '~/utils/utils'

export interface IDefaultLayoutData {
  _idLine: string
  lineName: string
  productivityRate: null | number
  status: number
}

export interface IlineLayoutInterface {
  layoutData: SuccessResponse<IDefaultLayoutData[]> | null
  setDataLayoutLine: React.Dispatch<React.SetStateAction<SuccessResponse<IDefaultLayoutData[]> | null>>
}
export const inintialAppContext: IlineLayoutInterface = {
  setDataLayoutLine: () => null,
  layoutData: getLayoutDataFromLocal()
}
export const AppContext = createContext<IlineLayoutInterface>(inintialAppContext)
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [layoutData, setDataLayoutLine] = useState<SuccessResponse<IDefaultLayoutData[]> | null>(
    inintialAppContext.layoutData
  )
  //  | null
  return (
    <AppContext.Provider
      value={{
        layoutData,
        setDataLayoutLine
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
