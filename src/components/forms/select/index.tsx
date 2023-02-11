import React, { useEffect, useState } from 'react';
import { useField } from 'formik';

import { colors_config } from '@config';
import * as C from '@components';

import { colors } from '@global';
import * as I from './interface';
import * as S from './styles';

export const Select = ({
  maxW = 'block',
  transform,
  readOnly,
  className,
  placeholder,
  border = 'inline',
  handleClean,
  errorMessage,
  options,
  disabled,
  isLoading,
  label,
  ...rest
}: I.SelectProps) => {
  const { store } = colors_config();
  const [field, meta, helpers] = useField(rest);

  const [error, setError] = useState(false);
  const [errorStyle, setErrorStyle] = useState<'error' | undefined>(undefined);

  const [datalistView, setDatalistView] = useState<'block' | 'none'>('none');

  const handleClearInput = () => helpers.setValue('');

  const setSelectValue = (value: string) => {
    helpers.setValue(value);
    setDatalistView('none');
  };

  const closeDatalist = () => {
    setTimeout(() => {
      setDatalistView('none');
    }, 80);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (datalistView === 'block') closeDatalist();
    setTimeout(() => {
      field.onBlur(event);
    }, 80);
  };

  const openOrCloseDataListWithArrow = (view: 'block' | 'none') => {
    setDatalistView(view);
    if (meta.value === '' && datalistView === 'block')
      helpers.setError(errorMessage || 'select a valid value.');
  };

  useEffect(() => {
    if (meta.error) {
      setError(true);
      setErrorStyle('error');
    }

    if (!meta.error) {
      setError(false);
      setErrorStyle(undefined);
    }
  }, [meta.error]);

  return (
    <S.Container maxW={maxW} className={className}>
      <C.Group
        pos={{ type: 'relative' }}
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
              positionLabel={label.position}
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
          datalistView={datalistView}
          border={border}
          disabled={disabled || readOnly || isLoading}
          readOnly
          error={errorStyle}
          positionLabel={label?.position}
        >
          <S.Select
            {...field}
            border={border}
            onFocus={() => setDatalistView('block')}
            onBlur={onBlur}
            autoComplete="off"
            store={store}
            placeholder={placeholder}
            transform={transform}
            disabled={disabled || readOnly || isLoading}
            readOnly
            required={label?.required}
            data-gtm-form="select"
            data-gtm-name={label?.name}
          />

          {!disabled && !readOnly && !isLoading && options.length > 0 && (
            <S.Datalist datalistView={datalistView}>
              {options.map((option, i) => (
                <S.Option
                  key={`${option.value}-${+i}`}
                  onClick={() => setSelectValue(option.value)}
                >
                  {option.value}
                </S.Option>
              ))}
            </S.Datalist>
          )}
          <S.Toggle isLoading={isLoading} border={border}>
            {isLoading && <S.Loading color={colors.black} size={20} />}

            {!isLoading && handleClean && (
              <S.ClearInput size={20} onClick={handleClearInput} />
            )}

            {!isLoading && !disabled && !readOnly && datalistView === 'none' ? (
              <S.ArrowDown
                size={24}
                onClick={() => openOrCloseDataListWithArrow('block')}
              />
            ) : (
              <S.ArrowUp
                size={24}
                onClick={() => openOrCloseDataListWithArrow('none')}
              />
            )}
          </S.Toggle>
        </S.Field>
      </C.Group>
      {error && <C.ErrorMessage error={meta.error || 'Occorreu um erro'} />}
    </S.Container>
  );
};
