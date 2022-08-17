import React, { useEffect, useState } from 'react';

import { Base } from '../base';
import { ModalConfig } from './modalConfig';

import * as I from './interface';

export const Modal = ({
  isVisible,
  withBase,
  onClose,
  ...rest
}: I.ModalProps) =>
  isVisible ? (
    <Base transparent={!withBase}>
      <ModalConfig onClose={() => onClose(false)} {...rest} />
    </Base>
  ) : null;
