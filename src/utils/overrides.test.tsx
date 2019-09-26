import * as React from 'react';
import { TextStyle, View, ViewProps } from 'react-native';
import { render } from 'react-native-testing-library';

import { getOverrides, WithOverrides } from './overrides';

interface ComponentTwoProps {
  two?: string;
  style?: TextStyle;
}

const ComponentTwo = (props: ComponentTwoProps) => {
  return <></>;
};

interface ComponentOneBaseProps {
  one?: string;
}

interface ComponentOneOverrides {
  Root: ViewProps;
  ComponentTwo: ComponentTwoProps;
}

type ComponentOneProps = WithOverrides<
  ComponentOneBaseProps,
  ComponentOneOverrides
>;

const ComponentOne = (props: ComponentOneProps) => {
  return <></>;
};

interface TestComponentBaseProps {
  zero?: string;
}

interface TestComponentOverrides {
  Root: ViewProps;
  ComponentOne: ComponentOneProps;
  ComponentTwo: ComponentTwoProps;
}

type TestComponentProps = WithOverrides<
  TestComponentBaseProps,
  TestComponentOverrides
>;

const TestComponent = (props: TestComponentProps) => {
  const { overrides = {}, zero } = props;

  const [RootR, rootProps] = getOverrides(
    View,
    props,
    overrides.Root,
    overrides.Root,
  );
  const [ComponentOneR, componentOneProps] = getOverrides(
    ComponentOne,
    props,
    overrides.ComponentOne,
    overrides.ComponentOne,
  );
  const [ComponentTwoR, componentTwoProps] = getOverrides(
    ComponentTwo,
    props,
    overrides.ComponentTwo,
    overrides.ComponentTwo,
  );

  return (
    <RootR {...rootProps}>
      <ComponentOneR one={zero} {...componentOneProps} />
      <ComponentTwoR two={zero} {...componentTwoProps} />
    </RootR>
  );
};

const ReplaceComponentTwo = (props: ComponentTwoProps) => <></>;

describe('Overrides', () => {
  test('Component is correctly type-checked and can render', () => {
    render(
      <TestComponent
        overrides={{
          Root: {
            props: props => ({
              testID: props.zero,
            }),
            style: (props, theme) => ({
              height: 1,
            }),
          },
          ComponentOne: {
            props: {
              one: '1',
              overrides: {
                Root: {
                  style: {
                    height: 1,
                  },
                },
              },
            },
          },
          ComponentTwo: {
            style: {
              fontSize: 1,
            },
            component: ReplaceComponentTwo,
          },
        }}
      />,
    );
  });
});
