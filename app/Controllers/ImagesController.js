import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js"


function _drawImages() {
  let image = ProxyState.image
  document.getElementById("bgimg").style.backgroundImage = `url(${image})`
}

export default class ImagesController {

  constructor() {
    // console.log("mypokemonscontroller");
    this.getImage()
    ProxyState.on("image", _drawImages)
}


getImage(){
  try {
    imagesService.getImage()
    
  } catch (error) {
    console.error(error)
    
  }
}

}