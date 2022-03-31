import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECIEVE_USERS"
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const EDIT_USER = "EDIT_USER"
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"
export const REMOVE_USER_ERRORS = "REMORE_USER_ERRORS"


export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})


export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const editUser = (user) => ({
  type: EDIT_USER,
  user
})
export const removeUser = (userId) => ({
  type: REMOVE_USER,
  userId
})

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const removeUserErrors = errors => ({
  type: REMOVE_USER_ERRORS
})

export const fetchUsers = () => (dispatch) => (
  UserApiUtil.fetchUsers()
    .then(res => {
      dispatch(receiveUsers(res))
    })
)

export const fetchUser = (userId) => (dispatch) => (
  UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)),
      err => {dispatch(receiveUserErrors(err.responseJSON))}
  )
)

export const updateUser = (user) => (dispatch) => (
  UserApiUtil.updateUser(user)
    .then(user => dispatch(editUser(user)),
      err => { dispatch(receiveUserErrors(err.responseJSON)) }
  )
)

export const deleteUser = (userId) => (dispatch) => (
  UserApiUtil.deleteUser(userId)
    .then(userId => dispatch(removeUser(userId)),
      err => { dispatch(receiveUserErrors(err.responseJSON)) }
  )
)