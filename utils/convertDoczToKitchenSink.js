const prettier = require('prettier');
const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');
const { read, write } = require('to-vfile');
const remark = require('remark');
const remove = require('unist-util-remove');

const mdx = require('remark-mdx');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const getMdxFiles = async () => {
  return glob.sync('src/**/*.mdx').map(filename => path.resolve(filename));
};

function transformHeadings() {
  const depthMap = {
    1: 'xxlarge',
    3: 'large',
  };

  function transformer(tree) {
    const toJsx = node => {
      let { depth } = node;

      let text = toString(node);

      const html = `<Heading size="${depthMap[depth]}">${text}</Heading>`;

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
      node.type === 'jsx' && node.value.includes('Props');

    remove(tree, isNotH1);
    remove(tree, isPropsTable);
  };
}

function collectImports(imports) {
  return function() {
    function transformer(tree) {
      const addToImports = node => {
        const removedDocz = node.value.replace(
          `import { Playground, Props } from 'docz';`,
          '',
        );

        imports.push(removedDocz);
      };

      visit(tree, 'import', addToImports);
    }

    return transformer;
  };
}

const wrapContent = content => {
  return `export const KitchenSink = () => {
  <View>
    ${content}
  </View>
}`;
};

const combine = (content, imports) => {
  const data = imports.join('\n') + '\n\n' + wrapContent(content);

  return prettier.format(data, { parser: 'typescript' });
};

const convertDoczToKitchenSink = async () => {
  const path = './example.tsx';
  const mdxFilePaths = await getMdxFiles();

  let content = '';
  let imports = [];
  let relativeImports = [];

  for (const mdxFilePath of mdxFilePaths) {
    const file = await read(mdxFilePath);

    const result = await remark()
      .use(collectImports(imports, relativeImports))
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
