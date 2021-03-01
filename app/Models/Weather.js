export default class Weather {

    constructor(data) {
        this.temp = data.main.temp
    }

    get WeatherTemplate() {
        return /*html*/`
        <div class="card bg-transparent border-0">
                        <div class="card-body text-light">
                            <p class="card-title text-right">${this.temp}°</p>
                        </div>
          </div>
        `
    }
}