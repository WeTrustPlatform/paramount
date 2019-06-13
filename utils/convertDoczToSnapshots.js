const path = require('path');
const fs = require('fs');
const React = require('react');
const { create } = require('react-test-renderer');

const removeMarkdownElements = json => {
  if (!json || !json.type) return null;

  return json.children
    .map(child => {
      if (!child.type) return null;
      if (child.type !== 'removeme') return child;
      if (!child.children || child.children.length === 0) return null;

      return removeMarkdownElements(child.children);
    })
    .filter(child => child !== null);
};

const defineSnapshot = (name, index, childDocument) => {
  it(`${name}_${index}`, () => {
    expect(childDocument).toMatchSnapshot();
  });
};

const defineSnapshots = (component, name) => {
  const element = React.createElement(
    component,
    {
      components: {
        hr: 'removeme',
        h2: 'removeme',
        h3: 'removeme',
        p: 'removeme',
      },
    },
    null,
  );

  let jsonDocument = create(element).toJSON();

  const children = removeMarkdownElements(jsonDocument);

  children.forEach((child, index) => defineSnapshot(name, index, child));
};

const requireContext = (
  base = '.',
  scanSubDirectories = false,
  regularExpression = /\.js$/,
) => {
  const files = {};

  const readDirectory = directory => {
    fs.readdirSync(directory).forEach(file => {
      const fullPath = path.resolve(directory, file);

      if (fs.statSync(fullPath).isDirectory()) {
        if (scanSubDirectories) readDirectory(fullPath);

        return;
      }

      if (!regularExpression.test(fullPath)) return;

      files[fullPath] = true;
    });
  };

  const appDir = path.dirname(require.main.filename);
  const searchPath = path.resolve(appDir, base);
  readDirectory(searchPath);

  function Module(file) {
    return require(file);
  }

  Module.keys = () => Object.keys(files);

  return Module;
};

const convertDoczToSnapshots = src => {
  const docs = requireContext(src, true, /.mdx?$/);

  docs.keys().forEach(filename => {
    const doc = require(filename).default;
    defineSnapshots(doc, path.basename(filename, path.extname(filename)));
  });
};

module.exports.convertDoczToSnapshots = convertDoczToSnapshots;
