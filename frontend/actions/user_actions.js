import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const EDIT_USER = "EDIT_USER"
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const editUser = (userId) => ({
  type: EDIT_USER,
  userId
})
export const removeUser = (userId) => ({
  type: REMOVE_USER,
  userId
})

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});


export const fetchUser = (userId) => (dispatch) => (
  UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)),
      err => {dispatch(receiveErrors(err.response))}
  )
)

export const updateUser = (userId) => (dispatch) => (
  UserApiUtil.updateUser(userId)
    .then(user => dispatch(editUser(user)),
      err => { dispatch(receiveErrors(err.response)) }
  )
)

export const deleteUser = (userId) => (dispatch) => (
  UserApiUtil.deleteUser(userId)
    .then(userId => dispatch(removeUser(userId)),
      err => { dispatch(receiveErrors(err.response)) }
  )
)