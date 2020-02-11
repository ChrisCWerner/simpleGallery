import axios from "axios"
import image from "./imageService"

export const API = axios.create({
  baseURL: "http://localhost:3000/api/"
})

export default {
  image,
  // other microservices
}
