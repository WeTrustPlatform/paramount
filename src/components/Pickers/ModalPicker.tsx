import * as React from 'react';
import { PickerProps as RNPickerProps } from 'react-native';

import { CloseableModal } from '../Modal';
import { SelectList, SelectListItemBaseProps } from '../SelectList';
import PickerButton, { GetPickerButtonStylesProp } from './PickerButton';
import { PickerButtonSize } from './PickerButton.styles';

export interface ModalPickerProps extends RNPickerProps {
  children: Array<React.ReactElement<SelectListItemBaseProps>>;
  /** Prop to be passed to modal */
  useHistory?: boolean;
  /** Label displayed when showing country selection */
  header?: React.ReactNode;
  getStyles?: GetPickerButtonStylesProp;
  size?: PickerButtonSize;
}

const SELECTED_INDEX_OFFSET = 3;

// REVIEW: When the window height is larger than the select list, and initial scroll index is at the bottom half, there is unscrollable blank space
// it is a rare use case that can be solved by using ref to `scrollToIndex`
const ModalPickerBase = (props: ModalPickerProps) => {
  const {
    header,
    getStyles,
    useHistory = false,
    selectedValue = null,
    onValueChange,
    children,
    size = 'medium',
  } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const childrenArray = React.Children.toArray(children);
  const data = childrenArray.map(child => child.props);
  const selectedIndex = data.findIndex(d => d.value === selectedValue);
  const selectedData = selectedIndex >= 0 ? data[selectedIndex] : null;
  const selectedLabel = selectedData ? selectedData.label : null;

  return (
    <>
      <PickerButton
        onPress={() => setIsModalOpen(true)}
        getStyles={getStyles}
        size={size}
        title={selectedLabel}
      />
      <CloseableModal
        visible={isModalOpen}
        useHistory={useHistory}
        onRequestClose={() => setIsModalOpen(false)}
        onClose={() => setIsModalOpen(false)}
      >
        {header}
        <SelectList
          initialScrollIndex={selectedIndex - SELECTED_INDEX_OFFSET}
          initialNumToRender={30}
          selectedValue={selectedValue}
          onValueChange={(value, index) => {
            if (onValueChange) onValueChange(value, index);
            setIsModalOpen(false);
          }}
        >
          {children}
        </SelectList>
      </CloseableModal>
    </>
  );
};

export const ModalPicker = ModalPickerBase;

export default ModalPicker;
