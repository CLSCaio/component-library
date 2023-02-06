import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Modal, ModalProps, Button } from '@components';

export default {
  title: 'Utilities/Modal',
  component: Modal,
} as Meta;

export const Overview: Story<ModalProps> = ({ onClose, ...args }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible && <Modal onClose={() => setVisible(false)} {...args} />}
      <Button
        type="button"
        onClick={() => setVisible(true)}
        label="visible true"
      />
    </>
  );
};

Overview.args = {
  title: 'Este é um modal',
  description: 'descrição do modal',
  tooltip: 'tooltip do modal',
  onSubmit: {
    label: 'submit',
    onClick: () => alert('botao clicado'),
  },
};
