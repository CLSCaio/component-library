import React from 'react';

import { Button, Group, Tooltip } from '../../../../index';

import * as I from './interface';
import * as S from './styles';

export const ModalConfig = ({
  title,
  onClose,
  description,
  onSubmit,
  closeButton,
  tooltip,
  variant = 'light',
  ...rest
}: I.ModalConfigProps) => (
  <S.Container {...rest} variant={variant}>
    <Group direction="column" gap={{ desktop: 20 }}>
      <Group justify="space-between" align="center">
        <h2 className="text">{title}</h2>
        {tooltip && (
          <Tooltip
            description={tooltip}
            color={
              variant ? (variant !== 'light' ? 'white' : 'black') : 'black'
            }
          />
        )}
        {!closeButton && <S.Icon onClick={onClose} variant={variant} />}
      </Group>
      <p className="text">{description}</p>
    </Group>

    <Group
      direction="column"
      justify="center"
      align="center"
      gap={{ desktop: 7 }}
    >
      {closeButton && (
        <Button
          type="button"
          onClick={onClose}
          variant="outline"
          label={closeButton}
          className="btn-modal-1"
          maxW="block"
        />
      )}
      {onSubmit?.label && (
        <Button
          {...onSubmit}
          className="btn-modal-2"
          variant="outline-reverse"
          maxW="block"
        />
      )}
    </Group>
  </S.Container>
);
