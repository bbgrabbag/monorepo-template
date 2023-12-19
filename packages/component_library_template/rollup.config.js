const typescriptPlugin = require('@rollup/plugin-typescript');
const jsonPlugin = require('@rollup/plugin-json');

/** @type {import('rollup').RollupOptions} */
const options = {
    input: "src/index.tsx",
    output: {
        file: 'dist/bundle.js',
    },
    plugins: [typescriptPlugin(), jsonPlugin()]
}

module.exports = options