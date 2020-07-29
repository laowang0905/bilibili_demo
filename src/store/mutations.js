import {
  RECEIVE_USER_INFO
} from './mutations-type'

export default {
  [RECEIVE_USER_INFO](state, userInfo) {
    state.userInfo = userInfo
  }
}