import { Ionicons } from '@expo/vector-icons';
import {
  Avatar,
  Button,
  ConfirmDialog,
  Text,
  ToastConsumer,
  ToastProvider,
} from 'paramount-ui';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ToastProvider>
          <ToastConsumer>
            {({ notify }) => (
              <Button
                onPress={() =>
                  notify({
                    description: 'Description',
                    intent: 'success',
                    title: 'Title',
                  })
                }
              >
                Open default toast
              </Button>
            )}
          </ToastConsumer>
        </ToastProvider>
        <Avatar name="Adam Sandler" />
        <Text>Open up App.js to start working on your app!</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <ConfirmDialog
          title="Confirm dialog"
          isVisible
          onClose={() => {}}
          cancelLabel="Cancel label"
          confirmLabel="Confirm label"
        >
          <Text>Add custom content here</Text>
        </ConfirmDialog>
        {/* <Popover
          isVisible
          position="top-right"
          content={
            <Box backgroundColor="white" width={200} height={200}>
              <Text>
                Long text that should be well visible and non-obstructing
              </Text>
            </Box>
          }
        >
      <Button>Is this roboto</Button>
      </Popover> */}
        <Button>Is this roboto</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
