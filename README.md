# Convert Digital Challenge
Ryan Crummy

## Description
This repo uses the [Vitamin](https://github.com/wtchnm/Vitamin) template for faster setup.
Task 1 is demonstrated in the `src/` directory.
Task 2 can be found in the `TASK_2.md` file.

## Getting started

Install the dependencies:

```
pnpm install
```

Add the environment variables:

```
cp .env.example .env
```

## Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm test` - run unit and integration tests related to changed files based on git.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm test:e2e` - run all e2e tests with the Cypress Test Runner.
- `pnpm test:e2e:headless` - run all e2e tests headlessly.
- `pnpm format` - format all files with Prettier.
- `pnpm lint` - runs TypeScript, ESLint and Stylelint.
- `pnpm validate` - runs `lint`, `test:ci` and `test:e2e:ci`.
