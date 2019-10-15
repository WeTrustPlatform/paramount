import { storiesOf } from '@storybook/react';
import React from 'react';

import { Box } from '../Box';
import { State } from '../Helpers';

import { ListPicker } from './ListPicker';

storiesOf('ListPicker', module).add('Default', () => (
  <State initial={{ value: ['c', 'js', 'go'] }}>
    {({ state, setState }) => (
      <Box height={300}>
        <ListPicker
          isMulti
          value={state.value}
          onValueChange={(newValue, itemIndex) => setState({ value: newValue })}
          data={[
            {
              label: 'C',
              value: 'c',
              description:
                'C is a general-purpose, procedural computer programming language. C is a general-purpose, procedural computer programming language.',
            },
            {
              label: 'C#',
              value: 'c#',
              description:
                'C# is a general-purpose, multi-paradigm programming language.',
            },
            { label: 'C++', value: 'c++', isDisabled: true },
            { label: 'CSS', value: 'css' },
            { label: 'Elixir', value: 'elixir' },
            { label: 'Elm', value: 'elm' },
            { label: 'Erlang', value: 'erlang' },
            { label: 'Go', value: 'go' },
            { label: 'Haskell', value: 'haskell' },
            { label: 'HTML', value: 'html' },
            { label: 'Java', value: 'java' },
            { label: 'JavaScript', value: 'js' },
            { label: 'Lua', value: 'lua' },
            { label: 'Python', value: 'python' },
            { label: 'R', value: 'r' },
            { label: 'Ruby', value: 'ruby' },
            { label: 'Rust', value: 'rust' },
            { label: 'Switft', value: 'swift' },
            { label: 'Typescript', value: 'typescript' },
          ]}
        />
      </Box>
    )}
  </State>
));
