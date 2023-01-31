module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'commonjs': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'experimentalObjectRestSpread': true,
        'sourceType': 'module'
    },
    'plugins': ['@typescript-eslint'],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-console': 'off',
        'max-classes-per-file': ['error', 2],
    }
};
