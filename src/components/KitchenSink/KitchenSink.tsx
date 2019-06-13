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
  Avatar,
  Badge,
  Button,
  Checkbox,
  FormField,
  Toggle,
  Collapsible,
  Text,
  Counter,
  CounterState,
  Dialog,
  Heading,
  Icon,
  Divider,
  Drawer,
  TextInput,
  Container,
  LayoutProvider,
  Column,
  Row,
  Visible,
  State,
  ListItem,
  Modal,
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
  BulletedList,
  BulletItem,
  Label,
  NumberedList,
  NumberedItem,
  Paragraph,
} from '..';

export const KitchenSink = () => {
  return (
    <Box>
      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Alert
        </Heading>
      </Box>

      <Playground>
        <Alert
          title="Title"
          description="Message"
          isCloseable
          intent="success"
          component={null} // Overrides body
          getStyles={(props, theme) => ({
            bodyStyle: {},
            containerStyle: {},
          })}
        />
      </Playground>

      <Playground>
        <Box paddingVertical={16}>
          <Alert title="Info" description="Message" />
        </Box>
        <Box paddingVertical={16}>
          <Alert intent="success" title="Success" description="Message" />
        </Box>
        <Box paddingVertical={16}>
          <Alert intent="warning" title="Warning" description="Message" />
        </Box>
        <Box paddingVertical={16}>
          <Alert intent="danger" title="Danger" description="Message" />
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Avatar
        </Heading>
      </Box>

      <Playground>
        <Avatar
          name="Bill Gates"
          source={{ uri: 'https://picsum.photos/200/200' }}
          size={40}
          isSolid={false}
          color="automatic"
          getInitials={(name, fallback) =>
            name ? `${name.charAt(0)}${name.charAt(5)}` : 'A'
          }
          getStyles={(props, theme) => ({
            boxStyle: {},
            textStyle: {},
            imageStyle: {},
          })}
        />
      </Playground>

      <Playground>
        <Avatar name="Bill Gates" />
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Badge
        </Heading>
      </Box>

      <Playground>
        <Box>
          <Badge
            color="blue"
            size="large"
            shape="rounded"
            isSolid={false}
            getStyles={(props, theme) => ({
              containerStyle: {},
              textStyle: {},
            })}
          >
            Badge
          </Badge>
        </Box>
      </Playground>

      <Playground>
        <Box>
          <Box flexDirection="row">
            <Badge color="neutral" shape="pill">
              neutral
            </Badge>
            <Badge color="neutral" isSolid>
              neutral
            </Badge>
          </Box>
          <Box flexDirection="row">
            <Badge color="blue" shape="pill">
              blue
            </Badge>
            <Badge color="blue" isSolid>
              blue
            </Badge>
          </Box>
          <Box flexDirection="row">
            <Badge color="red" shape="pill">
              red
            </Badge>
            <Badge color="red" isSolid>
              red
            </Badge>
          </Box>
          <Box flexDirection="row">
            <Badge color="orange" shape="pill">
              orange
            </Badge>
            <Badge color="orange" isSolid>
              orange
            </Badge>
          </Box>
          <Box flexDirection="row">
            <Badge color="yellow" shape="pill">
              yellow
            </Badge>
            <Badge color="yellow" isSolid>
              yellow
            </Badge>
          </Box>
          <Box flexDirection="row">
            <Badge color="green" shape="pill">
              green
            </Badge>
            <Badge color="green" isSolid>
              green
            </Badge>
          </Box>
          <Box flexDirection="row">
            <Badge color="teal" shape="pill">
              teal
            </Badge>
            <Badge color="teal" isSolid>
              teal
            </Badge>
          </Box>
          <Box flexDirection="row">
            <Badge color="purple" shape="pill">
              purple
            </Badge>
            <Badge color="purple" isSolid>
              purple
            </Badge>
          </Box>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Box
        </Heading>
      </Box>

      <Playground>
        <Box
          // ...ViewStyle
          height={200}
          width={200}
          shape="rounded" // pill, circle or square (default)
          elevation={5}
          backgroundColor="primaryDefault" // background colors or any custom color "#67c6bb"
        />
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Button
        </Heading>
      </Box>

      <Playground>
        <Button
          color="primary"
          appearance="primary"
          size="large"
          isLoading={false}
          isActive={false}
          isDisabled={false}
          isInline={false}
          iconBefore={null}
          iconAfter={null}
          iconLoading={null}
          title="Usage"
          onPress={() => console.log('Pressed!')}
          getStyles={(props, theme) => ({
            buttonStyle: {},
            textStyle: {},
            focusColor: '#5ab9ae',
          })}
        />
      </Playground>

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

      <Playground>
        <Box flexDirection="row" justifyContent="flex-start">
          <Button isInline color="primary" title="Left small" size="small" />
        </Box>
        <Box flexDirection="row" justifyContent="center">
          <Button
            isInline
            color="primary"
            title="Center medium"
            size="medium"
          />
        </Box>
        <Box flexDirection="row" justifyContent="flex-end">
          <Button isInline color="primary" title="Right large" size="large" />
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Checkbox
        </Heading>
      </Box>

      <Playground>
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <FormField label="Checkbox" labelPosition="right">
              <Checkbox
                shape="square" // or "circle"
                isChecked={on}
                isDisabled={false}
                isInteractive={true}
                onChange={toggle}
                size="medium"
                getStyles={(props, theme) => ({
                  touchableStyle: {},
                  checkboxStyle: {},
                  checkColor: 'white',
                  checkboxFocusBackgroundColor: '',
                })}
              />
            </FormField>
          )}
        </Toggle>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Collapsible
        </Heading>
      </Box>

      <Playground>
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <Collapsible
              isAnimated={true}
              // The header will move to the end of the content when revealing content
              shouldMoveWithEndOfContent={false}
              initialIsOpen={false}
              isOpen={on}
              onOpen={toggle}
              onClose={toggle}
              getStyles={() => ({
                touchableStyle: {},
                outerWrapperStyle: {},
                contentWrapperStyle: {},
                textStyle: {},
                iconWrapperStyle: {},
              })}
              title="Stays at top of content"
              header={null}
            >
              <Box
                marginVertical={16}
                justifyContent="center"
                alignItems="center"
                height={300}
                backgroundColor="#67c6bb"
              >
                <Text color="white">Content of the Collapsible</Text>
              </Box>
            </Collapsible>
          )}
        </Toggle>

        <Box paddingTop={24}>
          <Toggle initial={false}>
            {({ on, toggle }) => (
              <Collapsible
                isAnimated={true}
                shouldMoveWithEndOfContent
                isOpen={on}
                onOpen={toggle}
                onClose={toggle}
                title="Moves with end of content"
              >
                <Box
                  marginVertical={16}
                  justifyContent="center"
                  alignItems="center"
                  height={300}
                  backgroundColor="#67c6bb"
                >
                  <Text color="white">Content of the Collapsible</Text>
                </Box>
              </Collapsible>
            )}
          </Toggle>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
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
              min={0}
              max={10}
              component={null}
              getStyles={(props, theme) => ({
                containerStyle: {},
                counterStyle: {},
                countStyle: {},
                disabledStyle: {},
                ntextStyle: {},
              })}
            />
          )}
        </CounterState>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Dialog
        </Heading>
      </Box>

      <Playground>
        <Toggle initial={false}>
          {({ on, toggle }) => (
            <Box>
              <Dialog
                header={
                  <Box
                    padding={16}
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Heading>Title</Heading>
                    <Button
                      icon={<Icon name="x" size={24} />}
                      onPress={toggle}
                    />
                  </Box>
                }
                footer={
                  <Box
                    padding={16}
                    flexDirection="row"
                    justifyContent="flex-end"
                  >
                    <Button
                      appearance="minimal"
                      onPress={toggle}
                      title="Cancel"
                    />
                    <Box paddingLeft={16}>
                      <Button
                        color="primary"
                        onPress={() => console.log('Button clicked')}
                        title="Accept"
                      />
                    </Box>
                  </Box>
                }
                isVisible={on}
                onRequestClose={toggle}
                useHistory={false}
                getStyles={(props, theme) => ({
                  modalContainerStyle: {},
                  containerStyle: {},
                  bodyStyle: {},
                })}
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
        <Heading size="xxxlarge" weight="bold">
          Divider
        </Heading>
      </Box>

      <Playground>
        <Box paddingVertical={40}>
          <Divider
            size={3}
            color="#67c6bb"
            position="horizontal"
            getStyles={(props, theme) => ({
              dividerStyle: {},
            })}
          />
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Drawer
        </Heading>
      </Box>

      <Playground>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <Button onPress={toggle} isInline title="Open drawer menu" />
              <Drawer
                space={undefined} // px or %, null fits the content
                offset={0}
                position="bottom"
                isVisible={on}
                onClose={toggle}
                getStyles={(props, theme) => ({
                  modalContainerStyle: {},
                  containerStyle: {},
                })}
              >
                <Box padding={24}>
                  <Box elevation={1} backgroundColor="white" borderRadius={4}>
                    {[
                      {
                        onPress: toggle,
                        title: 'Menu Option 1',
                        color: 'danger',
                      },
                      {
                        onPress: toggle,
                        title: 'Menu Option 2',
                        color: 'primary',
                      },
                      {
                        onPress: toggle,
                        title: 'Menu Option 3',
                        color: 'secondary',
                      },
                      {
                        onPress: toggle,
                        title: 'Menu Option 4',
                      },
                    ].map(option => (
                      <Button
                        key={option.title}
                        appearance="minimal"
                        {...option}
                      />
                    ))}
                  </Box>
                  <Box paddingTop={24}>
                    <Button onPress={toggle} title="Close" />
                  </Box>
                </Box>
              </Drawer>
            </>
          )}
        </Toggle>
      </Playground>

      <Playground>
        <Toggle>
          {({ on, toggle }) => (
            <>
              <Button onPress={toggle} title="Open bottom drawer" />
              <Drawer space="30%" isVisible={on} onClose={toggle}>
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
                onClose={toggle}
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
                onClose={toggle}
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
                onClose={toggle}
              >
                <Box width="100%" height="100%" backgroundColor="white" />
              </Drawer>
            </>
          )}
        </Toggle>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          FormField
        </Heading>
      </Box>

      <Playground>
        <FormField
          labelPosition="top"
          label="Email"
          description="Description for the field"
          error="Error message"
          getStyles={(props, theme) => ({
            containerStyles: {},
            descriptionTextStyle: {},
            errorTextStyle: {},
            errorWrapperStyle: {},
            labelTextStyle: {},
            labelWrapperStyle: {},
            wrapperStyle: {},
          })}
        >
          <TextInput />
        </FormField>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Container
        </Heading>
      </Box>

      <Playground>
        <LayoutProvider>
          <Box backgroundColor="#67c6bb" padding={3}>
            <Container maxWidth={300}>
              <Box backgroundColor="white" padding={3}>
                <Text>Centered content</Text>
              </Box>
            </Container>
          </Box>
        </LayoutProvider>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Grid
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
        <Heading size="xxxlarge" weight="bold">
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
        <Heading size="xxxlarge" weight="bold">
          TextInput
        </Heading>
      </Box>

      <Playground>
        <State initial={{ value: '' }}>
          {({ state, setState }) => (
            <TextInput
              name="field"
              value={state.value}
              placeholder="Add your own placeholder"
              size="large"
              isDisabled={false}
              isInvalid={false}
              keyboardType="email-address"
              onChangeText={text => setState({ value: text })}
              onSubmitEditing={e => console.log('Submit on enter')}
              leftIcon={
                <Box>
                  <Icon name="menu" size={24} />
                </Box>
              }
              rightIcon={undefined}
              isClearable={true} // Mutually exclusive with rightIcon
              onClear={() => console.log('Cleared!')} // Only triggered with `isClearable`
              getStyles={(props, theme) => ({
                inputStyle: {},
                placeholderTextColor: theme.colors.text.muted,
              })}
            />
          )}
        </State>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          ListItem
        </Heading>
      </Box>

      <Playground>
        <ListItem
          onPress={() => console.log('Press')}
          rightIcon={<Icon color="#7e7e7e" size={24} name="chevron-right" />}
          leftIcon={
            <Avatar
              size={45}
              source={{ uri: 'https://picsum.photos/200/200' }}
            />
          }
          label="Some label"
          description="Some description"
          size="large"
          isDisabled={false}
          getStyles={(props, theme) => ({
            imageWrapperStyle: {},
            leftWrapperStyle: {},
            textWrapperStyle: {},
            containerStyle: {},
            textStyle: {},
            focusBackgroundColor: '#fafafa',
            wrapperStyle: {},
          })}
        />
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
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
        <Heading size="xxxlarge" weight="bold">
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
              getStyles={(props, theme) => ({
                pickerStyle: {},
                itemStyle: {},
              })}
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
        <Heading size="xxxlarge" weight="bold">
          Popover
        </Heading>
      </Box>

      <Playground>
        <Toggle>
          {({ on, toggle }) => (
            <Popover
              isVisible={on}
              onClose={toggle}
              position="bottom"
              isFullWidth={false}
              // Use this prop to specify the position of the popover
              targetMeasurements={{
                height: 200,
                pageX: window.innerWidth - 224,
                pageY: -200,
                width: 200,
                x: 0,
                y: 0,
              }}
              getStyles={(props, theme) => ({
                positionerStyle: {},
                modalContainerStyle: {},
                popoverStyle: {},
              })}
              content={props => (
                <Box>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                </Box>
              )}
            >
              <Button onPress={toggle} title="Pop at right corner" />
            </Popover>
          )}
        </Toggle>
      </Playground>

      <Playground>
        <Box paddingBottom={64} zIndex={1}>
          <Box flexDirection="row" justifyContent="space-between">
            <Toggle>
              {({ on, toggle }) => (
                <Popover
                  isVisible={on}
                  onClose={toggle}
                  position="top-right"
                  content={() => <Box width={200} height={200} />}
                >
                  <Button onPress={toggle} isInline title="Top right" />
                </Popover>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <Popover
                  isVisible={on}
                  onClose={toggle}
                  position="top"
                  content={() => <Box width={200} height={200} />}
                >
                  <Button onPress={toggle} isInline title="Top" />
                </Popover>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <Popover
                  isVisible={on}
                  onClose={toggle}
                  position="top-left"
                  content={() => <Box width={200} height={200} />}
                >
                  <Button onPress={toggle} isInline title="Top left" />
                </Popover>
              )}
            </Toggle>
          </Box>
        </Box>

        <Box paddingVertical={64} zIndex={2}>
          <Box flexDirection="row" justifyContent="space-between">
            <Toggle>
              {({ on, toggle }) => (
                <Popover
                  isVisible={on}
                  onClose={toggle}
                  position="left"
                  content={() => <Box width={200} height={200} />}
                >
                  <Button onPress={toggle} isInline title="Left" />
                </Popover>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <Popover
                  isVisible={on}
                  onClose={toggle}
                  position="right"
                  content={() => <Box width={200} height={200} />}
                >
                  <Button onPress={toggle} isInline title="Right" />
                </Popover>
              )}
            </Toggle>
          </Box>
        </Box>

        <Box paddingTop={64} zIndex={3}>
          <Box flexDirection="row" justifyContent="space-between">
            <Toggle>
              {({ on, toggle }) => (
                <Popover
                  isVisible={on}
                  onClose={toggle}
                  position="bottom-right"
                  content={() => <Box width={200} height={200} />}
                >
                  <Button onPress={toggle} isInline title="Bottom right" />
                </Popover>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <Popover
                  isVisible={on}
                  onClose={toggle}
                  position="bottom"
                  content={() => <Box width={200} height={200} />}
                >
                  <Button onPress={toggle} isInline title="Bottom" />
                </Popover>
              )}
            </Toggle>
            <Toggle>
              {({ on, toggle }) => (
                <Popover
                  isVisible={on}
                  onClose={toggle}
                  position="bottom-left"
                  content={() => <Box width={200} height={200} />}
                >
                  <Button onPress={toggle} isInline title="Bottom left" />
                </Popover>
              )}
            </Toggle>
          </Box>
        </Box>
      </Playground>

      <Playground>
        <Box flex={1}>
          <Toggle>
            {({ on, toggle }) => (
              <Popover
                isVisible={on}
                isFullWidth
                onClose={toggle}
                position="top-left"
                content={() => (
                  <Box width={200} height={200} backgroundColor="#67c6bb" />
                )}
              >
                <Button onPress={toggle} title="Pop" />
              </Popover>
            )}
          </Toggle>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          ProgressBar
        </Heading>
      </Box>

      <Playground>
        <CounterState initial={0}>
          {({ count, incrementBy, decrementBy }) => (
            <Box>
              <ProgressBar
                percent={count}
                size="large"
                getStyles={(props, theme) => ({
                  containerStyle: {},
                  progressStyle: {},
                })}
              />
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
        <Heading size="xxxlarge" weight="bold">
          Rating
        </Heading>
      </Box>

      <Playground>
        <CounterState initial={3}>
          {({ count: rating, set }) => (
            <Rating
              value={rating}
              size="small"
              color="#67c6bb"
              onChange={value => set(value)}
              getStyles={(props, theme) => ({
                containerStyle: {},
                touchableStyle: {},
                starColor: '#67c6bb', // defined as color prop
                starSize: 40, // defined as size prop
              })}
            />
          )}
        </CounterState>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          SelectList
        </Heading>
      </Box>

      <Playground>
        <State initial={{ selectedValue: ['js', 'go'] }}>
          {({ state, setState }) => (
            <SelectList
              isMulti
              selectedValue={state.selectedValue}
              onValueChange={(newValue, itemIndex) => {
                setState({ selectedValue: newValue });
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
          )}
        </State>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Slider
        </Heading>
      </Box>

      <Playground>
        <Slider
          size={40}
          initialValue={0.3} // either number for single thumb slider or [number, number] for range slider
          step={0}
          isRange={false} // Only used if you are not passing initialValue
          minimumValue={0}
          maximumValue={1}
          onValueChange={value => console.log('onValueChange', value)}
          onSlidingComplete={value => console.log('onSlidingComplete', value)}
          onSlidingStart={value => console.log('onSlidingStart', value)}
          getStyles={(props, theme) => ({
            containerStyle: {},
            selectedTrackStyle: {},
            thumbStyle: {},
            unselectedTrackStyle: {},
          })}
        />
      </Playground>

      <Playground>
        <Slider
          initialValue={[30, 60]} // This is an [number, number] instead of a number
          step={5}
          minimumValue={0}
          maximumValue={100}
          onValueChange={value => console.log('onValueChange', value)}
          onSlidingComplete={value => console.log('onSlidingComplete', value)}
          onSlidingStart={value => console.log('onSlidingStart', value)}
        />
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Switch
        </Heading>
      </Box>

      <Playground>
        <Box>
          <Toggle initial={true}>
            {({ on, toggle }) => (
              <Switch
                isSwitchedOn={on}
                onChange={toggle}
                isDisabled={false}
                onIcon={null}
                offIcon={null}
                getStyles={(props, theme) => ({
                  circleStyle: {},
                  containerStyle: {},
                  backgroundColorOff: '#F5F6F7',
                  backgroundColorOn: '#67c6bb',
                  circleColorOff: 'white',
                  circleColorOn: 'white',
                })}
              />
            )}
          </Toggle>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Tabs
        </Heading>
      </Box>

      <Playground>
        <State initial={{ activeTabIndex: 0 }}>
          {({ state, setState }) => (
            <Tabs
              activeTabIndex={state.activeTabIndex}
              onChange={index => setState({ activeTabIndex: index })}
              getStyles={(props, theme) => ({
                containerStyle: {},
              })}
            >
              {new Array(4).fill(0).map((v, i) => {
                if (i === 0) {
                  return (
                    <Tab
                      key={0}
                      title="Custom"
                      onPress={() => setState({ activeTabIndex: 0 })}
                      getStyles={() => ({
                        containerStyle: {},
                        buttonStyle: {},
                        textStyle: {},
                        focusColor: '#fafafa',
                      })}
                    />
                  );
                }
                return <Tab key={i} title={`Tab ${i + 1}`} />;
              })}
            </Tabs>
          )}
        </State>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Toast
        </Heading>
      </Box>

      <Playground>
        <ToastProvider
          getStyles={(props, theme) => ({
            containerStyle: {},
          })}
        >
          <ToastContext.Consumer>
            {({ notify }) => (
              <Button
                onPress={() => {
                  notify({
                    title: 'Title',
                    description: 'Description',
                    component: null, // A React Component that overrides title and description
                    isCloseable: true,
                    offset: 16,
                    duration: 3000,
                    // ...Alert props e.g. getStyles
                  });
                }}
                title="Use"
              />
            )}
          </ToastContext.Consumer>
        </ToastProvider>
      </Playground>

      <Playground>
        <ToastProvider>
          <ToastContext.Consumer>
            {({ notify }) => (
              <>
                <Button
                  onPress={() =>
                    notify({
                      title: 'Title',
                      description: 'Description',
                      isCloseable: true,
                    })
                  }
                  title="Open default toast"
                />
                <Button
                  onPress={() =>
                    notify({
                      description: 'Description',
                      intent: 'success',
                      title: 'Title',
                    })
                  }
                  color="primary"
                  title="Open success toast"
                />
                <Button
                  onPress={() =>
                    notify({
                      description: 'Description',
                      intent: 'danger',
                      title: 'Title',
                    })
                  }
                  color="danger"
                  title="Open danger toast"
                />
                <Button
                  onPress={() =>
                    notify({
                      description: 'Description',
                      intent: 'warning',
                      title: 'Title',
                    })
                  }
                  color="secondary"
                  title="Open warning toast"
                />
              </>
            )}
          </ToastContext.Consumer>
        </ToastProvider>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          BulletedList
        </Heading>
      </Box>

      <Playground>
        <BulletedList icon={<Icon name="check" />}>
          <BulletItem>Lorem ipsum dolar set amet</BulletItem>
          <BulletItem>Lorem ipsum dolar set amet</BulletItem>
          <BulletItem>Lorem ipsum dolar set amet</BulletItem>
          <BulletItem>Lorem ipsum dolar set amet</BulletItem>
        </BulletedList>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Heading
        </Heading>
      </Box>

      <Playground>
        <Box>
          <Heading
            accessibilityLevel={3} // 1-6
            align="center"
            size="xxlarge" // small - xxxlarge or number
            color="primary" // or custom
            weight="600"
            getStyles={(props, theme) => ({
              headingStyle: {},
            })}
          >
            Lorem ipsum dolar set amet
          </Heading>
        </Box>
      </Playground>

      <Playground>
        <Box flexDirection="column">
          <Heading size="xxxlarge">xxxlarge</Heading>
          <Heading size="xxlarge">xxlarge</Heading>
          <Heading size="xlarge">xlarge</Heading>
          <Heading size="large">large</Heading>
          <Heading size="medium">medium</Heading>
          <Heading size="small">small</Heading>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Label
        </Heading>
      </Box>

      <Playground>
        <Box>
          <Label>Lorem ipsum dolar set amet</Label>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          NumberedList
        </Heading>
      </Box>

      <Playground>
        <NumberedList>
          <NumberedItem>Lorem ipsum dolar set amet</NumberedItem>
          <NumberedItem>Lorem ipsum dolar set amet</NumberedItem>
          <NumberedItem>Lorem ipsum dolar set amet</NumberedItem>
          <NumberedItem>Lorem ipsum dolar set amet</NumberedItem>
        </NumberedList>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Paragraph
        </Heading>
      </Box>

      <Playground>
        <Box>
          <Paragraph
            color="primary"
            align="left"
            size="large" // small - large or number
            fontFamily="text"
            weight="normal"
            getStyles={(props, theme) => ({
              paragraphStyle: {},
            })}
          >
            Lorem ipsum dolar set amet
          </Paragraph>
        </Box>
      </Playground>

      <Playground>
        <Box flexDirection="column">
          <Paragraph size="small">Lorem ipsum dolar set amet</Paragraph>
          <Paragraph size="medium">Lorem ipsum dolar set amet</Paragraph>
          <Paragraph size="large">Lorem ipsum dolar set amet</Paragraph>
        </Box>
      </Playground>

      <Box paddingTop={96}>
        <Heading size="xxxlarge" weight="bold">
          Text
        </Heading>
      </Box>

      <Playground>
        <Box>
          <Text
            color="primary" // or custom
            align="left"
            size="large" // small - large or number
            fontFamily="text"
            weight="normal"
            isItalic
            isInline
            transform="uppercase"
            getStyles={(props, theme) => ({
              textStyle: {},
            })}
          >
            Lorem ipsum dolar set amet
          </Text>
        </Box>
      </Playground>

      <Playground>
        <Box flexDirection="column">
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
          <Text fontFamily="heading">heading</Text>
          <Text fontFamily="text">text</Text>
          <Text fontFamily="mono">mono</Text>
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
          <Text isItalic>Lorem ipsum dolar set amet</Text>
          <Text align="left">Lorem ipsum dolar set amet</Text>
          <Text align="center">Lorem ipsum dolar set amet</Text>
          <Text align="right">Lorem ipsum dolar set amet</Text>
          <Text transform="uppercase">Lorem ipsum dolar set amet</Text>
          <Text transform="lowercase">Lorem ipsum dolar set amet</Text>
          <Text transform="capitalize">Lorem ipsum dolar set amet</Text>
        </Box>
      </Playground>
    </Box>
  );
};
