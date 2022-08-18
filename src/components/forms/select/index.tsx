/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useField } from 'formik';

import * as C from '../../..';

import * as I from './interface';
import * as S from './styles';

export const Select = ({
  maxW = 'block',
  transform,
  readOnly,
  className,
  placeholder,
  border = 'inline',
  options,
  disabled,
  label,
  required,
  tooltip,
  ...rest
}: I.SelectProps) => {
  const [field, meta] = useField(rest);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (meta.touched && meta.error) setError(true);
    if (!meta.error) setError(false);
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
          ((!label?.position && border) || (label?.position && border)) && {
            desktop: 7,
          }
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
          <C.Group gap={{ desktop: 10 }} maxW="max-content">
            <S.Label
              htmlFor={rest.name}
              disabled={disabled || readOnly}
              error={error}
              positionLabel={label.position}
              border={border}
            >
              {label?.name}
            </S.Label>
            {tooltip && (
              <C.Tooltip disabled={disabled || error} description={tooltip} />
            )}
          </C.Group>
        )}

        <S.Field>
          <S.Select
            {...field}
            id={rest.name}
            border={border}
            placeholder={placeholder}
            transform={transform}
            disabled={disabled || readOnly}
            required={required}
            error={error}
            data-gtm-form="select"
            data-gtm-name={label?.name}
            positionLabel={label?.position}
          >
            {options.map(option => (
              <S.Option
                key={`${option.value}${option.label}`}
                value={option.value}
              >
                {option.label}
              </S.Option>
            ))}
          </S.Select>
        </S.Field>
      </C.Group>
      {error && <C.ErrorMessage error={meta.error || 'Occorreu um erro'} />}
    </S.Container>
  );
};
