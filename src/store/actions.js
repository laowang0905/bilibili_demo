import {
  reqUserInfo
} from 'network'
import {
  RECEIVE_USER_INFO
} from './mutations-type'

export default {
  async getUserInfo(context) {
    if (localStorage.id) {
      const {
        data
      } = await reqUserInfo(parseInt(localStorage.id))
      context.commit(RECEIVE_USER_INFO, data[0])
    }
  }

}