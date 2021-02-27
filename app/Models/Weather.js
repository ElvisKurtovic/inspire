export default class Weather {

    constructor(data) {
        this.temp = data.main.temp
    }

    get WeatherTemplate() {
        return /*html*/`
        <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Temperature: ${this.temp}</h3>
                        </div>
          </div>
        `
    }
}