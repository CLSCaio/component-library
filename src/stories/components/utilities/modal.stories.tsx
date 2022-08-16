import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Modal } from '../../..';
import { ModalProps } from '../../../components/interfaces';

export default {
  title: 'Utilities/Modal',
  component: Modal,
} as Meta;

export const Overview: Story<ModalProps> = args => (
  <>
    <h1>Coloque &quot;isVisible&quot; para true para visualizar o modal</h1>
    <Modal {...args} />
  </>
);

Overview.args = {
  withBase: true,
  title: 'Este é um modal',
  description: 'descrição do modal',
  closeButton: 'voltar',
  button: {
    label: 'submit',
    onClick: () => document.write(''),
  },
};
