import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { mainApi } from "./AxiosService.js";

class ApiWeathersService {

    constructor() {
        this.getApiWeathers()
    }

    async getApiWeathers() {
        try {
            const res = await mainApi.get("weather")
            console.log(res)
            ProxyState.weatherApiWeathers = new Weather(res.data)
        } catch (error) {
            console.error(error)
        }
    }


}



export const apiWeathersService = new ApiWeathersService();