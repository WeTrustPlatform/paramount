import * as React from 'react';
import { PickerProps as RNPickerProps } from 'react-native';

import { Dialog } from '../Dialog';
import { SelectList, SelectListItemBaseProps } from '../SelectList';
import PickerButton, { GetPickerButtonStylesProp } from './PickerButton';
import { PickerButtonSize } from './PickerButton.styles';

export interface DialogPickerProps extends RNPickerProps {
  children: Array<React.ReactElement<SelectListItemBaseProps>>;
  /** Prop to be passed to Dialog */
  useHistory?: boolean;
  /** Label displayed when showing country selection */
  header?: React.ReactNode;
  getStyles?: GetPickerButtonStylesProp;
  size?: PickerButtonSize;
}

const DialogPickerBase = (props: DialogPickerProps) => {
  const {
    header,
    getStyles,
    useHistory = false,
    selectedValue = null,
    onValueChange,
    children,
    size = 'medium',
  } = props;
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const childrenArray = React.Children.toArray(children);
  const data = childrenArray.map(child => child.props);
  const selectedData = data.find(d => d.value === selectedValue);
  const selectedLabel = selectedData ? selectedData.label : null;

  return (
    <>
      <PickerButton
        onPress={() => setIsDialogOpen(true)}
        getStyles={getStyles}
        size={size}
        title={selectedLabel}
      />
      <Dialog
        header={header}
        isVisible={isDialogOpen}
        useHistory={useHistory}
        onRequestClose={() => setIsDialogOpen(false)}
      >
        <SelectList
          selectedValue={selectedValue}
          onValueChange={(value, index) => {
            if (onValueChange) onValueChange(value, index);
            setIsDialogOpen(false);
          }}
        >
          {children}
        </SelectList>
      </Dialog>
    </>
  );
};

export const DialogPicker = DialogPickerBase;

export default DialogPicker;
