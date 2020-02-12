import axios from "axios"
import image from "./imageService"

export const API = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api/"
})

export default {
  image,
  // other microservices
}
