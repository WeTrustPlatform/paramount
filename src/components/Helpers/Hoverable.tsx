import * as React from 'react';

import { isHoverEnabled } from './HoverState';

export type RenderPropType = (props: HoverableChildrenProps) => React.ReactNode;

export interface HoverableChildrenProps {
  isHovered: boolean;
}

export interface HoverableProps {
  children: React.ReactNode | RenderPropType;
  onHoverIn: () => void;
  onHoverOut: () => void;
}

export default class Hoverable extends React.Component<HoverableProps> {
  public state = { isHovered: false, showHover: true };

  public handleMouseEnter = () => {
    if (isHoverEnabled() && !this.state.isHovered) {
      const { onHoverIn } = this.props;
      if (onHoverIn) onHoverIn();
      this.setState(state => ({ ...state, isHovered: true }));
    }
  };

  public handleMouseLeave = () => {
    if (this.state.isHovered) {
      const { onHoverOut } = this.props;
      if (onHoverOut) onHoverOut();
      this.setState(state => ({ ...state, isHovered: false }));
    }
  };

  public handleGrant = () => {
    this.setState(state => ({ ...state, showHover: false }));
  };

  public handleRelease = () => {
    this.setState(state => ({ ...state, showHover: true }));
  };

  public render = () => {
    const { children } = this.props;

    const child =
      typeof children === 'function'
        ? // @ts-ignore
          // @ts-ignore
          children({ isHovered: this.state.showHover && this.state.isHovered })
        : children;

    return React.cloneElement(React.Children.only(child), {
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,

      // prevent hover showing while responder
      onResponderGrant: this.handleGrant,
      onResponderRelease: this.handleRelease,

      // if child is Touchable
      onPressIn: this.handleGrant,
      onPressOut: this.handleRelease,
    });
  };
}
