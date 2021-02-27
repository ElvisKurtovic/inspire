export default class Todo {

    constructor(data) {
        this.id = data._id
        this.completed = data.completed
        this.user = data.user
        this.description = data.description
    }

    get TodoTemplate() {
        return /*html*/`
        <div class='row'>
        <ul class= '' ><li class=''><span class=''>${this.description}</span> 
        <input id='checkbox' type="checkbox" value="">    
        <button type="button" class="btn text-danger close"
        onclick="app.todosController.delete('${this.id}')"><span>&times;</span></button></li> </ul>
        </div>
        `
    }
}