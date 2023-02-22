import React, { useEffect, useState } from 'react';
import { useField } from 'formik';

import * as C from '@components';

import { colors } from '@global';
import * as I from './interface';
import * as S from './styles';

export const Select = ({
  maxW = 'block',
  transform,
  readOnly,
  placeholder,
  border = 'inline',
  handleClean,
  errorMessage,
  options,
  disabled,
  isLoading,
  label,
  name,
  id,
}: I.SelectProps) => {
  const [field, meta, helpers] = useField(name);

  const [error, setError] = useState(false);
  const [errorStyle, setErrorStyle] = useState<'error' | undefined>(undefined);

  const [selectValue, setSelectValue] = useState(meta.value || '');

  const [datalistView, setDatalistView] = useState<'block' | 'none'>('none');

  const handleClearInput = () => {
    helpers.setValue('');
    setSelectValue('');
  };

  const onChangeOption = (option: I.OptionsProps) => {
    helpers.setValue(option.value);
    setSelectValue(option.value ? option.label : '');
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

  useEffect(() => {
    if (meta.value === '') return;
    const values = options?.filter(
      ({ value, label: l }) => value === meta.value || l === meta.value,
    );

    if (!values?.length)
      throw new Error('Cannot find this default value in options.');

    helpers.setValue(values[0].value);
    setSelectValue(values[0].label);
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
          readOnly
          error={errorStyle}
          positionLabel={label?.position}
        >
          <S.Select
            id={id}
            name={name}
            value={selectValue}
            type="text"
            border={border}
            onFocus={() => setDatalistView('block')}
            onBlur={onBlur}
            autoComplete="off"
            placeholder={placeholder}
            transform={transform}
            disabled={disabled || readOnly || isLoading}
            readOnly
            required={label?.required}
            data-gtm-form="select"
            data-gtm-name={label?.name}
            onChange={e => setSelectValue(e.currentTarget.value)}
          />

          {!disabled &&
            !readOnly &&
            !isLoading &&
            options &&
            options.length > 0 && (
              <S.Datalist datalistView={datalistView}>
                {options.map((option, i) => (
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
