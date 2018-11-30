import * as React from 'react';

import { ThemeConsumer } from './ThemeContext';
import { ITheme } from './ThemeInterface';

export interface IThemeProps {
  theme: ITheme;
}

const withTheme = <TWrappedComponentProps extends any>(
  WrappedComponent: React.ComponentType<TWrappedComponentProps>,
) => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  type WrappedComponentPropsExceptProvided = Exclude<
    keyof TWrappedComponentProps,
    keyof IThemeProps
  >;
  type ForwardedProps = Pick<
    TWrappedComponentProps,
    WrappedComponentPropsExceptProvided
  >;

  return class extends React.PureComponent<ForwardedProps, IThemeProps> {
    public static displayName = displayName;

    public render() {
      return (
        <ThemeConsumer>
          {theme => <WrappedComponent theme={theme} {...this.props} />}
        </ThemeConsumer>
      );
    }
  };
};

export default withTheme;
