export const signup = (user) => {
  return $.ajax({
    method: "post",
    url: '/api/user',
    data: {user: user}
  })
}

export const login = (user) => (
  $.ajax({
    method: "post",
    url: '/api/session',
    data: {user: user}
  })
)

export const logout = () => (
  $.ajax({
    method: "delete",
    url: '/api/session'
  })
)