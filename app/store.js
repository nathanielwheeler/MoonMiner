let _state = {
	cheese: 0
}

console.log(`You have ${_state.cheese} cheese!`);


class Store {
	get State() {
		return _state;
	}
}
const store = new Store()

export default store;