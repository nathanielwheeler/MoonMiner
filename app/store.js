import upgrade from "./models/Upgrade.js"

let _state = {
	cheese: 0,
	upgrades: {
		pickaxe: new upgrade(100, 1, false, 1),
		rover: new upgrade(600, 20, true)
	}
}


class Store {
	get State() {
		return _state;
	}
}
const store = new Store()

export default store;