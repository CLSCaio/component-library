import React, { FocusEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useField } from 'formik';

import { mask as masker, unMask } from 'ts-remask';

import { colors_config } from '@config';
import { colors } from '@global';
import * as C from '@components';

import * as M from './masks';
import * as I from './interface';
import * as S from './styles';

export const Input = ({
  label,
  mask,
  type,
  maxW = 'block',
  transform,
  readOnly,
  disabled,
  className,
  handleClean,
  placeholder,
  border = 'inline',
  autoComplete = 'off',
  isLoading,
  ...rest
}: I.InputProps) => {
  const { store } = colors_config();
  const [field, meta, helpers] = useField(rest);

  const [inputType, setInputType] = useState(type || 'text');
  const [error, setError] = useState(false);
  const [errorStyle, setErrorStyle] = useState<'error' | undefined>(undefined);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    field.onBlur(event);
  };

  const handleInputPassword = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const handleClearInput = () => helpers.setValue('');

  const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    mask &&
      helpers.setValue(masker(unMask(event.currentTarget.value), M[mask]));
  };

  useEffect(() => {
    if (meta.touched && meta.error) {
      setError(true);
      setErrorStyle('error');
    }

    if (!meta.error) {
      setError(false);
      setErrorStyle(undefined);
    }
  }, [meta.touched && meta.error]);

  return (
    <S.Container maxW={maxW} className={className}>
      <C.Group
        maxW="block"
        direction={
          label?.position
            ? label?.position === 'top'
              ? 'column'
              : 'row'
            : 'column'
        }
        gap={
          ((!label?.position && border) || (label?.position && border)) && [
            7, 7,
          ]
        }
        align={
          label?.position === 'left' && border === 'outline'
            ? 'center'
            : label?.position === 'left' && border === 'inline'
            ? 'center'
            : 'start'
        }
      >
        {label?.name && (
          <C.Group gap={[10, 10]} align="center" maxW="maxContent">
            <S.Label
              store={store}
              htmlFor={rest.name}
              disabled={disabled || readOnly || isLoading}
              error={errorStyle}
              positionLabel={label?.position}
              border={border}
              boldLabel={label?.bold}
            >
              {label?.name} {label?.required && '*'}
            </S.Label>
            {label?.tooltip && (
              <C.Tooltip description={label?.tooltip} isLoading={isLoading} />
            )}
          </C.Group>
        )}

        <S.Field
          store={store}
          disabled={disabled || readOnly || isLoading}
          error={errorStyle}
          positionLabel={label?.position}
          border={border}
        >
          <S.Input
            {...field}
            placeholder={placeholder}
            type={inputType}
            transform={transform}
            disabled={disabled || readOnly || isLoading}
            required={label?.required}
            onBlur={handleBlur}
            onKeyUp={onKeyUp}
            onPaste={e => type === 'password' && e.preventDefault()}
            autoComplete={autoComplete}
          />
          <S.Toggle isLoading={isLoading}>
            {isLoading && <S.Loading color={colors.black} size={20} />}

            {!isLoading && handleClean && (
              <S.ClearInput size={20} onClick={handleClearInput} />
            )}

            {!isLoading &&
              type === 'password' &&
              (inputType === 'password' ? (
                <S.ClosedEye size={20} onClick={handleInputPassword} />
              ) : (
                <S.OpenedEye size={20} onClick={handleInputPassword} />
              ))}
          </S.Toggle>
        </S.Field>
      </C.Group>
      {error && <C.ErrorMessage error={meta.error || 'Occorreu um erro'} />}
    </S.Container>
  );
};
