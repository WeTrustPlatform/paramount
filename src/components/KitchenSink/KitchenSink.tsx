// ===================================================
// ===================================================
// THIS IS GENERATED FILE. DO NOT EDIT THIS AND USE SCRIPT 'yarn generate:kitchen-sink' TO UPDATE THIS COMPONENT INSTEAD.
// ===================================================
// ===================================================
// tslint:disable
import React from 'react';
import {
  Playground,
  Alert,
  Box,
  Button,
  Avatar,
  Badge,
  Checkbox,
  FormField,
  Toggle,
  Collapsible,
  Counter,
  CounterState,
  Dialog,
  Heading,
  Icon,
  Text,
  Divider,
  Drawer,
  TextInput,
  State,
  Container,
  LayoutProvider,
  Column,
  Row,
  Visible,
  ListItem,
  Modal,
  HistoryModal,
  NativePicker,
  NativePickerItem,
  Popover,
  ProgressBar,
  Rating,
  SelectList,
  SelectListItem,
  Slider,
  Switch,
  Tabs,
  Tab,
  ToastContext,
  ToastProvider,
  Label,
  Paragraph,
} from '..';

export const KitchenSink = () => {
  return (
    <Box padding={16}>
      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Alert
        </Heading>
      </Box>

      <Playground>
        <Box paddingVertical={8}>
          <Alert title="Info" description="Message" />
        </Box>
        <Box paddingVertical={8}>
          <Alert intent="success" title="Success" description="Message" />
        </Box>
        <Box paddingVertical={8}>
          <Alert intent="warning" title="Warning" description="Message" />
        </Box>
        <Box paddingVertical={8}>
          <Alert
            intent="danger"
            title="Danger"
            description="Message"
            actionNode={
              <Button title="Action" appearance="minimal" color="primary" />
            }
          />
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Avatar
        </Heading>
      </Box>

      <Playground>
        <Avatar
          source={{
            uri: 'https://picsum.photos/200/200',
            width: 200,
            height: 200,
          }}
          // Fallbacks to name if source is not provided
          name="Bill Gates"
          size="large"
        />
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Badge
        </Heading>
      </Box>

      <Playground>
        <Box>
          <Badge title="Badge" color="teal" isSolid size="large" shape="pill" />
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Box
        </Heading>
      </Box>

      <Playground>
        <Box
          // ...ViewStyle
          height={100}
          width={100}
          shape="rounded"
          elevation={5}
          backgroundColor="primaryDefault"
        />
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Button
        </Heading>
      </Box>

      <Playground>
        <Box flexDirection="row">
          <Box paddingRight={16} height={240} justifyContent="space-between">
            <Button color="default" title="Default" />
            <Button color="default" appearance="outline" title="Default" />
            <Button color="default" appearance="minimal" title="Default" />
            <Button
              color="default"
              appearance="primary"
              title="Default"
              isLoading
            />
          </Box>
          <Box paddingRight={16} height={240} justifyContent="space-between">
            <Button color="primary" title="Primary" />
            <Button color="primary" appearance="outline" title="Primary" />
            <Button color="primary" appearance="minimal" title="Primary" />
            <Button
              color="primary"
              appearance="primary"
              title="Primary"
              isLoading
            />
          </Box>
          <Box paddingRight={16} height={240} justifyContent="space-between">
            <Button color="secondary" title="Secondary" />
            <Button color="secondary" appearance="outline" title="Secondary" />
            <Button color="secondary" appearance="minimal" title="Secondary" />
            <Button
              color="secondary"
              appearance="primary"
              title="Secondary"
              isLoading
            />
          </Box>
          <Box paddingRight={16} height={240} justifyContent="space-between">
            <Button color="danger" title="Danger" />
            <Button color="danger" appearance="outline" title="Danger" />
            <Button color="danger" appearance="minimal" title="Danger" />
            <Button
              color="danger"
              appearance="primary"
              title="Danger"
              isLoading
            />
          </Box>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Checkbox
        </Heading>
      </Box>

      <Playground>
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <FormField label="Checkbox" labelPosition="right">
              <Checkbox
                shape="circle"
                value={on}
                onPress={toggle}
                size="medium"
              />
            </FormField>
          )}
        </Toggle>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Collapsible
        </Heading>
      </Box>

      <Playground>
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <Collapsible
              title={on ? 'Close collapsible' : 'Open collapsible'}
              isOpen={on}
              onOpen={toggle}
              onClose={toggle}
            >
              <Box
                marginVertical={16}
                justifyContent="center"
                alignItems="center"
                height={300}
                backgroundColor="#67c6bb"
              />
            </Collapsible>
          )}
        </Toggle>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Counter
        </Heading>
      </Box>

      <Playground>
        <CounterState initial={0}>
          {({ count, increment, decrement }) => (
            <Counter
              count={count}
              onDecrement={decrement}
              onIncrement={increment}
            />
          )}
        </CounterState>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Dialog
        </Heading>
      </Box>

      <Playground>
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <Box>
              <Dialog
                header={<Heading>Header</Heading>}
                footer={<Heading>Footer</Heading>}
                isVisible={on}
                onRequestClose={toggle}
              >
                <Box height={1800}>
                  <Text>Put any content in the dialog</Text>
                </Box>
              </Dialog>
              <Button onPress={toggle} title="Open dialog" />
            </Box>
          )}
        </Toggle>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Divider
        </Heading>
      </Box>

      <Playground>
        <Box paddingVertical={40}>
          <Divider />
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Drawer
        </Heading>
      </Box>

      <Playground>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <Button onPress={toggle} title="Open bottom drawer" />
              <Drawer space="30%" isVisible={on} onRequestClose={toggle}>
                <Box width="100%" height="100%" backgroundColor="white" />
              </Drawer>
            </>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <Button onPress={toggle} title="Open top drawer" />
              <Drawer
                space="30%"
                position="top"
                isVisible={on}
                onRequestClose={toggle}
              >
                <Box width="100%" height="100%" backgroundColor="white" />
              </Drawer>
            </>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <Button onPress={toggle} title="Open left drawer" />
              <Drawer
                space="30%"
                position="left"
                isVisible={on}
                onRequestClose={toggle}
              >
                <Box width="100%" height="100%" backgroundColor="white" />
              </Drawer>
            </>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <Button onPress={toggle} title="Open right drawer" />
              <Drawer
                space="30%"
                position="right"
                isVisible={on}
                onRequestClose={toggle}
              >
                <Box width="100%" height="100%" backgroundColor="white" />
              </Drawer>
            </>
          )}
        </Toggle>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          FormField
        </Heading>
      </Box>

      <Playground>
        <FormField
          label="Label"
          description="Description for the field"
          error="Error message"
        >
          <TextInput />
        </FormField>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          TextInput
        </Heading>
      </Box>

      <Playground>
        <State initial={{ value: '' }}>
          {({ state, setState }) => (
            <TextInput
              value={state.value}
              placeholder="TextInput"
              size="large"
              onChangeText={text => setState({ value: text })}
              leftIcon={<Icon name="menu" size={24} />}
              isInvalid={false}
              isClearable // Mutually exclusive with rightIcon
              onClear={() => console.log('Cleared!')} // Only triggered with `isClearable`
            />
          )}
        </State>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Container
        </Heading>
      </Box>

      <Playground>
        <LayoutProvider>
          <Box backgroundColor="#67c6bb" padding={3}>
            <Container
              fluid={false} // Should not contain width
              size={undefined} // Override default container size
            >
              <Box backgroundColor="white" padding={3}>
                <Text>Centered content</Text>
              </Box>
            </Container>
          </Box>
        </LayoutProvider>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Layout
        </Heading>
      </Box>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Row and Column
        </Heading>
      </Box>

      <Playground>
        <LayoutProvider>
          <Box paddingVertical={16}>
            <Container>
              <Row>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={1}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
              </Row>
            </Container>
          </Box>
          <Box paddingVertical={16}>
            <Container>
              <Row>
                <Column medium={8}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={4}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
              </Row>
            </Container>
          </Box>
          <Box paddingVertical={16}>
            <Container>
              <Row>
                <Column medium={4}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={4}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={4}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
              </Row>
            </Container>
          </Box>
          <Box paddingVertical={16}>
            <Container>
              <Row>
                <Column medium={6}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column medium={6}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
              </Row>
            </Container>
          </Box>
        </LayoutProvider>
      </Playground>

      <Playground>
        <LayoutProvider>
          <Box paddingVertical={16}>
            <Container>
              <Row>
                <Column xsmall={9}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column xsmall={4}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column xsmall={6}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
              </Row>
            </Container>
          </Box>
        </LayoutProvider>
      </Playground>

      <Playground>
        <LayoutProvider>
          <Box paddingVertical={16}>
            <Container>
              <Row>
                <Column offsetXsmall={2} xsmall={6}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
              </Row>
              <Row>
                <Column offsetXsmall={4} xsmall={6}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
              </Row>
              <Row>
                <Column offsetXsmall={6} xsmall={6}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
              </Row>
            </Container>
          </Box>
        </LayoutProvider>
      </Playground>

      <Playground>
        <LayoutProvider>
          <Box paddingVertical={16}>
            <Container>
              <Row hasGutter={false}>
                <Column xsmall={6}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
                <Column xsmall={6}>
                  <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />
                </Column>
              </Row>
            </Container>
          </Box>
        </LayoutProvider>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Visible
        </Heading>
      </Box>

      <Playground>
        <LayoutProvider>
          <Visible large xlarge>
            <Box backgroundColor="#67c6bb" height={48}>
              <Text align="center" color="white">
                Large and greater
              </Text>
            </Box>
          </Visible>
          <Visible medium>
            <Box backgroundColor="#1ca5F7" height={48}>
              <Text align="center" color="white">
                Medium
              </Text>
            </Box>
          </Visible>
          <Visible xsmall small>
            <Box backgroundColor="#d26557" height={48}>
              <Text align="center" color="white">
                Small and lower
              </Text>
            </Box>
          </Visible>
        </LayoutProvider>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          ListItem
        </Heading>
      </Box>

      <Playground>
        <ListItem
          onPress={() => console.log('Press')}
          avatarProps={{
            source: { uri: 'https://picsum.photos/200/200' },
          }}
          title="Some label"
          description="Some description"
        />
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Modal
        </Heading>
      </Box>

      <Playground>
        <Toggle initial={false}>
          {({ on, toggle, set }) => (
            <Box>
              <Modal
                visible={on}
                animationType="slide"
                onRequestClose={() => set(false)}
              >
                <Box height={1800}>
                  <Text>Put any content in the modal</Text>
                  <Button onPress={() => set(false)} title="Close button one" />
                  <Button onPress={() => set(false)} title="Close button two" />
                </Box>
              </Modal>
              <Button onPress={() => set(true)} title="Open modal" />
            </Box>
          )}
        </Toggle>
      </Playground>

      <Playground>
        <Toggle initial={false}>
          {({ on: outerOn, set: outerSet }) => (
            <Box>
              <Modal
                visible={outerOn}
                animationType="fade"
                onRequestClose={() => outerSet(false)}
              >
                <Box height={1800}>
                  <Text>Outer modal</Text>
                  <Button
                    onPress={() => outerSet(false)}
                    title="Close outer modal button one"
                  />
                  <Button
                    onPress={() => outerSet(false)}
                    title="Close outer modal button two"
                  />
                  <Toggle initial={false}>
                    {({ on: innerOn, set: innerSet }) => (
                      <Box>
                        <Modal
                          visible={innerOn}
                          animationType="slide"
                          onRequestClose={() => innerSet(false)}
                        >
                          <Box height={1800}>
                            <Text>Inner modal</Text>
                            <Button
                              onPress={() => innerSet(false)}
                              title="Close inner modal button one"
                            />
                            <Button
                              onPress={() => innerSet(false)}
                              title="Close inner modal button two"
                            />
                          </Box>
                        </Modal>
                        <Button
                          onPress={() => innerSet(true)}
                          title="Open inner modal"
                        />
                      </Box>
                    )}
                  </Toggle>
                </Box>
              </Modal>
              <Button onPress={() => outerSet(true)} title="Open outer modal" />
            </Box>
          )}
        </Toggle>
      </Playground>

      <Playground>
        <Toggle initial={false}>
          {({ on: outerOn, set: outerSet }) => (
            <Box>
              <Modal
                useHistory
                visible={outerOn}
                onRequestClose={() => outerSet(false)}
              >
                <Box height={1800}>
                  <Text>Outer modal</Text>
                  <Button
                    onPress={() => outerSet(false)}
                    title="Close outer modal button one"
                  />
                  <Button
                    onPress={() => outerSet(false)}
                    title="Close outer modal button two"
                  />
                  <Toggle initial={false}>
                    {({ on: innerOn, set: innerSet }) => (
                      <Box>
                        <Modal
                          visible={innerOn}
                          useHistory
                          onRequestClose={() => innerSet(false)}
                        >
                          <Box height={1800}>
                            <Text>Inner modal</Text>
                            <Button
                              onPress={() => innerSet(false)}
                              title="Close inner modal button one"
                            />
                            <Button
                              onPress={() => innerSet(false)}
                              title="Close inner modal button two"
                            />
                          </Box>
                        </Modal>
                        <Button
                          onPress={() => innerSet(true)}
                          title="Open inner modal"
                        />
                      </Box>
                    )}
                  </Toggle>
                </Box>
              </Modal>
              <Button onPress={() => outerSet(true)} title="Open outer modal" />
            </Box>
          )}
        </Toggle>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          NativePicker
        </Heading>
      </Box>

      <Playground>
        <State initial={{ value: 'js' }}>
          {({ state, setState }) => (
            <NativePicker
              selectedValue={state.value}
              onValueChange={(itemValue, itemIndex) =>
                setState({ value: itemValue })
              }
              size="large"
            >
              <NativePickerItem label="C" value="c" />
              <NativePickerItem label="C#" value="c#" />
              <NativePickerItem label="C++" value="c++" />
              <NativePickerItem label="CSS" value="css" />
              <NativePickerItem label="Elixir" value="elixir" />
              <NativePickerItem label="Elm" value="elm" />
              <NativePickerItem label="Erlang" value="erlang" />
              <NativePickerItem label="Go" value="go" />
              <NativePickerItem label="Haskell" value="haskell" />
              <NativePickerItem label="HTML" value="html" />
              <NativePickerItem label="Java" value="java" />
              <NativePickerItem label="JavaScript" value="js" />
              <NativePickerItem label="Lua" value="lua" />
              <NativePickerItem label="Python" value="python" />
              <NativePickerItem label="R" value="r" />
              <NativePickerItem label="Ruby" value="ruby" />
              <NativePickerItem label="Rust" value="rust" />
              <NativePickerItem label="Switft" value="swift" />
              <NativePickerItem label="Typescript" value="typescript" />
            </NativePicker>
          )}
        </State>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Popover
        </Heading>
      </Box>

      <Playground>
        <Box height={250}>
          <Toggle>
            {({ on, toggle }) => (
              <Popover
                isVisible={on}
                position="bottom"
                content={
                  <Box width={200} height={200}>
                    <Text>
                      Due to variety and complexity involved in detecting touch
                      outside of the component on the web and in native,
                      managing its open and closed state is in your control
                    </Text>
                    <Button
                      appearance="outline"
                      color="danger"
                      onPress={toggle}
                      title="Close popover"
                    />
                  </Box>
                }
              >
                <Button onPress={toggle} title="Open popover" />
              </Popover>
            )}
          </Toggle>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          ProgressBar
        </Heading>
      </Box>

      <Playground>
        <CounterState initial={0}>
          {({ count, incrementBy, decrementBy }) => (
            <Box>
              <ProgressBar percent={count} size="large" />
              <Counter
                count={count}
                onDecrement={() => decrementBy(10)}
                onIncrement={() => incrementBy(10)}
                min={0}
                max={100}
              />
            </Box>
          )}
        </CounterState>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Rating
        </Heading>
      </Box>

      <Playground>
        <CounterState initial={3}>
          {({ count: rating, set }) => (
            <Rating
              value={rating}
              size="small"
              onChange={value => set(value)}
            />
          )}
        </CounterState>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          SelectList
        </Heading>
      </Box>

      <Playground>
        <State initial={{ value: ['c', 'js', 'go'] }}>
          {({ state, setState }) => (
            <Box height={300}>
              <SelectList
                value={state.value}
                onValueChange={(newValue, itemIndex) => {
                  setState({ value: newValue });
                }}
              >
                <SelectListItem label="C" value="c" />
                <SelectListItem label="C#" value="c#" />
                <SelectListItem label="C++" value="c++" />
                <SelectListItem label="CSS" value="css" />
                <SelectListItem label="Elixir" value="elixir" />
                <SelectListItem label="Elm" value="elm" />
                <SelectListItem label="Erlang" value="erlang" />
                <SelectListItem label="Go" value="go" />
                <SelectListItem label="Haskell" value="haskell" />
                <SelectListItem label="HTML" value="html" />
                <SelectListItem label="Java" value="java" />
                <SelectListItem label="JavaScript" value="js" />
                <SelectListItem label="Lua" value="lua" />
                <SelectListItem label="Python" value="python" />
                <SelectListItem label="R" value="r" />
                <SelectListItem label="Ruby" value="ruby" />
                <SelectListItem label="Rust" value="rust" />
                <SelectListItem label="Switft" value="swift" />
                <SelectListItem label="Typescript" value="typescript" />
              </SelectList>
            </Box>
          )}
        </State>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Slider
        </Heading>
      </Box>

      <Playground>
        <Slider
          size="small"
          value={0.3}
          onValueChange={value => console.log('onValueChange', value)}
          onSlidingComplete={value => console.log('onSlidingComplete', value)}
          onSlidingStart={value => console.log('onSlidingStart', value)}
        />
      </Playground>

      <Playground>
        <Slider
          value={[30, 60]}
          step={5}
          minimumValue={0}
          maximumValue={100}
          onValueChange={value => console.log('onValueChange', value)}
          onSlidingComplete={value => console.log('onSlidingComplete', value)}
          onSlidingStart={value => console.log('onSlidingStart', value)}
        />
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Switch
        </Heading>
      </Box>

      <Playground>
        <Box>
          <Toggle initial={true}>
            {({ on, toggle }) => <Switch value={on} onPress={toggle} />}
          </Toggle>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Tabs
        </Heading>
      </Box>

      <Playground>
        <State initial={{ activeTabIndex: 0 }}>
          {({ state, setState }) => (
            <Tabs
              activeTabIndex={state.activeTabIndex}
              onTabPress={index => setState({ activeTabIndex: index })}
            >
              {new Array(4).fill(0).map((v, i) => (
                <Tab key={i} title={`Tab ${i + 1}`} />
              ))}
            </Tabs>
          )}
        </State>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Toast
        </Heading>
      </Box>

      <Playground>
        <ToastProvider>
          {/*
      We use `ToastContext.Consumer` here due to limitations in docs
      Use `const { notify } = useToast()` inside your function component
     */}
          <ToastContext.Consumer>
            {({ notify }) => (
              <Button
                onPress={() =>
                  notify({
                    title: 'Title',
                    description: 'Description',
                    duration: 100000,
                  })
                }
                title="Open toast"
              />
            )}
          </ToastContext.Consumer>
        </ToastProvider>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Heading
        </Heading>
      </Box>

      <Playground>
        <Box>
          <Heading size="xxxlarge">xxxlarge</Heading>
          <Heading size="xxlarge">xxlarge</Heading>
          <Heading size="xlarge">xlarge</Heading>
          <Heading size="large">large</Heading>
          <Heading size="medium">medium</Heading>
          <Heading size="small">small</Heading>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Label
        </Heading>
      </Box>

      <Playground>
        <Box>
          <Label>Lorem ipsum dolar set amet</Label>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Paragraph
        </Heading>
      </Box>

      <Playground>
        <Box flexDirection="column">
          <Paragraph size="small">Lorem ipsum dolar set amet</Paragraph>
          <Paragraph size="medium">Lorem ipsum dolar set amet</Paragraph>
          <Paragraph size="large">Lorem ipsum dolar set amet</Paragraph>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="500">
          Text
        </Heading>
      </Box>

      <Playground>
        <Box flexDirection="column">
          <Text size="xsmall">xsmall</Text>
          <Text size="small">small</Text>
          <Text size="medium">medium</Text>
          <Text size="large">large</Text>
        </Box>
      </Playground>

      <Playground>
        <Box flexDirection="column">
          <Text color="#16a054">#16a054</Text>
          <Text color="default">default</Text>
          <Text color="muted">muted</Text>
          <Text color="link">link</Text>
          <Text color="white">white</Text>
          <Text color="selected">selected</Text>
          <Text color="primary">primary</Text>
          <Text color="secondary">secondary</Text>
          <Text color="danger">danger</Text>
          <Text color="info">info</Text>
          <Text color="success">success</Text>
          <Text color="warning">warning</Text>
        </Box>
      </Playground>

      <Playground>
        <Box flexDirection="column">
          <Text weight="500">500</Text>
          <Text weight="700">700</Text>
          <Text weight="bold">bold</Text>
          <Text weight="normal">normal</Text>
          <Text weight="light">light</Text>
        </Box>
      </Playground>

      <Playground>
        <Box flexDirection="column">
          <Text align="left">Lorem ipsum dolar set amet</Text>
          <Text align="center">Lorem ipsum dolar set amet</Text>
          <Text align="right">Lorem ipsum dolar set amet</Text>
        </Box>
      </Playground>

      <Playground>
        <Box flexDirection="column">
          <Text transform="uppercase">Lorem ipsum dolar set amet</Text>
          <Text transform="lowercase">Lorem ipsum dolar set amet</Text>
          <Text transform="capitalize">Lorem ipsum dolar set amet</Text>
        </Box>
      </Playground>

      <Playground>
        <Box flexDirection="column">
          <Text isItalic>Lorem ipsum dolar set amet</Text>
        </Box>
      </Playground>
    </Box>
  );
};
