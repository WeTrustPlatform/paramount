import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon } from '../../icons';
import { Theme, withTheme } from '../../theme';
import { Button } from '../Button';
import { ButtonColor } from '../Button/Button.styles';
import { Spacing } from '../Layout';
import { Heading } from '../Typography';
import Dialog, { DialogProps } from './Dialog';

export interface ConfirmDialogProps
  extends DialogProps,
    ConfirmDialogHeaderProps,
    ConfirmDialogFooterProps {}

export interface ConfirmDialogHeaderProps {
  /** Title displayed in the header */
  title?: string;
  onRequestClose?: () => void;
  theme: Theme;
}

const ConfirmDialogHeader = ({
  title,
  theme,
  onRequestClose,
}: ConfirmDialogHeaderProps) => (
  <Spacing
    padding={2}
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
  >
    <Heading>{title}</Heading>
    <TouchableOpacity onPress={onRequestClose}>
      <Icon name="x" size={24} color={theme.colors.text.default} />
    </TouchableOpacity>
  </Spacing>
);

export interface ConfirmDialogFooterProps {
  color?: ButtonColor;
  /** Label for cancel button */
  cancelLabel?: string;
  /** Label for confirm button */
  confirmLabel?: string;
  /** Handler for confirm button */
  onConfirm?: () => void;
  /** Handler for cancel button */
  onRequestClose?: () => void;
}

const ConfirmDialogFooter = ({
  color = 'primary',
  onRequestClose,
  onConfirm,
  cancelLabel,
  confirmLabel,
}: ConfirmDialogFooterProps) => (
  <Spacing padding={2} flexDirection="row" justifyContent="flex-end">
    <Button appearance="minimal" onPress={onRequestClose} title={cancelLabel} />
    <Spacing paddingLeft={2}>
      <Button color={color} onPress={onConfirm} title={confirmLabel} />
    </Spacing>
  </Spacing>
);

const ConfirmDialogBase = (props: ConfirmDialogProps) => {
  const {
    cancelLabel = 'Cancel',
    children,
    confirmLabel = 'Confirm',
    footer,
    header,
    onRequestClose,
    onConfirm,
    title,
    theme,
    ...dialogProps
  } = props;

  return (
    <Dialog
      header={
        header === null
          ? null
          : header || (
              <ConfirmDialogHeader
                theme={theme}
                onRequestClose={onRequestClose}
                title={title}
              />
            )
      }
      footer={
        footer === null
          ? null
          : footer || (
              <ConfirmDialogFooter
                onRequestClose={onRequestClose}
                onConfirm={onConfirm}
                cancelLabel={cancelLabel}
                confirmLabel={confirmLabel}
              />
            )
      }
      onRequestClose={onRequestClose}
      {...dialogProps}
    >
      <Spacing padding={2}>{children}</Spacing>
    </Dialog>
  );
};

export const ConfirmDialog = withTheme(ConfirmDialogBase);
export default ConfirmDialog;
