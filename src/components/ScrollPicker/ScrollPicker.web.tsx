import * as React from 'react';
import { View } from 'react-native';

import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { ScrollPickerProps } from './ScrollPicker';
import { ITEM_HEIGHT } from './ScrollPicker.constants';
import { getScrollPickerStyles } from './ScrollPicker.styles';
import {
  getOptionFromOptions,
  makeOptionsWithClones,
} from './ScrollPicker.utils';
import { ScrollPickerItem } from './ScrollPickerItem';

/**
 * The algorithm works as follows:
 * Assumption: We display only 5 items at a time
 * Assumption: Height of the picker is 200
 * Assumption: Height of an item is 40
 *
 *      F         LIST_HEIGHT:START (0px)
 *      G         CLONES
 * ====TOP======
 *      A         ORIGINALS
 *      B
 *      C
 *      D
 *      E
 *      F
 *      G
 * ===BOTTOM====  LIST_HEIGHT:END (320px)
 *      A         CLONES
 *      B
 *      C
 *
 */

export const ScrollPicker = (props: ScrollPickerProps) => {
  const {
    options,
    onValueChange = () => {
      return;
    },
    getStyles,
  } = props;
  const optionsWithClones = makeOptionsWithClones(options);
  const theme = useTheme();

  const listHeight = options.length * ITEM_HEIGHT + ITEM_HEIGHT;

  const listRef = React.useRef<HTMLDivElement>(null);
  const getOption = React.useMemo(() => getOptionFromOptions(options), [
    options,
  ]);

  const {
    bottomOverlayStyle,
    containerStyle,
    listContainerStyle,
    upperOverlayStyle,
  } = mergeStyles(
    getScrollPickerStyles,
    getStyles,
    theme.components.getScrollPickerStyles,
  )(props, theme);

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({ top: ITEM_HEIGHT });
    }
  }, [listRef]);

  const handleScrollLoop = React.useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      if (!listRef.current) return;

      const scrollPosition = event.currentTarget.scrollTop;

      if (scrollPosition > listHeight) {
        listRef.current.scrollTo({ top: ITEM_HEIGHT });
      } else if (scrollPosition < ITEM_HEIGHT) {
        listRef.current.scrollTo({ top: listHeight });
      }

      const option = getOption(scrollPosition);

      onValueChange(option.value);
    },
    [],
  );

  return (
    <View style={containerStyle}>
      <div
        ref={listRef}
        onScroll={handleScrollLoop}
        style={listContainerStyle}
        data-testid="container"
      >
        {optionsWithClones.map(option => (
          <ScrollPickerItem key={option.value} option={option} />
        ))}
      </div>
      <View pointerEvents="none" style={upperOverlayStyle} />
      <View pointerEvents="none" style={bottomOverlayStyle} />
    </View>
  );
};
