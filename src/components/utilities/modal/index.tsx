import React, { useEffect, useState } from 'react';

import { Base } from '../index';
import { ModalConfig } from './modalConfig';

import * as I from './interface';

export const Modal = ({
  isVisible,
  withoutBase,
  onClose,
  ...rest
}: I.ModalProps) =>
  isVisible ? (
    <Base withoutBase={withoutBase}>
      <ModalConfig onClose={() => onClose(false)} {...rest} />
    </Base>
  ) : null;
