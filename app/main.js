import GameController from "./controllers/GameController.js";

class App {
  gameController = new GameController();
}

window["app"] = new App();