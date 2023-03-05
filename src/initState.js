import { observer } from './observe/index'
export function initState(vm) {
	let opt = vm.$options
	if (opt.props) {
		initProps(vm)
	}
	if (opt.data) {
		initData(vm)
	}
}
function initProps(vm) {

}
function initData(vm) {
	let data = vm.$options.data
	data = vm._data = typeof data === 'function' ? data.call(vm) : data
	console.log(vm);
	// 观察者监听data数据
	observer(data)
}