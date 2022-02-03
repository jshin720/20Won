

export const fetchUser = (userId) =>{
  return $.ajax({
    method: "get",
    url: `/api/users/${userId}`
  })
}

export const updateUser = (userId) => {
  return $.ajax({
    method: "patch",
    url: `/api/users/${userId}`,
    data: { user }
  })
}


export const deleteUser = (userId) => {
  return $.ajax({
    method: "delete",
    url: `/api/users/${userId}`
  })
}



