import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    // ❌ default settings
    // 'API-KEY': 'mysecretkey',
    // Authorization: localStorage.getItem('yourTokenKey') || 'w'
  }
})

// Add an interceptor for all requests
baseApi.interceptors.request.use()

// Add an interceptor for all successful responses
baseApi.interceptors.response.use(
  response => {
    // ❌ default settings
    // Check if there is a token in the response headers
    // const token = response.headers['authorization']
    //
    // // Save the token to localStorage if it is present
    // if (token) {
    //   localStorage.setItem('yourTokenKey', token)
    // }

    return response
  },
  error => {
    // ❌ default settings
    // // Error handling
    // console.error('Error in request:', error)
    // // Reject the error
    // return Promise.reject(error)
  }
)

// ❌ default settings
// export const baseApiQuery = createApi({
//   reducerPath: 'baseApiQuery',
//   tagTypes: ['Auth', 'Cards', 'Add'],
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:3001/',
//     prepareHeaders: headers => {
//       const token = localStorage.getItem('yourTokenKey')
//
//       if (token) {
//         localStorage.setItem('yourTokenKey', token)
//         headers.set('Authorization', `${token}`)
//       } else {
//         return
//       }
//
//       return headers
//     }
//   }),
//   refetchOnFocus: true,
//   endpoints: () => ({})
// })

export const baseApiQuery = createApi({
  reducerPath: 'baseApiQuery',
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
    prepareHeaders: headers => {
      const token = localStorage.getItem('yourTokenKey')
      return headers
    }
  }),
  refetchOnFocus: true,
  endpoints: () => ({})
})
