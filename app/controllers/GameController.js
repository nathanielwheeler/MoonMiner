import store from "../store.js"
import GameService from "../services/GameService.js"

// PRIVATE
let _cheeseElem = document.getElementById("cheese")

function _draw() {
	// _cheeseElem.innerText = store.State.cheese.toFixed(0)
	console.log(`cheese: ${store.State.cheese}`)
}

// PUBLIC
export default class GameController {

	mine() {
		console.log("Mining!")
		GameService.updateCheese()
		_draw()
	}

}