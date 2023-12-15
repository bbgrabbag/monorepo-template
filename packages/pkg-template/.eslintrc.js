const rootConfig = require('@repo/eslint/library.js');


/** @type {import("eslint").Linter.Config} */
const config =
{
    ...rootConfig,
    root: true,
};

module.exports = config;