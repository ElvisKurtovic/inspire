export default class Quote {

    constructor(data) {
        this.author = data.author
        this.quote = data.content
    }

    get QuoteTemplate() {
        return /*html*/`
        <div class="card bg-transparent border-0 text-light text-center">
                        <div class="card-body">
                            <p class="card-title"> ${this.quote}</p>
                            <p class="card-title"> -${this.author}</p>
                        </div>
          </div>
        `
    }
}