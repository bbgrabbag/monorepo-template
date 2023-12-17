# Monorepo Template

Starter boilerplate for a React/Typescript monorepo. Includes Storybook implementation, Linting/Testing scripts and pre-commit hooks for auto formatting.

# Get Started
> Note: This repo uses [pnpm](https://pnpm.io/) package manager and [Turborepo](https://turbo.build/repo). Please read documentation for additional CLI options.

### Scripts
All `turbo` commands can be flagged with a `--filter=<workspace-name>` argument to trigger commands specifically for that workspace.

- `pnpm i` Install dependencies.
- `turbo dev` Run workspace dev servers.
- `turbo dev:storybook`  Run workspace Storybook servers.
- `turbo test` Run workspace tests.
- `turbo build` Start workspace production build.
- `turbo lint` Lint all workspaces packages.
- `turbo format` Format all workspace packages.
- `turbo deploy` Run deploy script for all workspace packages.
- `turbo gen create-component` Follow prompts to generate new React component, unit test, and Storybook story from a pre-made template.

### File Structure

##### Apps
`apps/` folder contains all independently deployable applications. A template for a NextJS is included called [nextjs_template](./apps/nextjs_template/README.md). 

##### Packages
`packages/` folder contains all shared libraries which are consumed by other apps and packages. A template for a basic React component library is included called [component_library_template](./packages/component_library_template/README.md).

##### Configs
`configs/` folder includes all shared configuration files (Typescript, ESLint, Jest, etc.) which are consumed by other apps and packages.