# Contributing

<a name="pull-requests"></a>

## Pull requests

Follow this process if you'd like your work considered for inclusion in the project:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes:

   ```bash
   git clone https://github.com/<your-username>/paramount
   cd paramount
   git remote add upstream https://github.com/WeTrustPlatform/paramount
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Install/update dependencies:

   ```bash
   yarn
   ```

4. Create a new topic branch (off the `master` branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
   with a clear title and description. If screenshot can be included, please attach one.

<a name="development"></a>

## Development

The development of components also happen on the documentation site (living documentation).

```bash
cd <root>
yarn dev
```

The development/docs will then be available at http://localhost:3000.

The site is created based on `*.mdx` files ([see MDX](https://github.com/mdx-js/mdx)) throughout the codebase. Their main purpose is to provide:

1. **Component's playground**. Test out usage of the components and their features

   ```
   <Playground>
     <Button appearance="minimal" color="default">
       Default
     </Button>
     <Button isDisabled color="primary">
       Disabled
     </Button>
   </Playground>
   ```

2. **Documentation**. Edit markdown for documentation of component features

   ```
   ## Section of component documentation

   You can just write documentation right next to the playground

   <Playground>
    ...
   </Playground>
   ```

3. **Tests**. Snapshots of components are taken directly from `<Playground />` which provide a good basis for [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) for UI tests

<a name="understanding-codebase"></a>

## Understanding codebase

### Directory layout

```
.
├── /docs/                        # Extra docs for the library
├── /src/                         # The source code of the application
│   ├── /components/              # React components
│       ├── /component/           # React Component folder
│   ├── /constants/               # Constants
│   ├── /theme/                   # GraphQL server schema and data models
│       ├── /component-variables/ # Component variables
│       ├── /default-theme/       # Default theme variables
│       ├── /style-getters/       # Component style getters
│   ├── /types/                   # Utility types or declarations for 3rd party libraries
│   ├── index.ts                  # Package exports
├── /tests/                       # Unit and end-to-end tests
├── package.json                  # The list of 3rd party libraries and utilities
└── yarn.lock                     # Fixed versions of all the dependencies
```

### Making changes to a Component

There are few files required to each component. Let's say for `TextInput`

1. `TextInput.tsx` - The actual React Component
2. `textInputVariables.ts` - Component style variables. They should expose component state variables and contain most of the styles here.
3. `getTextInputStyles.ts` - Style getter of the component, which outputs style object of each React Node based on component's style props (e.g. `size`, `color`)

For a new component, you would also have to add component entry to the following files:

1. `theme/component-variables/index.ts`
1. `theme/style-getters/index.ts`
1. `theme/ThemeInterface.ts`
1. `components/index.ts`

<a name="running-tests"></a>

## Running Tests

You can run unit tests with like so:

```bash
yarn test
```

Because components are primarily tested against snapshots:

1. Make sure that your changes do not have unintended consequences
2. If you are confident in snapshot changes, update snapshots

   ```bash
     yarn test --u
   ```
