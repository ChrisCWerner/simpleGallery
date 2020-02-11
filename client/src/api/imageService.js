import { API } from "./index"

export default {
  getImages() {
    return API.get("image/getImages")
      .then(response => response.data)
  },
  // other calls to images microservice
}
