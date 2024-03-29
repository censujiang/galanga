/* eslint-disable @typescript-eslint/no-var-requires */
// rollup.config.js
// commonjs
var common = require('./rollup.js');
var uglify = require('rollup-plugin-uglify').uglify;
//var typescript = require('@rollup/plugin-typescript');

var prod = process.env.NODE_ENV === 'production';

module.exports = {
    input: 'src/index.ts',
    output: {
        file: prod ? 'dist/index.min.js' : 'dist/index.js',
        format: 'cjs',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        banner: common.banner,
    },
    external: ['moment'],
    plugins: [
        common.getCompiler({
            tsconfigOverride: { compilerOptions: { declaration: true, module: 'ES2015' } },
            useTsconfigDeclarationDir: true
        }),
        (prod && uglify())
    ]
};
