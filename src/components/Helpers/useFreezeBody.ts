import * as React from 'react';

export const useFreezeBody = ({ isFrozen }: { isFrozen: boolean }) => {
  React.useEffect(() => {
    const freeze = () => {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    };

    const unfreeze = () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };

    if (isFrozen) freeze();
    else unfreeze();

    return () => unfreeze();
  }, [isFrozen]);
};
