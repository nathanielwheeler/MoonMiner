import store from "../store.js"

class GameService {
	updateCheese() {
		store.State.cheese++
	}
}

const gameService = new GameService()

export default gameService;