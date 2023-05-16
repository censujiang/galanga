/* eslint-disable @typescript-eslint/no-var-requires */
// rollup.config.js
// ES output
var common = require('./rollup.js');
var terser = require('rollup-plugin-terser').terser;
var typescript = require('@rollup/plugin-typescript');

var prod = process.env.NODE_ENV === 'production';

module.exports = {
    input: 'src/index.ts',
    output: {
        file: prod ? 'dist/index.esm.min.js' : 'dist/index.esm.js',
        format: 'es',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        banner: prod ? '' : common.banner,
    },
    plugins: [
        common.getCompiler(),
        (prod && terser())
    ]
};
