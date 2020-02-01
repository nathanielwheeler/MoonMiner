import upgrade from "./models/Upgrade.js"

let _state = {
	cheese: 0
}

class Store {
	get State() {
		return _state;
	}
}
const store = new Store()

export default store;