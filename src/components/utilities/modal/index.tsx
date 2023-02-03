import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Button, Group, Tooltip, Base } from 'src/components';

import * as C from './content';
import * as I from './interface';
import * as S from './styles';

export const Modal = ({
  isVisible,
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
}: I.ModalProps) =>
  isVisible ? (
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
          <S.CloseIcon onClick={onClose} variant={variant} />
        </S.IconsContainer>
        {isLoading ? (
          <ClipLoader
            size={!size ? C.calcSize(I.sizes.small) : C.calcSize(I.sizes[size])}
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
  ) : null;
