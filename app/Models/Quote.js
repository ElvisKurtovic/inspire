export default class Quote {

    constructor(data) {
        this.author = data.author
        this.quote = data.content
    }

    get QuoteTemplate() {
        return /*html*/`
        <div class="card bg-transparent border-0 text-light">
                        <div class="card-body">
                            <h3 class="card-title"> ${this.quote}</h3>
                            <h3 class="card-title"> -${this.author}</h3>
                        </div>
          </div>
        `
    }
}