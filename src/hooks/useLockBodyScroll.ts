import React from 'react';

export const useLockBodyScroll = ({ isLocked }: { isLocked: boolean }) => {
  React.useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    const lock = () => {
      document.body.style.overflow = 'hidden';
    };

    const unlock = () => {
      document.body.style.overflow = originalStyle;
    };

    if (isLocked) lock();
    else unlock();

    return () => unlock();
  }, [isLocked]);
};
