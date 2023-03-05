function observer(data) {
	// 如果data不是对象就直接返回
	if (typeof data !== 'object' || data === null) {
		return data
	}
	// 否则的话对这个data进行响应式处理
	return new Observer(data)
}
class Observer {
	constructor(data) {
		// 遍历data
		this.walk(data)
	}
	walk(data) {
		let keys = Object.keys(data)
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i]
			let value = data[key]
			// 对对象的每一项劫持
			defineReactive(data, key, value)
		}
	}
}
function defineReactive(data, key, value) {
	// 递归遍历 
	observer(value)
	Object.defineProperty(data, key, {
		get() {
			return value
		},
		set(newValue) {
			if (newValue === value) return
			observer(newValue)
			value = newValue
		}
	})
}
export { observer }