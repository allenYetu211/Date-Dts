import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'

export default [{
    entry: './src/index.js',
    targets: [
        {
            dest: 'dist/bundle.iife.js',
            format: 'iife',
            name: 'dts'
        },
        {
            dest: 'dist/bundle.cjs.js',
            format: 'cjs',
        }, {
            dest: 'dist/bundle.umd.js',
            format: 'umd',
            name: 'dts'
        }, {
            dest: 'dist/bundle.es.js',
            format: 'es'
        }
    ],
    plugins: [
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers'],
        })
    ]
}]