import React, { useEffect, useState } from 'react';
import { useField } from 'formik';

import { mask as masker, unMask } from 'ts-remask';

import * as C from '../../..';

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
  placeholder,
  border = 'inline',
  required,
  autoComplete = 'off',
  ...rest
}: I.InputProps) => {
  const [field, meta, helpers] = useField(rest);

  const [inputType, setInputType] = useState(type || 'text');
  const [error, setError] = useState(false);
  const [errorStyle, setErrorStyle] = useState<'error' | undefined>(undefined);

  const handleBlur = (event: any) => {
    field.onBlur(event);
  };

  const handleInputPassword = () => {
    setInputType((state: string) =>
      state === 'password' ? 'text' : 'password',
    );
  };

  const onKeyUp = (event: any) => {
    mask && helpers.setValue(masker(unMask(event.target.value), M[mask]));
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
            : 'flex-start'
        }
      >
        {label?.name && (
          <C.Group gap={[10, 10]} align="center" maxW="max-content">
            <S.Label
              htmlFor={rest.name}
              disabled={disabled || readOnly}
              error={errorStyle}
              labelposition={label?.position}
              border={border}
              boldLabel={label?.bold}
            >
              {label?.name} {required && '*'}
            </S.Label>
            {label?.tooltip && (
              <C.Tooltip
                disabled={disabled || error}
                description={label?.tooltip}
              />
            )}
          </C.Group>
        )}

        <S.Field>
          <S.Input
            {...field}
            id={rest.name}
            border={border}
            placeholder={placeholder}
            type={inputType}
            transform={transform}
            disabled={disabled || readOnly}
            error={errorStyle}
            required={required}
            onBlur={handleBlur}
            onKeyUp={onKeyUp}
            labelposition={label?.position}
            onPaste={e => type === 'password' && e.preventDefault()}
            autoComplete={autoComplete}
          />

          {field.value && type === 'password' && (
            <S.Toggle onClick={handleInputPassword}>
              {inputType === 'password' ? (
                <S.ClosedEye size={20} />
              ) : (
                <S.OpenedEye size={20} />
              )}
            </S.Toggle>
          )}
        </S.Field>
      </C.Group>
      {error && <C.ErrorMessage error={meta.error || 'Occorreu um erro'} />}
    </S.Container>
  );
};
