const typescriptPlugin = require('@rollup/plugin-typescript')

/** @type {import('rollup').RollupOptions} */
const options = {
    input: "src/index.tsx",
    output: {
        file: 'dist/bundle.js',
    },
    plugins: [typescriptPlugin()]
}

module.exports = options