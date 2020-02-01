export default class Upgrade {
	constructor(price, multiplier, isAuto, quantity) {
		this.price = price || 0
		this.multiplier = multiplier || 0
		this.isAuto = isAuto || false
		this.quantity = quantity || 0
	}
}