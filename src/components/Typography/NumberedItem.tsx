import * as React from 'react';

import ListItem, { ListItemProps } from './ListItem';
import Text from './Text';

export interface NumberedItemProps extends ListItemProps {
  index: number;
  children: React.ReactNode;
}

const NumberedItem = (props: NumberedItemProps) => {
  const { index, ...listItemProps } = props;

  return (
    <ListItem
      mark={
        <Text size={listItemProps.size} {...listItemProps}>{`${index}.`}</Text>
      }
      {...listItemProps}
    />
  );
};

export default NumberedItem;
