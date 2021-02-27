
import ApiWeathersController from "./Controllers/WeathersController.js";
import ApiQuotesController from "./Controllers/QuotesController.js";
import TodosController from "./Controllers/TodosController.js";
import ImagesController from "./Controllers/ImagesController.js";

class App {

  apiWeathersController = new ApiWeathersController();
  apiQuotesController = new ApiQuotesController();
  todosController = new TodosController();

  imagesController = new ImagesController();

}

window["app"] = new App();
