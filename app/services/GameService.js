import store from "../store.js"

class GameService {
	updateCheese() {
		store.State.cheese++
	}

	buyUpgrade(upgradeId) {
		// Add 1 quantity of upgrade that matches the ID assuming that the required cheese funds are held.

	}
}

const gameService = new GameService()

export default gameService;