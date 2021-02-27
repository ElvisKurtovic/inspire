import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";

import { mainApi } from "./AxiosService.js";

class ApiQuotesService {

    constructor() {
        this.getApiQuotes()
    }

    async getApiQuotes() {
        try {
            const res = await mainApi.get("quotes")
            console.log(res)
            ProxyState.apiQuotes = new Quote(res.data)
        } catch (error) {
            console.error(error)
        }
    }


}



export const apiQuotesService = new ApiQuotesService();