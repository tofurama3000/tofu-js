import { terser } from 'rollup-plugin-terser';

export default [
	{
    input: 'src/index.js',
		output: [
			{
				name: 'hatJs',
				file: 'dist/hat-js.umd.js',
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
				file: 'dist/hat-js.esm.js',
				format: 'es'
			}
		],
		plugins: [terser()]
	},
	{
		input: 'src/index.js',
		plugins: [],
		preserveModules: true,
		output: [
			{
				dir: "dist",
				format: 'cjs'
			}
		]
	}
];
