import React, { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Button, Group, Tooltip } from '../../../../index';

import * as C from './content';
import * as I from './interface';
import * as S from './styles';

export const ModalConfig = ({
  title,
  onClose,
  description,
  onSubmit,
  closeButton,
  tooltip,
  isLoading,
  variant = 'light',
  ...rest
}: I.ModalConfigProps) => (
  <S.Container {...rest} isLoading={isLoading} variant={variant}>
    {isLoading ? (
      <ClipLoader
        size={
          !rest.size
            ? C.calcSize(I.sizes.small)
            : C.calcSize(I.sizes[rest.size])
        }
      />
    ) : (
      <>
        <Group direction="column" gap={[20, 20]}>
          <Group justify="space-between">
            <h2 className="text">{title}</h2>
            {tooltip && (
              <Tooltip
                description={tooltip}
                placement="middle"
                color={
                  variant ? (variant !== 'light' ? 'white' : 'black') : 'black'
                }
              />
            )}
            {!closeButton && <S.Icon onClick={onClose} variant={variant} />}
          </Group>
          <p className="text">{description}</p>
        </Group>

        <Group direction="column" justify="center" align="center" gap={[7, 7]}>
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
      </>
    )}
  </S.Container>
);
