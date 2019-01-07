import {
  Alert,
  Avatar,
  Box,
  Button,
  ConfirmDialog,
  Counter,
  LabeledCheckbox,
  Picker,
  PickerItem,
  Popover,
  PopoverController,
  Progress,
  Spacing,
  Switch,
  Text,
  TextInputField,
  ToastConsumer,
  ToastProvider,
} from 'paramount-ui';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Counter as CounterContainer, Toggle } from 'react-powerplug';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{
            width: '100%',
          }}
          contentContainerStyle={{
            width: '100%',
          }}
        >
          <Spacing padding={3}>
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
            <Toggle initial={false}>
              {({ on, toggle }) => (
                <Box>
                  <ConfirmDialog
                    title="Confirm dialog"
                    isVisible={on}
                    onClose={toggle}
                    cancelLabel="Cancel label"
                    confirmLabel="Confirm label"
                  >
                    <Text>Add custom content here</Text>
                  </ConfirmDialog>
                  <Button onPress={toggle}>Open dialog</Button>
                </Box>
              )}
            </Toggle>
            <PopoverController>
              {({
                openPopover,
                closePopover,
                isPopoverVisible,
                setTarget,
                onTargetLayout,
                targetMeasurements,
              }) => {
                return (
                  <>
                    <Popover
                      targetMeasurements={targetMeasurements}
                      isVisible={isPopoverVisible}
                      onClose={closePopover}
                      position="top-right"
                      content={
                        <Box backgroundColor="white">
                          <Text>
                            Long text that should be well visible and
                            non-obstructing Long text that should be well
                            visible and non-obstructing
                          </Text>
                        </Box>
                      }
                    />
                    <Button
                      onLayout={onTargetLayout}
                      ref={setTarget}
                      onPress={openPopover}
                      isInline
                    >
                      Popover Button
                    </Button>
                  </>
                );
              }}
            </PopoverController>
            <Spacing paddingVertical={2}>
              <Alert title="Info" description="Message" />
            </Spacing>
            <Spacing paddingVertical={2}>
              <Alert intent="success" title="Success" description="Message" />
            </Spacing>
            <Spacing paddingVertical={2}>
              <Alert intent="warning" title="Warning" description="Message" />
            </Spacing>
            <Spacing paddingVertical={2}>
              <Alert intent="danger" title="Danger" description="Message" />
            </Spacing>
            <TextInputField
              label="A required text input field"
              isRequired
              description="This is a description."
              placeholder="Placeholder text"
            />
            <Picker
              selectedValue="js"
              onValueChange={(itemValue, itemIndex) =>
                console.log('itemValue', itemValue)
              }
            >
              <PickerItem label="Java" value="java" />
              <PickerItem label="JavaScript" value="js" />
            </Picker>
            <Toggle initial={true}>
              {({ on, toggle }) => (
                <Switch isSwitchedOn={on} onChange={toggle} />
              )}
            </Toggle>
            <LabeledCheckbox label="Checked" isChecked />
            <CounterContainer initial={1}>
              {({ count, incBy, decBy }) => (
                <Box>
                  <Progress percent={count} />
                  <Counter
                    count={<Text>{count}</Text>}
                    onIncrement={() => incBy(10)}
                    onDecrement={() => decBy(10)}
                  />
                </Box>
              )}
            </CounterContainer>
          </Spacing>
        </ScrollView>
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
    width: '100%',
  },
});
