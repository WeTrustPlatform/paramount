import { storiesOf } from '@storybook/react';
import React from 'react';
import { Alert } from './Alert';
import { Box } from '../Box';

export const AlertIntents = () => (
  <>
    <Box paddingVertical={8}>
      <Alert title="Info" description="Message" />
    </Box>
    <Box paddingVertical={8}>
      <Alert intent="success" title="Success" description="Message" />
    </Box>
    <Box paddingVertical={8}>
      <Alert intent="warning" title="Warning" description="Message" />
    </Box>
  </>
);

storiesOf('Alert', module).add('Intents', () => <AlertIntents />);
