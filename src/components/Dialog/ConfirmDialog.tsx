import * as React from 'react';
import { FiX } from 'react-icons/fi';
import { TouchableOpacity } from 'react-native';

import { ITheme, withTheme } from '../../theme';
import { ButtonColor } from '../../theme/component-variables/buttonVariables';
import { Button } from '../Button';
import { Spacing } from '../Layout';
import { Heading } from '../Typography';
import Dialog, { IDialogProps } from './Dialog';

export interface IConfirmDialogProps
  extends IDialogProps,
    IConfirmDialogHeaderProps,
    IConfirmDialogFooterProps {}

export interface IConfirmDialogHeaderProps {
  /** Title displayed in the header */
  title?: string;
  onClose?: () => void;
  theme: ITheme;
}

const ConfirmDialogHeader = ({
  title,
  theme,
  onClose,
}: IConfirmDialogHeaderProps) => (
  <Spacing
    padding={2}
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
  >
    <Heading>{title}</Heading>
    <TouchableOpacity onPress={onClose}>
      <FiX size={24} color={theme.themeVariables.colors.text.default} />
    </TouchableOpacity>
  </Spacing>
);

export interface IConfirmDialogFooterProps {
  color?: ButtonColor;
  /** Label for cancel button */
  cancelLabel?: string;
  /** Label for confirm button */
  confirmLabel?: string;
  /** Handler for confirm button */
  onConfirm?: () => void;
  /** Handler for cancel button */
  onClose?: () => void;
}

const ConfirmDialogFooter = ({
  color = 'primary',
  onClose,
  onConfirm,
  cancelLabel,
  confirmLabel,
}: IConfirmDialogFooterProps) => (
  <Spacing padding={2} flexDirection="row" justifyContent="flex-end">
    <Button appearance="minimal" onPress={onClose}>
      {cancelLabel}
    </Button>
    <Spacing paddingLeft={2}>
      <Button color={color} onPress={onConfirm}>
        {confirmLabel}
      </Button>
    </Spacing>
  </Spacing>
);

const ConfirmDialogBase = (props: IConfirmDialogProps) => {
  const {
    cancelLabel = 'Cancel',
    children,
    confirmLabel = 'Confirm',
    footer,
    header,
    onClose,
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
                onClose={onClose}
                title={title}
              />
            )
      }
      footer={
        footer === null
          ? null
          : footer || (
              <ConfirmDialogFooter
                onClose={onClose}
                onConfirm={onConfirm}
                cancelLabel={cancelLabel}
                confirmLabel={confirmLabel}
              />
            )
      }
      onClose={onClose}
      {...dialogProps}
    >
      <Spacing padding={2}>{children}</Spacing>
    </Dialog>
  );
};

export const ConfirmDialog = withTheme(ConfirmDialogBase);
export default ConfirmDialog;
