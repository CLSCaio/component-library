import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { MdAdsClick } from 'react-icons/md';

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
      {Icon && !isLoading && variant !== 'floating' && variant !== 'pulse' && (
        <Icon
          color={
            variant === 'outline' || variant === 'default'
              ? colors.secundary
              : colors.primary
          }
          className="icon-cls-master-lib"
          size={25}
        />
      )}
      {isLoading && !disabled ? (
        <ClipLoader color={colors.primary} size={25} />
      ) : (
        variant !== 'floating' && label
      )}

      {!isLoading && variant === 'floating' && <MdAdsClick />}
    </S.Button>
  </S.Container>
);
