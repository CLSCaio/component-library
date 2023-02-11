import React, { useEffect, useState } from 'react';
import { useField } from 'formik';

import { colors_config } from '@config';
import * as C from '@components';

import { colors } from '@global';
import * as I from './interface';
import * as S from './styles';

export const SelectSearch = ({
  maxW = 'block',
  transform,
  readOnly,
  className,
  placeholder,
  border = 'inline',
  handleClean,
  options,
  disabled,
  isLoading,
  forcedOption = true,
  errorMessages,
  label,
  ...rest
}: I.SelectSearchProps) => {
  const { store } = colors_config();
  const [field, meta, helpers] = useField(rest);

  const [error, setError] = useState(false);
  const [errorStyle, setErrorStyle] = useState<'error' | undefined>(undefined);

  const [datalistView, setDatalistView] = useState<'block' | 'none'>('none');

  const filteredOptions = !field?.value
    ? options
    : options.filter(({ value }) =>
        value.toUpperCase().includes(field.value?.toUpperCase()),
      );

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

  const verifyValueWithOptions = () =>
    helpers.setError(errorMessages?.[1] || 'Enter a valid value.');

  const fieldBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setTimeout(() => {
      field.onBlur(event);
    }, 80);
  };

  const returnTestValueFromOption = (
    event: React.FocusEvent<HTMLInputElement, Element>,
  ) =>
    filteredOptions.forEach(({ value }) =>
      value !== field.value
        ? forcedOption &&
          helpers.setError(errorMessages?.[0] || 'select a valid value.')
        : fieldBlur(event),
    );

  const onKeyUp = () => {
    if (!filteredOptions.length && forcedOption) verifyValueWithOptions();
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (datalistView === 'block') closeDatalist();
    returnTestValueFromOption(event);
  };

  const openOrCloseDataListWithArrow = (view: 'block' | 'none') => {
    setDatalistView(view);
    if (meta.value === '' && datalistView === 'block')
      helpers.setError(errorMessages?.[0] || 'select a valid value.');
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
          error={errorStyle}
          positionLabel={label?.position}
        >
          <S.Select
            {...field}
            onKeyUp={onKeyUp}
            autoComplete="off"
            border={border}
            onFocus={() => setDatalistView('block')}
            onBlur={onBlur}
            store={store}
            placeholder={placeholder}
            transform={transform}
            disabled={disabled || readOnly || isLoading}
            required={label?.required}
            data-gtm-form="select"
            data-gtm-name={label?.name}
          />

          {!disabled && !readOnly && !isLoading && options.length > 0 && (
            <S.Datalist
              datalistView={datalistView}
              filteredOptions={filteredOptions.length}
            >
              {filteredOptions.map((option, i) => (
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
