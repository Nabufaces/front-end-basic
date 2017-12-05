class Stack {
	constructor() {
		this.data = []
	}
	size() {
		return this.data.length
	}
	push(data) {
		this.data.splice(0, 0, data)
	}
	pop() {
		return this.data.shift()
	}
	top() {
		return this.data[0]
	}
	clear() {
		this.data.length = 0;
	}
}