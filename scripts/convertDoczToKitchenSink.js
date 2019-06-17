const prettier = require('prettier');
const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');
const { read } = require('to-vfile');
const remark = require('remark');
const remove = require('unist-util-remove');

const mdx = require('remark-mdx');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

// TODO: Refactor this file

const getMdxFiles = async () => {
  return glob
    .sync('src/**/*.mdx')
    .map(filename => path.resolve(filename))
    .filter(f => !f.includes('KitchenSink'));
};

function transformHeadings() {
  function transformer(tree) {
    const toJsx = node => {
      let text = toString(node);

      const html = `<Box paddingTop={96}><Heading size="xxxlarge" weight="500">${text}</Heading></Box>`;

      node.type = 'jsx';
      node.children = undefined;
      node.value = html;
    };

    visit(tree, 'heading', toJsx);
  }

  return transformer;
}

function removeUnused() {
  return tree => {
    remove(tree, 'import');
    remove(tree, 'thematicBreak');
    remove(tree, 'paragraph');

    const isNotH1 = node => node.type === 'heading' && node.depth !== 1;
    const isPropsTable = node =>
      node.type === 'jsx' && node.value.includes('<Props');

    remove(tree, isNotH1);
    remove(tree, isPropsTable);
  };
}

function collectImports(imports) {
  return function() {
    function transformer(tree) {
      const addToImports = node => {
        const importWithoutDocz = node.value.replace(
          `import { Playground, Props } from 'docz';`,
          '',
        );

        imports.push(importWithoutDocz);
      };

      visit(tree, 'import', addToImports);
    }

    return transformer;
  };
}

const wrapContent = content => {
  return `export const KitchenSink = () => {
  return (
    <Box padding={16}>
      ${content}
    </Box>
  )
}`;
};

const dedupImports = imports => {
  const BLACKLIST_IMPORT = ['Toast'];
  const regex = /{ (.*?) }/;
  const components = [];

  imports.map(i => {
    const result = regex.exec(i);

    if (result) {
      components.push(...result[1].split(', '));
    }
  });

  const dedupedComponents = Array.from(new Set(components));

  return dedupedComponents.filter(c => !BLACKLIST_IMPORT.includes(c));
};

const combine = (content, imports) => {
  const defaultImports = [
    `// ===================================================`,
    `// ===================================================`,
    `// THIS IS GENERATED FILE. DO NOT EDIT THIS AND USE SCRIPT 'yarn generate:kitchen-sink' TO UPDATE THIS COMPONENT INSTEAD.`,
    `// ===================================================`,
    `// ===================================================`,
    `// tslint:disable`,
    `import React from 'react';`,
  ];

  const data =
    defaultImports.join('\n') +
    `import { Playground, ${dedupImports(imports).join(', ')} } from '..';` +
    '\n\n' +
    wrapContent(content);

  return prettier.format(data, {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });
};

const convertDoczToKitchenSink = async () => {
  const path = './src/components/KitchenSink/KitchenSink.tsx';
  const mdxFilePaths = await getMdxFiles();

  let content = '';
  let imports = [];

  for (const mdxFilePath of mdxFilePaths) {
    const file = await read(mdxFilePath);

    const result = await remark()
      .use(collectImports(imports))
      .use(mdx)
      .use(removeUnused)
      .use(transformHeadings)
      .process(file);

    content += result.contents + '\n';
  }

  const data = combine(content, imports);
  fs.writeFileSync(path, data, { encoding: 'utf-8' });
};

convertDoczToKitchenSink();
