import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'

export default {
	input: './src/index.js', // 入口文件
	output: {
		file: 'dist/Vue.js', // 出口
		format: 'umd', // 打包格式
		name: 'Vue', // umd格式下会在wind下挂载一个Vue
		sourcemap: true // 资源映射
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
		}),
		serve({
			port: 3000,
			contentBase: '',
			openPage: './index.html',
		})
	]
}