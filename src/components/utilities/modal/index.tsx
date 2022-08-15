import React, { useEffect, useState } from 'react';

import { Base } from '../base';
import { ModalConfig } from './modalConfig';

import * as I from './interface';

export const Modal = ({ isVisible, withBase, ...rest }: I.ModalProps) => {
  const [visible, setVisible] = useState(isVisible);

  const onClose = () => setVisible(false);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  return visible ? (
    <Base transparent={!withBase}>
      <ModalConfig onClose={onClose} {...rest} />
    </Base>
  ) : null;
};
