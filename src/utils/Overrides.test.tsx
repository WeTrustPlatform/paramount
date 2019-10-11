import React from 'react';
import { Text, TextProps, View, ViewProps } from 'react-native';
import { render } from 'react-native-testing-library';

import { getOverrides, WithOverrides } from './Overrides';

interface CommonComponentProps extends TextProps {
  isDisabled: boolean;
  isActive: boolean;
}

const CommonComponent = (props: CommonComponentProps) => {
  const { isDisabled, ...textProps } = props;

  return <Text {...textProps} />;
};

interface RootProps extends ViewProps {
  children?: React.ReactNode;
}

const StyledRoot = (props: RootProps) => {
  const { children, ...viewProps } = props;

  return <View {...viewProps}>{children}</View>;
};

interface TestComponentBaseProps {
  isDisabled: boolean;
}

interface TestComponentOverrides {
  Root: RootProps;
  ComponentOne: CommonComponentProps;
  ComponentTwo: CommonComponentProps;
}

type TestComponentProps = WithOverrides<
  TestComponentBaseProps,
  TestComponentOverrides
>;

const TestComponent = (props: TestComponentProps) => {
  const { overrides = {}, isDisabled } = props;

  const [RootR, rootProps] = getOverrides(
    StyledRoot,
    props,
    {},
    overrides.Root,
    overrides.Root,
  );
  const [ComponentOneR, componentOneProps] = getOverrides(
    CommonComponent,
    props,
    { isDisabled, isActive: !isDisabled },
    overrides.ComponentOne,
    overrides.ComponentOne,
  );
  const [ComponentTwoR, componentTwoProps] = getOverrides(
    CommonComponent,
    props,
    { isDisabled, isActive: !isDisabled },
    overrides.ComponentTwo,
    overrides.ComponentTwo,
  );

  return (
    <RootR {...rootProps}>
      <ComponentOneR {...componentOneProps} />
      <ComponentTwoR {...componentTwoProps} />
    </RootR>
  );
};

const ReplaceComponentTwo = (props: CommonComponentProps) => <></>;

describe('Overrides', () => {
  test('Component is correctly type-checked and can render', () => {
    const { getByTestId } = render(
      <TestComponent
        isDisabled={true}
        overrides={{
          Root: {
            props: {
              testID: 'ROOT',
            },
            style: {
              backgroundColor: 'blue',
            },
          },
          ComponentOne: {
            props: ({ isDisabled }) => ({
              testID: isDisabled ? 'COMPONENT_ONE' : 'INVALID_COMPONENT',
              isActive: true,
            }),
            style: ({ isActive, isDisabled }) => ({
              backgroundColor: isDisabled ? 'blue' : 'green',
              color: isActive ? 'blue' : 'green',
            }),
          },
          ComponentTwo: {
            component: ReplaceComponentTwo,
          },
        }}
      />,
    );

    const componentOne = getByTestId('COMPONENT_ONE');
    expect(componentOne.props.style.backgroundColor).toBe('blue');
    expect(componentOne.props.style.color).toBe('blue');
  });
});

describe('getOverrides', () => {
  interface ParentProps {
    zero: string;
  }

  const parentProps: ParentProps = { zero: '1' };

  const overrideCallbacks = {
    props: (props: ParentProps) => ({
      testID: props.zero,
    }),
    style: (props: ViewProps) => ({
      height: props.testID,
    }),
  };

  const overrideObject = {
    props: {
      testID: '2',
    },
    style: {
      width: parentProps.zero,
    },
  };

  const overrideObjectTwo = {
    props: {
      pointerEvents: 'auto' as const,
    },
    style: {
      width: parentProps.zero,
    },
  };

  test('getOverrides return correct overrideProps given callback', () => {
    const [, viewProps] = getOverrides(
      View,
      parentProps,
      {},
      overrideCallbacks,
    );

    expect(viewProps.testID).toBe(parentProps.zero);
    expect(viewProps.style).toMatchObject({
      height: parentProps.zero,
    });
  });

  test('getOverrides return correct overrideProps given object', () => {
    const [, viewProps] = getOverrides(
      View,
      parentProps,
      {},
      overrideObject,
      overrideObjectTwo,
    );

    expect(viewProps.testID).toBe(overrideObject.props.testID);
    expect(viewProps.pointerEvents).toBe(overrideObjectTwo.props.pointerEvents);
    expect(viewProps.style).toMatchObject(overrideObject.style);
  });

  test('getOverrides return correct overrideProps given callback then object', () => {
    const [, viewProps] = getOverrides(
      View,
      parentProps,
      {},
      overrideCallbacks,
      overrideObject,
    );

    expect(viewProps.testID).toBe(overrideObject.props.testID);
    expect(viewProps.style).toMatchObject({
      height: parentProps.zero,
      width: overrideObject.style.width,
    });
  });

  test('getOverrides returns overriding component with override props', () => {
    const OverrideView = (props: ViewProps) => <></>;
    OverrideView.displayName = 'OverrideView';

    const [Component, viewProps] = getOverrides(
      View,
      parentProps,
      {},
      {
        ...overrideObject,
        component: OverrideView,
      },
    );

    expect(viewProps.testID).toBe(overrideObject.props.testID);
    expect(viewProps.style).toMatchObject(overrideObject.style);
    expect(Component.displayName).toBe(OverrideView.displayName);
    expect(Component.displayName).not.toBe(View.name);
  });
});
