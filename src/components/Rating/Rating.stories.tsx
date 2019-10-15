import { storiesOf } from '@storybook/react';
import React from 'react';

import { State } from '../Helpers';

import { Rating } from './Rating';

storiesOf('Rating', module).add('Intents', () => (
  <State initial={{ value: 3 }}>
    {({ state, setState }) => (
      <Rating
        value={state.value}
        size="small"
        onValueChange={value => setState({ value })}
      />
    )}
  </State>
));
