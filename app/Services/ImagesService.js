import { ProxyState } from "../AppState.js";
import { mainApi } from "./AxiosService.js";

class ImagesService {


  constructor (){
    // this.getImage()
  }

  async getImage() {
    try {
        const res = await mainApi.get("images")
        console.log(res)
        ProxyState.image = res.data.url
    } catch (error) {
        console.error(error)
    }
}


}

export const imagesService = new ImagesService();