import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { mainApi } from "./AxiosService.js";

class TodosService {

    constructor() {
        this.getApiTodos()
    }

    async delete(id) {
        const res = await mainApi.delete(`elvis/todos/${id}`)
        this.getApiTodos()
    }

    async getApiTodos() {
        try {
            const res = await mainApi.get("elvis/todos")
            console.log(res)
            ProxyState.todos = res.data.map(rawTodo => new Todo(rawTodo))
        } catch (error) {
            console.error(error)
        }
    }

    async postTodo(rawTodo) {
        try {
            const res = await mainApi.post("elvis/todos", rawTodo)
            console.log(res)
            // this.getMyPokemons()
            // @ts-ignore
            ProxyState.todos = [new Todo(res.data), ...ProxyState.todos]
        } catch (error) {
            console.error(error)
        }
    }

    async putTodo(id) {
        try {
            let todochange = ProxyState.todos.find(t => t.id == id)
            todochange.completed = !todochange.completed
            const res = await mainApi.put(`elvis/todos/${id}`, todochange)
            this.getApiTodos()
        } catch (error) {
            console.error(error)
        }
    }




}



export const todosService = new TodosService();