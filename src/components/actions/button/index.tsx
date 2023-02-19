import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { MdAdsClick } from 'react-icons/md';

import { Group } from '@components';
import { colors } from '@global';

import * as I from './interface';
import * as S from './styles';

export const Button = ({
  isLoading,
  label,
  disabled,
  variant = 'default',
  className,
  withShadow,
  icon: Icon,
  onClick,
  ...rest
}: I.ButtonProps) => (
  <S.Container disabled={isLoading || disabled} variant={variant} {...rest}>
    {Icon && !isLoading && variant !== 'floating' && variant !== 'pulse' && (
      <S.IconBadge variant={variant}>
        <Icon className="icon-cls-master-lib" />
      </S.IconBadge>
    )}
    <S.Button
      withShadow={withShadow}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`btn btn-bg btn-animate effect effect-1 ${
        className && className
      }`}
      variant={variant}
      type={rest.type || 'submit'}
    >
      {isLoading && !disabled ? (
        <Group justify="around" maxW="block">
          <ClipLoader color={colors.primary} size={16} />
        </Group>
      ) : (
        variant !== 'floating' && label
      )}

      {!isLoading && variant === 'floating' && <MdAdsClick />}
    </S.Button>
  </S.Container>
);
