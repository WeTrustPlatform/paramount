import * as React from 'react';

import { ThemeContext } from './ThemeContext';
import { Theme } from './ThemeInterface';

export interface ThemeProps {
  theme: Theme;
}

const withTheme = <TWrappedComponentProps extends any>(
  WrappedComponent: React.ComponentType<TWrappedComponentProps>,
) => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  type WrappedComponentPropsExceptProvided = Exclude<
    keyof TWrappedComponentProps,
    keyof ThemeProps
  >;
  type ForwardedProps = Pick<
    TWrappedComponentProps,
    WrappedComponentPropsExceptProvided
  >;

  return class extends React.PureComponent<ForwardedProps, ThemeProps> {
    public static displayName = displayName;

    public render() {
      return (
        <ThemeContext.Consumer>
          {theme => {
            // @ts-ignore TODO: https://github.com/Microsoft/TypeScript/issues/28748
            return <WrappedComponent theme={theme} {...this.props} />;
          }}
        </ThemeContext.Consumer>
      );
    }
  };
};

export default withTheme;
