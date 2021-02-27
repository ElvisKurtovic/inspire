export default class Todo {

    constructor(data) {
        this.id = data._id
        this.completed = data.completed
        this.user = data.user
        this.description = data.description
    }

    get TodoTemplate() {
        return /*html*/`
                <div class="col-4 border rounded shadow-sm text-light">
                    
                    <form onsubmit="todoApi.postTodo(event, '${this.id}')">
                        <div class="form-group">
                            <input required type="text" minlength='3' maxlength='50' name="body" placeholder="Task">
                            <button class="btn btn-dark" type="submit">Add</button>
                            </form>
                            </div>
                            <div class="row align-content-center justify-content-between">
                        
                            <div class='col-12'>
                            ${this.description}
                            </div>
                            </div>
                </div>
        `
    }
}