import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (userId) => ({
  type: RECEIVE_USER,
  userId
})


export const fetchUser = (userId) => (dispatch) => (
  UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
)