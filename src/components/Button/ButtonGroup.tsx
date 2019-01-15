import * as React from 'react';

import { Theme, withTheme } from '../../theme';
import { Box } from '../Layout';
import { ButtonProps } from './Button';
import { ButtonStylesProps, getButtonStyles } from './Button.styles';

export type ButtonGroupDirection = 'vertical' | 'horizontal';

export interface ButtonGroupProps {
  /**
   * @default vertical
   */
  direction?: ButtonGroupDirection;
  children: Array<React.ReactElement<ButtonProps>>;
  theme: Theme;
}

const directionToFlexDirectionMap: { [direction: string]: 'row' | 'column' } = {
  horizontal: 'row',
  vertical: 'column',
};

const ButtonGroup: React.SFC<ButtonGroupProps> = props => {
  const { children, direction = 'vertical', theme } = props;

  const childrenLength = React.Children.count(children);

  const finalChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    // @ts-ignore
    const button = child as React.ReactElement<ButtonProps>;
    const buttonSize = button.props.size || 'medium';
    const buttonBorderRadius = theme.controlBorderRadius[buttonSize];

    return React.cloneElement(button, {
      getStyles: (styleProps: ButtonStylesProps) => {
        const defaultButtonStyles = getButtonStyles(styleProps, theme);

        return {
          ...defaultButtonStyles,
          buttonStyle: {
            ...defaultButtonStyles.buttonStyle,
            ...(direction === 'vertical'
              ? {
                  borderBottomWidth: 1,
                  borderColor: theme.colors.border.default,
                  borderRadius: 0,
                  borderWidth: 0,
                  elevation: 0,

                  ...(index === 0 && {
                    borderTopLeftRadius: buttonBorderRadius,
                    borderTopRightRadius: buttonBorderRadius,
                  }),
                  ...(childrenLength - 1 === index && {
                    borderBottomLeftRadius: buttonBorderRadius,
                    borderBottomRightRadius: buttonBorderRadius,
                    borderBottomWidth: 0,
                  }),
                }
              : {
                  borderColor: theme.colors.border.default,
                  borderLeftWidth: 0,
                  borderRadius: 0,
                  elevation: 0,

                  ...(index === 0 && {
                    borderBottomLeftRadius: buttonBorderRadius,
                    borderTopLeftRadius: buttonBorderRadius,
                  }),
                  ...(childrenLength - 1 === index && {
                    borderBottomRightRadius: buttonBorderRadius,
                    borderTopRightRadius: buttonBorderRadius,
                  }),
                }),
          },
        };
      },
    });
  });

  return (
    <Box flexDirection={directionToFlexDirectionMap[direction]}>
      {finalChildren}
    </Box>
  );
};

export default withTheme(ButtonGroup);
