import { removeAuthCookie } from '../../utils/cookies'
import axios from 'axios'


const BASE_URL = "https://6430142fc26d69edc88a5ff1.mockapi.io/"
export default function useAuth() {

   const login = async ({ email, password }) => {
      try {
         const response = await axios.post(`${BASE_URL}/admin`, {
            email: email,
            password: password
         })
         return response
      } catch (error) {
         console.error(error)
      }
   }

   const logout = () => {
      removeAuthCookie()
   }

   return { login, logout }
}