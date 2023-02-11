import React from 'react';
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
  variant = 'default',
  className,
  withShadow,
  icon: Icon,
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
      {Icon && !isLoading && variant !== 'floating' && variant !== 'pulse' && (
        <S.IconBadge user_colors={store} variant={variant}>
          <Icon className="icon-cls-master-lib" />
        </S.IconBadge>
      )}
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
        {isLoading && !disabled ? (
          <Group justify="around" maxW="block">
            <ClipLoader color={colors.primary} size={16} />
          </Group>
        ) : (
          variant !== 'floating' && label
        )}

        {/* {!isLoading && variant !== 'floating' && label} */}
        {/* {isLoading && disabled && variant !== 'floating' && label} */}
        {!isLoading && variant === 'floating' && <MdAdsClick />}
      </S.Button>
    </S.Container>
  );
};
