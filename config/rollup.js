var typescript = require('rollup-plugin-typescript2');

var pkg = require('../package.json');

var version = pkg.version;

var banner = 
`/*!
 * ${pkg.name} ${version} (https://github.com/censujiang/galanga)
 * API https://github.com/censujiang/galanga/blob/master/doc/api.md
 * Copyright 2014-${(new Date).getFullYear()} censujiang. All Rights Reserved
 * Licensed under Appache (https://github.com/censujiang/galanga/blob/master/LICENSE)
 */
`;

function getCompiler(opt) {
    opt = opt || {
        tsconfigOverride: { compilerOptions : { module: 'ES2015' } }
    }

    return typescript(opt);
}

exports.name = 'galanga';
exports.banner = banner;
exports.getCompiler = getCompiler;
