import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js"

function _drawTodos() {
    let todolist = ProxyState.todos
    let template = ""
    document.getElementById("todo").innerHTML = todolist.TodoTemplate;
}
export default class TodosController {
    constructor() {
        // console.log("mypokemonscontroller");
        ProxyState.on("todos", _drawTodos)
    }

    postTodo() {
        todosService.postTodo()
    }
}