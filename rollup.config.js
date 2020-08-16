import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
	{
    input: 'src/index.ts',
		output: [
			{
				name: 'hatJs',
				file: 'dist/hat-js.umd.js',
				format: 'umd'
			}
		],
		plugins: [ typescript(), terser() ]
	},
	{
    input: 'src/index.ts',
		output: [
			{
				file: 'dist/hat-js.esm.js',
				format: 'es'
			}
		],
		plugins: [ typescript(), terser()]
	},
	{
		input: 'src/index.ts',
		plugins: [typescript()],
		preserveModules: true,
		output: [
			{
				dir: "dist",
				format: 'cjs'
			}
		]
	}
];
