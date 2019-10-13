module.exports = {
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'eslint-config-prettier'],
    plugins: ['babel'],
    env: {
        node: true,
        browser: true,
        es6: true,
    },
}
