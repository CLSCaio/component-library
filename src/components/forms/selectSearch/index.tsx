import React, { useEffect, useState } from 'react';
import { useField } from 'formik';

import * as C from '@components';

import { colors } from '@global';
import * as I from './interface';
import * as S from './styles';

export const SelectSearch = ({
  maxW = 'block',
  transform,
  readOnly,
  placeholder,
  border = 'inline',
  handleClean,
  options,
  disabled,
  isLoading,
  forcedOption = true,
  errorMessages,
  label,
  name,
  id,
}: I.SelectSearchProps) => {
  const [field, meta, helpers] = useField(name);

  const [error, setError] = useState(false);
  const [errorStyle, setErrorStyle] = useState<'error' | undefined>(undefined);

  const [selectSearchValue, setSelectSearchValue] = useState(meta.value || '');

  const [datalistView, setDatalistView] = useState<'block' | 'none'>('none');

  const filteredOptions = !options
    ? []
    : !selectSearchValue
    ? options
    : options.filter(({ label: l }) =>
        l.toUpperCase().includes(selectSearchValue?.toUpperCase()),
      );

  const handleClearInput = () => {
    helpers.setValue('');
    setSelectSearchValue('');
  };

  const onChangeOption = (option: I.OptionsProps) => {
    helpers.setValue(option.value);
    setSelectSearchValue(option.value ? option.label : '');
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
    filteredOptions?.forEach(({ value }) =>
      value !== field.value
        ? forcedOption &&
          helpers.setError(errorMessages?.[0] || 'select a valid value.')
        : fieldBlur(event),
    );

  const onKeyUp = () => {
    if (!filteredOptions?.length && forcedOption) verifyValueWithOptions();
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

  useEffect(() => {
    if (meta.value === '') return;
    const values = options?.filter(
      ({ value, label: l }) => value === meta.value || l === meta.value,
    );

    if (!values?.length)
      throw new Error('Cannot find this default value in options.');

    helpers.setValue(values[0].value);
    setSelectSearchValue(values[0].label);
  }, []);

  return (
    <S.Container maxW={maxW}>
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
              htmlFor={name}
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
          datalistView={datalistView}
          border={border}
          disabled={disabled || readOnly || isLoading}
          error={errorStyle}
          positionLabel={label?.position}
        >
          <S.SelectSearch
            name={name}
            id={id}
            value={selectSearchValue}
            type="text"
            onKeyUp={onKeyUp}
            autoComplete="off"
            border={border}
            onFocus={() => setDatalistView('block')}
            onBlur={onBlur}
            placeholder={placeholder}
            transform={transform}
            disabled={disabled || readOnly || isLoading}
            required={label?.required}
            data-gtm-form="select"
            data-gtm-name={label?.name}
            onChange={e => setSelectSearchValue(e.currentTarget.value)}
          />

          {!disabled &&
            !readOnly &&
            !isLoading &&
            options &&
            options.length > 0 && (
              <S.Datalist
                datalistView={datalistView}
                filteredOptions={filteredOptions.length}
              >
                {filteredOptions.map((option, i) => (
                  <S.Option
                    key={`select-option${+i}`}
                    onClick={() => onChangeOption(option)}
                  >
                    {option.label}
                  </S.Option>
                ))}
              </S.Datalist>
            )}
          <S.Toggle
            disabled={disabled || readOnly || isLoading}
            border={border}
          >
            {isLoading && <S.Loading color={colors.black} size={15} />}

            {!isLoading && handleClean && (
              <S.ClearInput size={15} onClick={handleClearInput} />
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
