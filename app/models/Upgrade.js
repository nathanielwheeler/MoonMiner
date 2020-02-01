export default class Upgrade {
	constructor(price, multiplier, isAuto) {
		this.price = price || 0
		this.multiplier = multiplier || 0
		this.isAuto = isAuto || false
	}
}