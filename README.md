<h1 align="center">Welcome to generator-quality-vue3-plugin 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/cristopher1/generator-quality-vue3-plugin#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/cristopher1/generator-quality-vue3-plugin/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/cristopher1/generator-quality-vue3-plugin/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/cristopher1/generator-quality-vue3-plugin" />
  </a>
</p>

> Yeoman generator to create a Vue3 plugin with eslint, prettier, commitlint, husky, babel and other tools.

### 🏠 [Homepage](https://github.com/cristopher1/generator-quality-vue3-plugin)

This generator was created using [generator-esmodules-generator](https://www.npmjs.com/package/generator-esmodules-generator) version 0.1.1

The `generator-quality-vue3-plugin` provides a structure to create a Vue3 plugin similar to that used in the: [@cljmenez/vue-localstorage-reactive](https://www.npmjs.com/package/@cljimenez/vue-localstorage-reactive). The structure created by this generator includes:

- [Jest](https://jestjs.io/) with [jest-environment-jsdom](https://jestjs.io/es-ES/docs/tutorial-jquery)
- [Babel](https://babeljs.io/) with [@babel/cli](https://babeljs.io/docs/babel-cli), [@babel/core](https://babeljs.io/docs/babel-core),
  [@babel/plugin-transform-runtime](https://babeljs.io/docs/babel-plugin-transform-runtime), [@babel/preset-env](https://babeljs.io/docs/babel-preset-env),
  [@babel/runtime-corejs3](https://www.npmjs.com/package/@babel/runtime-corejs3) and [core-js](https://www.npmjs.com/package/core-js)
- [Eslint](https://eslint.org/) with [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier), [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard),
  [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest), [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc), etc.
- [Prettier](https://prettier.io/) with [prettier-plugin-jsdoc](https://www.npmjs.com/package/prettier-plugin-jsdoc)
- [Lint-staged](https://www.npmjs.com/package/lint-staged)
- [Faker](https://fakerjs.dev/)
- [Commitlint](https://commitlint.js.org/#/)
- [Rollup](https://rollupjs.org/) with [@rollup/plugin-babel](https://www.npmjs.com/package/@rollup/plugin-babel), [@rollup/plugin-node-resolve](https://www.npmjs.com/package/@rollup/plugin-node-resolve) and [rollup-plugin-dts](https://www.npmjs.com/package/rollup-plugin-dts)
- [Readme-md-generator](https://github.com/kefranabg/readme-md-generator)
- [Husky](https://www.npmjs.com/package/husky)
- Others

Example of a Vue3 plugin generated by `generator-quality-vue3-plugin`:

![example_generated_by_generator_quality_vue3_plugin](https://github.com/cristopher1/generator-quality-vue3-plugin/assets/21159930/dd3d76be-835b-42c0-ae9f-5eaf8d4927be)

This generator uses rollup to create the dist folder. The packages published by this generator are exported using the following structure:

package.json

```json
"main": "./dist/cjs/index.cjs",
"types": "./dist/types/index.d.ts",
"exports": {
  "types": "./dist/types/index.d.ts",
  "import": "./dist/esm/index.mjs",
  "require": "./dist/cjs/index.cjs"
},
"files": [
  "dist"
]
```

### [Index](#index)

- [Installation](#installation)
- [The folder structure](#structure)
- [The configuration files](#configuration-files)
- [The question: Do you want to automatically run the scripts that configure the package, then installing the dependencies?](#configuring-the-project-automatically)
- [The scripts in package.json](#scripts)
- [Getting To Know Yeoman](#know-yeoman)
- [Author](#author)
- [Contributing](#contributing)
- [Show your support](#support)
- [License](#license)

## <a id="installation"></a> Installation

First, install [Yeoman](http://yeoman.io) and generator-quality-vue3-plugin using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-quality-vue3-plugin
```

Then generate your new project:

```bash
yo quality-vue3-plugin
```

## <a id="structure"></a> The folder structure

The folders created by this generator are:

- `__tests__`: Contains the tests.
- `.husky`: Contains the scripts used by husky.
- `coverage`: Contains the test coverage.
- `dist`: Includes three folders:
  - `cjs`: Source code transpiled to es5 (index.cjs).
  - `esm`: Source code transpiled to es6 (index.mjs).
  - `types`: Declaration file (index.d.ts).
- `src`: Contains the source code. It includes the files and folders

  - `globals`: Contains the files to extends `@vue/runtime-core`. The functions $getGreeting and $greet are added in globalProperties for this generator when it creates the default plugin:

    ![@vue-runtime-core](https://github.com/cristopher1/generator-quality-vue3-plugin/assets/21159930/1fd6e932-093d-4893-bcc5-e7bcfc0b486b)

  - `gretting`: Example folder. Contains the functions $getGreeting and $greet.
    
  - `installer`: Contains the class used to install the plugin (class that contains the install method).

  - `main.js`: Exports the function createInstaller used to create the installer object that will be used to install the plugin in Vue3.

    Example:

    ![createInstaller](https://github.com/cristopher1/generator-quality-vue3-plugin/assets/21159930/e060a976-bb80-4947-bdfa-8a7ca11c189b)

    ![greetFunction](https://github.com/cristopher1/generator-quality-vue3-plugin/assets/21159930/e0cbf619-8afc-4500-aef4-5858d00e20a8)

    ![getGreetingFunction](https://github.com/cristopher1/generator-quality-vue3-plugin/assets/21159930/cdc1327b-e41d-4b02-8d66-c4b6cb0f0631)

    The main.js file also it is the entrypoint used by rollup to generate the es5 and es6 folders (see rollup.config.js or rollup.config.mjs)

- `index.ts`: Exports the globals/index.js content and the createInstaller. It is the entrypoint used by rollup to generate the types folder (see rollup.config.js or rollup.config.mjs)

## <a id="configuration-files"></a> The configuration files

The configuration files included are:

- Eslint: `.eslintignore` (the files and directories ignored by eslint) and `.eslintrc.json` (configuration used by eslint).

- Git: `.gitignore` (the files and directories ignored by git).

- Lint-staged: `.lintstagedrc.json` (configuration used by lint-staged).

- Prettier: `.prettierignore` (the files and directories ignored by prettier) and `.prettierrc.json` (configuration used by prettier).

- Babel: `babel.config.json` (configuration used by babel):

  - The `env.buildCommonjs` contains the configuration used to transpile the source code to es5. It is used into `rollup.config.js` and `rollup.config.mjs`.

  - The `env.buildESmodules` contains the configuration used to transpile the source code to es6. It is used into `rollup.config.js` and `rollup.config.mjs`.

  - If the package.json, generated by this generator, contains the field `type:commonjs` will be included the `env.test` property in babel.config.json. That property is used by jest to transpile the source code to es5 before to run the tests.

- Commitlint: `commitlint.config.js` (configuration used by commitlint).

- Jest: `jest.config.js` (configuration used by jest).

- Rollup: `rollup.config.js` and `rollup.config.mjs` (configuration used by rollup).

- TypeScript: `tsconfig.json` (configuration used by TypeScript compiler).

## <a id="configuring-the-project-automatically"></a> The question: Do you want to automatically run the scripts that configure the package, then installing the dependencies?

When you selects the true value, the following scripts ubicated in the package.json are executed:

- `init`
- `documentation:create`
- `test`
- `build`

If you selects the false value, you must run `npm run init` obligatory.

## <a id="scripts"></a> The scripts in package.json

The more important scripts added into the package.json created by this generator are:

- `"init"`: Runs the commands necessary to initialize the package, for example `init:husky`.
- `"documentation:create"`: Creates documentation using readme-md-generator.
- `"format"`: Checks the format using prettier.
- `"format:fix"`: Fixes the format using prettier.
- `"format:build-stage"` and `"format:build-stage:fix"`: similar to `"format"` and `"format:fix"`. They used when the `npm run build` is called.
- `"lint"`: static code analysis using eslint.
- `"lint:fix"`: Fixes the code using eslint.
- `"lint:build-stage"` and `"lint:build-stage:fix"`: similar to `"lint"` and `"lint:fix"`. They are used when the `npm run build` is called.
- `"build:bundle"`: Bundles the files into src folder using rollup. It is used when the `npm run build` is called.
- `"build:tsc"`: Generates .d.ts files using the TypeScript compilator. It is used when the `npm run build` is called.
- `"build"`: Generates the dist folder that contains the cjs folder (source code transpiled to es5), the esm folder (source code transpiled to es6), and types folder (it contains the declaration files).
- `"prepublishOnly"`: Used before publishing your package using `npm publish`. Runs `npm run build`.
- `"test"`: Runs the tests using jest.
- `"commitlint"`: Runs commitlint. It is used into .husky/commit-msg file. It is called by the commit-msg hook. See [git hook](https://www.atlassian.com/git/tutorials/git-hooks#:~:text=The%20commit%2Dmsg%20hook%20is,file%20that%20contains%20the%20message.).
- `"lint-staged"`: Runs lint-staged. It is used into .husky/pre-commit file. It is called by the pre-commit hook. See [git hook](https://www.atlassian.com/git/tutorials/git-hooks#:~:text=The%20commit%2Dmsg%20hook%20is,file%20that%20contains%20the%20message.).
- `"quality-check"`: Runs `npm run format && npm run lint && npm run test`. It is used into .husky/pre-push file. It is called by the pre-push hook See [git hook](https://www.atlassian.com/git/tutorials/git-hooks#:~:text=The%20commit%2Dmsg%20hook%20is,file%20that%20contains%20the%20message.).

## <a id="know-yeoman"></a> Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman](http://yeoman.io/).

## <a id="author"></a> Author

👤 **Cristopher Jiménez**

- Github: [@cristopher1](https://github.com/cristopher1)

## <a id="contributing"></a> 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/cristopher1/generator-quality-vue3-plugin/issues). You can also take a look at the [contributing guide](https://github.com/cristopher1/generator-quality-vue3-plugin/blob/master/CONTRIBUTING.md).

## <a id="support"></a> Show your support

Give a ⭐️ if this project helped you!

## <a id="license"></a> 📝 License

Copyright © 2023 [Cristopher Jiménez](https://github.com/cristopher1).<br />
This project is [MIT](https://github.com/cristopher1/generator-quality-vue3-plugin/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
