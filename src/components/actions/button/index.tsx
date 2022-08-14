import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { MdAdsClick } from 'react-icons/md';

import { colors } from 'src/global';

import * as I from './interface';
import * as S from './styles';

export const Button = ({
  isLoading,
  label,
  disabled,
  variant,
  className,
  ...rest
}: I.ButtonProps) => (
  <S.Container disabled={isLoading || disabled} variant={variant} {...rest}>
    <S.Button
      disabled={isLoading || disabled}
      className={`btn btn-bg btn-animate effect effect-1 ${
        className && className
      }`}
      variant={variant}
      type={rest.type}
    >
      {isLoading && !disabled && (
        <ClipLoader color={colors.warning} size={16} />
      )}
      {!isLoading && variant !== 'floating' && label}
      {isLoading && disabled && variant !== 'floating' && label}
      {!isLoading && !disabled && variant === 'floating' && <MdAdsClick />}
    </S.Button>
  </S.Container>
);
