import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js"

function _drawTodos() {
    let todolist = ProxyState.todos
    let template = ""

    todolist.forEach(t => template += t.TodoTemplate)
    document.getElementById("todo").innerHTML = template;
}
export default class TodosController {
    constructor() {
        // console.log("mypokemonscontroller");
        ProxyState.on("todos", _drawTodos)
    }

    postTodo(event) {
        event.preventDefault()
        let form = event.target
        let rawTodo = {
            description: form.description.value
        }
        todosService.postTodo(rawTodo)
    }

    delete(id) {
        todosService.delete(id)
    }
}