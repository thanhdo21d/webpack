import { IDefaultLayoutData as Data } from '~/contexts/app.context'
import { SuccessResponse } from '~/types/utils.type'
import http from '~/utils/http'
const URL = 'data'
const layoutCommandApi = {
  getLayoutCommand(id: string) {
    return http.get<string, SuccessResponse<Data[]>>(`${URL}?_idLine=${id}`)
  },
  getAllDataLayoutCommand() {
    return http.get<void, SuccessResponse<Data[]>>(URL)
  }
}
export default layoutCommandApi
