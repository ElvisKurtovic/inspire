import { ProxyState } from "../AppState.js";
import { apiWeathersService } from "../Services/WeathersService.js"


function _drawApiWeathers() {
    let weathers = ProxyState.weatherApiWeathers
    let template = ""

    document.getElementById("weather").innerHTML = weathers.WeatherTemplate;

    // document.getElementById("weather").innerHTML = ProxyState.weatherApiWeathers.WeatherTemplate

}


export default class ApiWeathersController {
    constructor() {
        //   console.log("apipokemonscontroller");
        ProxyState.on("weatherApiWeathers", _drawApiWeathers)
        //   ProxyState.on("activePokemon", _drawActivePokemons)
    }

    // setActivePokemon(index) {
    //   console.log(index)
    //   apiPokemonsService.setActivePokemon(index)
    // }
}