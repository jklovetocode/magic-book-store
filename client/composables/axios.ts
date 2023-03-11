import axios from 'axios'

export const useFetch = async <T>(
  path: string,
  method: 'get' | 'post' | 'patch' | 'delete' | 'put',
  data?: unknown
): Promise<T | undefined> => {
  const url: string = `http://localhost:3001/${path}`
  if (['get', 'delete'].includes(method)) {
    try {
      const response = await axios[method as 'get' | 'delete'](url)
      return response.data
    } catch (error) {
      console.log(error)
    }
  } else {
    try {
      const response = await axios[method as 'post' | 'patch' | 'put'](
        url,
        data
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return
}
