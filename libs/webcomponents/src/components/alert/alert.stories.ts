import {text} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const Alert = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<a-alert first="${firstName}" middle="${middleName}" last="${lastName}"></a-alert>`;
};
