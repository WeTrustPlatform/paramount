const mdx = require('@mdx-js/mdx');
const babel = require('babel-core');

module.exports = {
  process: function(src, filename, config, options) {
    let result = mdx.sync(src);

    const code = `
    import React from 'react'
    import { MDXTag } from '@mdx-js/tag'
    ${result}
    `;

    const transformedCode = babel.transformSync(code, {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }).code;

    return transformedCode;
  },
};
