import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { MdAdsClick } from 'react-icons/md';
// import { Link } from 'react-router-dom';

import { colors } from 'src/global';

import * as I from './interface';
import * as S from './styles';

export const Button = ({
  isLoading,
  label,
  disabled,
  variant,
  className,
  onClick,
  ...rest
}: I.ButtonProps) => (
  <S.Container disabled={isLoading || disabled} variant={variant} {...rest}>
    <S.Button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`btn btn-bg btn-animate effect effect-1 ${
        className && className
      }`}
      variant={variant}
      type={rest.type || 'submit'}
    >
      {isLoading && !disabled && (
        <ClipLoader color={colors.warning} size={16} />
      )}
      {!isLoading && variant !== 'floating' && label}
      {isLoading && disabled && variant !== 'floating' && label}
      {!isLoading && variant === 'floating' && <MdAdsClick />}
    </S.Button>
  </S.Container>
);
