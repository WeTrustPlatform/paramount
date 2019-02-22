import * as React from 'react';
import { PickerProps as RNPickerProps, ScrollView } from 'react-native';

import { Modal } from '../Modal';
import ModalContent from '../Modal/ModalContent';
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
  const selectedData = data.find(d => d.value === selectedValue);
  const selectedLabel = selectedData ? selectedData.label : null;

  return (
    <>
      <PickerButton
        onPress={() => setIsModalOpen(true)}
        getStyles={getStyles}
        size={size}
        title={selectedLabel}
      />
      <Modal
        visible={isModalOpen}
        useHistory={useHistory}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <ModalContent onClose={() => setIsModalOpen(false)}>
          <ScrollView>
            {header}
            <SelectList
              selectedValue={selectedValue}
              onValueChange={(value, index) => {
                if (onValueChange) onValueChange(value, index);
                setIsModalOpen(false);
              }}
            >
              {children}
            </SelectList>
          </ScrollView>
        </ModalContent>
      </Modal>
    </>
  );
};

export const ModalPicker = ModalPickerBase;

export default ModalPicker;
