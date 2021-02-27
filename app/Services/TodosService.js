import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { todoApi } from "./AxiosService.js";

class TodosService {

    constructor() {
        // this.getApiQuotes()
    }

    // async getApiQuotes() {
    //     try {
    //         const res = await mainApi.get("quotes")
    //         console.log(res)
    //         ProxyState.apiQuotes = new Quote(res.data)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    async postTodo() {
        try {
            let res = await todoApi.post("", ProxyState.todos)
            console.log(res)
            // this.getMyPokemons()
            ProxyState.todos = new Todo(res.data)
        } catch (error) {
            console.error(error)
        }
    }


}



export const todosService = new TodosService();