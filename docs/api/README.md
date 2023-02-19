QIWI SDK / [Exports](modules.md)

# Quality Package Template

> Package template that can get you `99%` quality and `33%` maintenance on `npm`

[![Test Status](https://github.com/AlexXanderGrib/package-template/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/package-template)
[![Downloads](https://img.shields.io/npm/dt/package_template.svg)](https://npmjs.com/package/package_template)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/package-template.svg)](https://github.com/AlexXanderGrib/package-template)
[![codecov](https://img.shields.io/codecov/c/github/AlexXanderGrib/package-template/main.svg)](https://codecov.io/gh/AlexXanderGrib/package-template)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/package-template.svg)](https://github.com/AlexXanderGrib/package-template)
[![package_template](https://snyk.io/advisor/npm-package/package_template/badge.svg)](https://snyk.io/advisor/npm-package/package_template)
[![Known Vulnerabilities](https://snyk.io/test/npm/package_template/badge.svg)](https://snyk.io/test/npm/package_template)
[![Quality](https://img.shields.io/npms-io/quality-score/package_template.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=package_template)
[![npm](https://img.shields.io/npm/v/package_template.svg)](https://npmjs.com/package/package_template)
[![license MIT](https://img.shields.io/npm/l/package_template.svg)](https://github.com/AlexXanderGrib/package-template/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/package_template)](https://bundlephobia.com/package/package_template)

## Why use this template

1. I used this approach personally to publish following packages
   1. [`qiwi-sdk`](https://npmjs.com/package/qiwi-sdk)
   2. [`yoomoney-sdk`](https://npmjs.com/package/yoomoney-sdk)
   3. [`unpc`](https://npmjs.com/package/unpc)
   4. [`tie-logger`](https://npmjs.com/package/tie-logger)
2. They all got `99`+% quality rating on NPM
3. Most of them are located on 1st page of [npm search by keyword `backend`](https://www.npmjs.com/search?q=keywords:backend)

## What to do

1. Replace package name and package description here and in [package.json](./package.json)
2. Replace `AlexXanderGrib/package-template` to your repository
3. Replace `package_template` to your package name
4. Write some code and cover it with tests

### How to max `quality`

1. Write tests and increase coverage. To exclude files with destructive side-effects, you can use following comment
   ```javascript
   /* istanbul ignore file */
   ```
2. Everything else is already in this template
   1. TypeScript support
   2. Auto build to both ES-Modules and CommonJS
   3. TS-Jest
   4. Exports mapping
   5. Git Hooks
3. Remember to run `npm test` before publishing to include coverage files in package and increase quality of your package

### How to max `maintenance`?

Upload 3 versions of your package in 24 hours. You can not get more than 33% maintenance on `npm`

## 📦 Installation

- **Using `npm`**
  ```shell
  npm i package_template
  ```
- **Using `Yarn`**
  ```shell
  yarn add package_template
  ```
- **Using `pnpm`**
  ```shell
  pnpm add package_template
  ```

## ⚙️ Usage

```javascript
import { Example } from "package_template";

const container = new Example(10);

console.log(container);
// Example { value: 10 }
```
