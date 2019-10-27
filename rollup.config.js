import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

export default [
	{
    input: 'src/index.js',
		output: [
			{
				name: 'hatJs',
				file: pkg.browser,
				format: 'umd'
			}
		],
		plugins: [
			terser()
		]
	},
	{
    input: 'src/index.js',
		output: [
			{
				file: pkg.main,
				format: 'cjs'
			},
			{
				file: pkg.module,
				format: 'es'
			}
		]
	}
];
