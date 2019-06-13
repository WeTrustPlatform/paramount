const fs = require('fs');
const glob = require('glob');
const path = require('path');

const pkg = require('../package.json');

const distPath = path.resolve(__dirname, '../dist');

fs.copyFileSync(
  path.resolve(__dirname, '../README.md'),
  `${distPath}/README.md`,
);

fs.copyFileSync(path.resolve(__dirname, '../LICENSE'), `${distPath}/LICENSE`);

pkg.main = 'cjs/index.js';

fs.writeFileSync(`${distPath}/package.json`, JSON.stringify(pkg, null, 2));
