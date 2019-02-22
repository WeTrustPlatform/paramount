import * as React from 'react';
import { AccessibilityProps, Animated, TouchableOpacity } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Icon } from '../../icons';
import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetSwitchStyles,
  getSwitchStyles,
  SwitchStyles,
} from './Switch.styles';

/* Copy pasted from https://github.com/react-native-seoul/react-native-switch-toggle */
export interface SwitchProps extends AccessibilityProps {
  isSwitchedOn?: boolean;
  isDisabled?: boolean;
  onChange?: () => void;
  onIcon?: React.ReactNode;
  offIcon?: React.ReactNode;
  duration?: number;
  theme: Theme;
  testID?: string;
  /**
   * Inline styles for components
   */
  getStyles?: ReplaceReturnType<GetSwitchStyles, DeepPartial<SwitchStyles>>;
}

export interface SwitchState {
  animXValue: Animated.Value;
  circlePosXEnd: number;
  circlePosXStart: number;
}

class SwitchBase extends React.Component<SwitchProps, SwitchState> {
  public static defaultProps = {
    backgroundColorOff: 'rgb(215,215,215)',
    backgroundColorOn: 'rgb(227,227,227)',
    circleColorOff: 'white',
    circleColorOn: 'rgb(102,134,205)',
    duration: 300,

    circleStyle: {
      backgroundColor: 'white',
      borderRadius: 15,
      height: 30,
      width: 30,
    },
    containerStyle: {
      backgroundColor: 'rgb(227,227,227)',
      borderRadius: 18,
      height: 36,
      padding: 3,
      width: 72,
    },
    isSwitchedOn: false,
    onChange: () => null,
  };

  constructor(props: SwitchProps) {
    super(props);
    const { theme, getStyles } = props;
    const { circleStyle, containerStyle } = mergeStyles(
      getSwitchStyles,
      getStyles,
    )(theme);

    const endPosition =
      containerStyle.width - (circleStyle.width + containerStyle.padding * 2);

    this.state = {
      animXValue: new Animated.Value(props.isSwitchedOn ? 1 : 0),
      circlePosXEnd: endPosition,
      circlePosXStart: 0,
    };
  }

  // TODO: When converting to hooks, we can use the follow API:
  // https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops
  public componentWillReceiveProps(newProps: SwitchProps) {
    if (newProps.isSwitchedOn !== this.props.isSwitchedOn) {
      this.runAnimation();
    }
  }

  public handleOnPress = () => {
    const { onChange } = this.props;
    this.runAnimation();

    if (onChange) onChange();
  };

  public runAnimation = () => {
    const { duration, isSwitchedOn } = this.props;

    const animValue = {
      duration,
      fromValue: isSwitchedOn ? 1 : 0,
      toValue: isSwitchedOn ? 0 : 1,
    };

    Animated.timing(this.state.animXValue, animValue).start();
  };

  public render() {
    const {
      onIcon,
      offIcon,
      theme,
      isSwitchedOn,
      getStyles,
      testID,
      ...accessibilityProps
    } = this.props;
    const { animXValue, circlePosXStart, circlePosXEnd } = this.state;

    const {
      circleStyle,
      containerStyle,
      backgroundColorOff,
      backgroundColorOn,
      circleColorOff,
      circleColorOn,
    } = mergeStyles(getSwitchStyles, getStyles)(theme);

    return (
      <TouchableOpacity
        accessible
        accessibilityLabel="switch"
        onPress={this.handleOnPress}
        activeOpacity={1}
        style={{
          alignSelf: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        testID={testID}
        {...accessibilityProps}
      >
        <Animated.View
          style={[
            containerStyle,
            {
              backgroundColor: animXValue.interpolate({
                inputRange: [0, 1],
                outputRange: [backgroundColorOff, backgroundColorOn],
              }),
            },
          ]}
        >
          <Animated.View
            style={[
              circleStyle,
              {
                backgroundColor: animXValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [circleColorOff, circleColorOn],
                }),
              },
              {
                transform: [
                  {
                    translateX: animXValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [circlePosXStart, circlePosXEnd],
                    }),
                  },
                ],
              },
            ]}
          >
            {isSwitchedOn
              ? onIcon || (
                  <Icon
                    name="check"
                    size={20}
                    color={theme.colors.text.primary}
                  />
                )
              : offIcon || (
                  <Icon name="x" size={20} color={theme.colors.text.default} />
                )}
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export const Switch = withTheme(SwitchBase);
export default Switch;
