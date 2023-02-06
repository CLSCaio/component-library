import React, { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { MdAdsClick } from 'react-icons/md';

import { Group } from '@components';
import { colors } from '@global';

import { colors_config } from '@config';
import * as I from './interface';
import * as S from './styles';

export const Button = ({
  isLoading,
  label,
  disabled,
  variant,
  className,
  withShadow,
  onClick,
  ...rest
}: I.ButtonProps) => {
  const { store } = colors_config();

  return (
    <S.Container
      disabled={isLoading || disabled}
      variant={variant}
      {...rest}
      user_colors={store}
    >
      <S.Button
        user_colors={store}
        withShadow={withShadow}
        onClick={onClick}
        disabled={isLoading || disabled}
        className={`btn btn-bg btn-animate effect effect-1 ${
          className && className
        }`}
        variant={variant}
        type={rest.type || 'submit'}
      >
        {isLoading && !disabled && (
          <Group justify="around" maxW="block">
            <ClipLoader color={colors.primary} size={16} />
          </Group>
        )}
        {!isLoading && variant !== 'floating' && label}
        {isLoading && disabled && variant !== 'floating' && label}
        {!isLoading && variant === 'floating' && <MdAdsClick />}
      </S.Button>
    </S.Container>
  );
};
