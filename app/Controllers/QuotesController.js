import { ProxyState } from "../AppState.js";
import { apiQuotesService } from "../Services/QuotesService.js"


function _drawApiQuotes() {
    let quotes = ProxyState.apiQuotes
    let template = ""

    document.getElementById("quotes").innerHTML = quotes.QuoteTemplate;



}


export default class ApiQuotesController {
    constructor() {

        ProxyState.on("apiQuotes", _drawApiQuotes)

    }


}