export interface IIntents {
  danger: 'danger';
  info: 'info';
  success: 'success';
  warning: 'warning';
}

export type IntentType = keyof IIntents;

export const Intent: IIntents = {
  danger: 'danger',
  info: 'info',
  success: 'success',
  warning: 'warning',
};
