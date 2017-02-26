# YARIS
**Yet Another React ~~Isomorphic~~ Universal Starter**

[![Build Status](https://travis-ci.org/epilande/yaris.svg?branch=master)](https://travis-ci.org/epilande/yaris)
[![codecov](https://codecov.io/gh/epilande/yaris/branch/master/graph/badge.svg)](https://codecov.io/gh/epilande/yaris)
[![Greenkeeper badge](https://badges.greenkeeper.io/epilande/yaris.svg)](https://greenkeeper.io/)
[![dependencies Status](https://david-dm.org/epilande/yaris/status.svg)](https://david-dm.org/epilande/yaris)

If you don't want Universal JavaScript, check out my other boilerplate **[YARS](https://github.com/epilande/yars)**.


## Features
- [X] Server-Side Rendering
- [X] Webpack v2
- [X] React
- [X] React HMR
- [X] React Redux
- [X] React Router (async routes)
- [X] React storybook
- [X] Babel
- [X] Styled-components
- [X] Jest and Enzyme
- [X] ESLint
- [X] Stylelint
- [X] NPM Scripts


## Quick Start

#### Clone this repo

```bash
$ git clone https://github.com/epilande/yaris.git
$ cd yaris
```

#### Install dependencies

```bash
$ npm install # or yarn
```

#### Launch dev environment

```bash
$ npm run dev
```


## Available Commands
|`npm run <script>`|Description|
|------------------|-----------|
|`dev`|Starts app on `localhost:3000` in development mode with HMR enabled.|
|`start`|Starts `./public/server.js`, which has production bundles.|
|`build`|Runs `build:prod` & `build:server` to create production bundles.|
|`build:prod`|Creates **client** bundle with production environment.|
|`build:server`|Creates **server** bundle with production environment.|
|`lint`|Lints `./src/**/*.js` & `./server/**/*.js` with eslint & stylelint.|
|`test`|Runs unit tests with Jest & generates coverage report.|
|`test:watch`|Same as `npm run test`, but watches for changes to re-run tests.|
|`storybook`|Starts `react-storybook` on `localhost:9001`.|


## Structure
**Feature-first** approach, all of the related files are in one place.

```
src/
├── components/                  // Shared or generic UI components
│   ├── A/
│   ├── Button/
│   │   ├── test/
│   │   │   ├── index.test.js    // Tests for component
│   │   ├── index.js             // The actual Button component
│   │   ├── index.stories.js     // This gets picked up by react-storybook
│   ├── Footer/
│   └── ...
├── containers/
│   └── FeaturePage/
│      ├── components/           // All FeaturePage specific components live here
│      │   ├── List/
│      │   ├── ListItem/
│      │   ├── ListItemTitle/
│      │   │  └── index.js
│      │   └── ...
│      ├── actions.js
│      ├── constants.js
│      ├── index.js
│      ├── reducer.js
│      └── ...
```
