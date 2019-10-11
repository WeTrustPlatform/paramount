module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-native',
    'sonarjs',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    // Custom rules
    // 'object-shorthand': ['error', 'always'], // Keeps code more concise concise
    // Imports,
    // 'import/no-cycle': ['error', { maxDepth: 1 }],
    // 'import/no-unresolved': 'off', // Fix for monorepo. Let Typescript handle this
    // 'unused-imports/no-unused-imports-ts': ['warn'],
    // 'import/order': ['warn', { 'newlines-between': 'always' }],

    // React
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // // TODO: lift these rules below and adapt to recommended rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  overrides: [
    // JS files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },

    // KitchenSink
    {
      files: ['KitchenSink.tsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'react/display-name': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
