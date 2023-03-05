import { initMixin } from './init'
function Vue(options) {
	console.log('vue')
	this._init(options)
}
initMixin(Vue)
export default Vue