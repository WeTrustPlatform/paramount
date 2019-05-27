import * as React from 'react';

import { useTheme } from '../../theme';
import { ScrollPickerProps } from './ScrollPicker';
import { ITEM_HEIGHT, SCROLL_PICKER_HEIGHT } from './ScrollPicker.constants';
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
 *                LIST_HEIGHT:START (0px)
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
 *      D
 *      E
 *
 */

export const ScrollPicker = (props: ScrollPickerProps) => {
  const {
    options,
    onValueChange = () => {
      return;
    },
  } = props;
  const optionsWithClones = makeOptionsWithClones(options);
  const theme = useTheme();

  const listHeight = options.length * ITEM_HEIGHT + ITEM_HEIGHT;

  const listRef = React.useRef<HTMLDivElement>(null);
  const getOption = React.useMemo(() => getOptionFromOptions(options), [
    options,
  ]);

  React.useEffect(() => {
    if (listRef.current) {
      // Scroll to first item
      listRef.current.scrollTo({ top: ITEM_HEIGHT });
    }
  }, [listRef]);

  const styles = {
    listContainer: {
      height: SCROLL_PICKER_HEIGHT,
      overflowY: 'scroll' as const,
      scrollSnapType: 'y mandatory',
      width: '100%',
    },
    listWrapper: {
      margin: 0,
    },
  };

  const handleScrollLoop = React.useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      if (!listRef.current) return;

      const scrollPosition = event.currentTarget.scrollTop;

      if (scrollPosition >= listHeight /* Has scrolled past bottom */) {
        // Scroll to top
        listRef.current.scrollTo({ top: ITEM_HEIGHT });
      } else if (scrollPosition < ITEM_HEIGHT /* Has scrolled past top */) {
        // Scroll to bottom
        listRef.current.scrollTo({ top: listHeight });
      }

      const option = getOption(scrollPosition);

      onValueChange(option.value);
    },
    [],
  );

  return (
    <div
      style={{
        height: SCROLL_PICKER_HEIGHT,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        ref={listRef}
        onScroll={handleScrollLoop}
        style={styles.listContainer}
      >
        {optionsWithClones.map(option => (
          <ScrollPickerItem key={option.value} option={option} />
        ))}
      </div>
      <div
        data-testid="BORDER"
        style={{
          borderBottomWidth: 2,
          borderColor: theme.colors.border.primary,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderStyle: 'solid',
          borderTopWidth: 2,
          boxShadow: `0px 0px 100px 100px rgba(255, 255, 255, 0.5)`,
          height: ITEM_HEIGHT,
          pointerEvents: 'none',
          position: 'absolute',
          top: ITEM_HEIGHT,
          width: '100%',
        }}
      />
    </div>
  );
};
