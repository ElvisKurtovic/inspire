
import ApiWeathersController from "./Controllers/WeathersController.js";
import ApiQuotesController from "./Controllers/QuotesController.js";
import TodosController from "./Controllers/TodosController.js";

class App {

  apiWeathersController = new ApiWeathersController();
  apiQuotesController = new ApiQuotesController();
  todosController = new TodosController();

}

window["app"] = new App();
