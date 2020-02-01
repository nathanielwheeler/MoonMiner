import store from "../store.js"
import GameService from "../services/GameService.js"

// PRIVATE
let _cheeseElem = document.getElementById("cheese")

function _draw() {
	_cheeseElem.innerText = store.State.cheese.toFixed(0)
	console.log(`cheese: ${store.State.cheese}`)
}

// PUBLIC
export default class GameController {
	// TODO Delete this
	stateCheck() {
		return store.State
	}

	mine() {
		console.log("Mining!")
		GameService.updateCheese()
		_draw()
	}

	buyUpgrade(upgradeName) {
		try {
			GameService.buyUpgrade(upgradeName)
			console.log(`You got one ${upgradeName}!`);

		} catch (error) {
			console.error(error)
		}
	}

}