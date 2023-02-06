import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Button, Group, Tooltip, Base } from '@components';
import { colors } from '@global';

import * as C from './content';
import * as I from './interface';
import * as S from './styles';

export const Modal = ({
  withoutBase,
  title,
  onClose,
  description,
  onSubmit,
  tooltip,
  children,
  isLoading,
  variant = 'light',
  size,
}: I.ModalProps) => (
  <Base withoutBase={withoutBase}>
    <S.Container size={size} variant={variant} isLoading={isLoading}>
      <S.IconsContainer>
        {tooltip && (
          <Tooltip
            description={tooltip}
            placement="middle"
            color={
              variant ? (variant !== 'light' ? 'white' : 'black') : 'black'
            }
          />
        )}
        {onClose && <S.CloseIcon onClick={onClose} variant={variant} />}
      </S.IconsContainer>
      {isLoading ? (
        <ClipLoader
          size={!size ? C.calcSize(I.sizes.small) : C.calcSize(I.sizes[size])}
          color={variant !== 'light' ? colors.white : colors.black}
        />
      ) : (
        <>
          <Group direction="column" pad={[10, 0, 0, 0]} gap={[20]}>
            <h3 className="text">{title}</h3>

            <p className="text">{description}</p>
          </Group>

          {children}

          {onSubmit?.label && (
            <Button
              {...onSubmit}
              variant={variant === 'light' ? 'outline-reverse' : 'default'}
              maxW="block"
            />
          )}
        </>
      )}
    </S.Container>
  </Base>
);
