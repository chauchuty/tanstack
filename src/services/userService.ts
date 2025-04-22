import { api } from "../instance/api.instance"

export const getUsers = async () => {
  const res = await api.get('/users')
  return res.data
}

export const getUser = async (id: string) => {
  const res = await api.get(`/users/${id}`)
  return res.data
}

export const createUser = async (data: any) => {
  const res = await api.post('/users', data)
  return res.data
}

export const updateUser = async (id: string, data: any) => {
  const res = await api.put(`/users/${id}`, data)
  return res.data
}

export const deleteUser = async (id: string) => {
  const res = await api.delete(`/users/${id}`)
  return res.data
}
