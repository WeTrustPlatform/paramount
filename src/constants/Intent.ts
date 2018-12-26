export interface Intents {
  danger: 'danger';
  info: 'info';
  success: 'success';
  warning: 'warning';
}

export type Intent = keyof Intents;

export const INTENT: Intents = {
  danger: 'danger',
  info: 'info',
  success: 'success',
  warning: 'warning',
};
