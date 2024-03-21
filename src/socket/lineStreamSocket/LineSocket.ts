import { Socket, io } from 'socket.io-client'
import { IDefaultLayoutData } from '~/contexts/app.context'
import { SuccessResponse } from '~/types/utils.type'

const socket: Socket = io('ws://localhost:3000', {
  transports: ['websocket', 'pulling', 'flashsocket']
})

export const ClientSocketLine = {
  getData: (setDataLayoutLine: React.Dispatch<React.SetStateAction<SuccessResponse<IDefaultLayoutData[]> | null>>) => {
    socket.connect()
    socket.on('data', (eventName, data) => {
      setDataLayoutLine(data)
      const regex = /^data:(\d+)$/
      if (regex.test(eventName)) {
        const [, id] = eventName.match(regex)
        console.log(id)
      }
    })
  }
}
