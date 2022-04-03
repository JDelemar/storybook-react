# Component Monorepo

[![Build and Deploy Storybook](https://github.com/JDelemar/component-monorepo/actions/workflows/storybook.yml/badge.svg)](https://github.com/JDelemar/component-monorepo/actions/workflows/storybook.yml)
[![Storybook pages](https://github.com/JDelemar/component-monorepo/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/JDelemar/component-monorepo/actions/workflows/pages/pages-build-deployment)[![Build and Deploy Storybook Angular](https://github.com/JDelemar/storybook-angular/actions/workflows/storybook.yml/badge.svg)](https://github.com/JDelemar/storybook-angular/actions/workflows/storybook.yml)[![Angular pages](https://github.com/JDelemar/storybook-angular/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/JDelemar/storybook-angular/actions/workflows/pages/pages-build-deployment)[![Build and Deploy Storybook React](https://github.com/JDelemar/storybook-react/actions/workflows/storybook-react.yml/badge.svg)](https://github.com/JDelemar/storybook-react/actions/workflows/storybook-react.yml)[![Storybook React pages](https://github.com/JDelemar/storybook-react/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/JDelemar/storybook-react/actions/workflows/pages/pages-build-deployment)

Component Monorepo to test components.  
View:

- [Storybook on GitHub Pages here](https://jdelemar.github.io/component-monorepo)
- [Angular Storybook on GitHub Pages here](https://jdelemar.github.io/storybook-angular)
- [React Storybook on GitHub Pages here](https://jdelemar.github.io/storybook-react)

## Quick start

- Quick start
  - Clone
  - Install packages `npm install`
  - Develop `npm start` - view at `http://localhost:4200`
  - Storybook `npm run storybook` - view at `http://localhost:6006`

### Notes

- Notes
  - **Multiple origins for a project**
    - Add multiple origins
      - `git remote set-url --add --push origin git@github.com:JDelemar/component-monorepo.git`
      - `git remote set-url --add --push origin git@github.com:JDelemar/storybook-angular.git`
      - `git remote set-url --add --push origin git@github.com:JDelemar/storybook-react.git`
    - Show remote repositories `git remote -v`

#### References

- References
  - [Deploy Storybook to GitHub Pages](https://dev.to/kouts/deploy-storybook-to-github-pages-3bij)
  - [Nx](https://nx.dev)
    - [Storybook | Angular | Nx](https://nx.dev/storybook/overview-angular)
  - [GitHub marketplace](https://github.com/marketplace)
    - [Deploy to GitHub Pages](https://github.com/marketplace/actions/deploy-to-github-pages)
  - [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#patterns-to-match-file-paths)
  - [Obsidian React Components](https://github.com/elias-sundqvist/obsidian-react-components)

#### Original README follows

This project was generated using [Nx](https://nx.dev).  

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@component-monorepo/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
