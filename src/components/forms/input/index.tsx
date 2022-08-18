/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useField } from 'formik';

import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';

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
  tooltip,
  border = 'inline',
  autoComplete = 'off',
  ...rest
}: I.InputProps) => {
  const [field, meta] = useField(rest);

  const [inputType, setInputType] = useState(type || 'text');
  const [error, setError] = useState(false);

  const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy');
  const autoCorrectedShortDatePipe = createAutoCorrectedDatePipe('mm/yyyy');

  const handleBlur = (event: any) => {
    field.onBlur(event);
  };

  const handleInputPassword = () => {
    setInputType((state: string) =>
      state === 'password' ? 'text' : 'password',
    );
  };

  useEffect(() => {
    if (meta.touched && meta.error) setError(true);
    if (!meta.error) setError(false);
  }, [meta.touched && meta.error]);

  const validateMask = (value: any) => {
    if (!mask) return false;

    if (mask === 'user') {
      if (!value) return false;
      return Array.from(value).map(() => /[A-Za-z0-9* ]/);
    }

    if (mask === 'name') {
      if (!value) return false;
      return Array.from(value).map(
        () => /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s* ]/,
      );
    }

    if (mask === 'text') {
      if (!value) return false;
      return Array.from(value).map(
        () => /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\-,.\s* ]/,
      );
    }

    if (mask === 'creditCard') {
      // Amex
      if (/^3[47][0-9]/.test(value.replace(' ', ''))) {
        return M.creditCardAmex;
      }
      // Diners
      if (/^3(?:0[0-5]|[68][0-9])[0-9]/.test(value.replace(' ', ''))) {
        return M.creditCardDiners;
      }
      // Default
      return M.creditCardDefault;
    }
    return M[mask] || false;
  };

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
          <S.Input
            {...field}
            pipe={
              (mask === ('date' || 'shortDate') &&
                {
                  date: autoCorrectedDatePipe,
                  shortDate: autoCorrectedShortDatePipe,
                }[mask]) ||
              false
            }
            id={rest.name}
            border={border}
            mask={validateMask}
            placeholder={placeholder}
            type={inputType}
            placeholderChar=" "
            keepCharPositions
            transform={transform}
            disabled={disabled || readOnly}
            error={error}
            onBlur={handleBlur}
            positionLabel={label?.position}
            guide={false}
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
