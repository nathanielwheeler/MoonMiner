import store from "../store.js"

class GameService {
	updateCheese() {
		store.State.cheese++
	}

	// Add 1 quantity of upgrade assuming that the required cheese funds are held.
	buyUpgrade(upgradeName) {
		let upgrade = store.State.upgrades[upgradeName]
		if (!upgrade) { throw new Error(`There aren't any upgrades that match '${upgrade}'`) }
		if (store.State.cheese >= upgrade.price) {
			upgrade.quantity++
			store.State.cheese -= upgrade.price
		} else {
			console.log("Insufficient cheese.")
		}
	}
}

const gameService = new GameService()

export default gameService;