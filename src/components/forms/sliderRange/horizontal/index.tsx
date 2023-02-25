import React, { useEffect, useState } from 'react';
import { useField } from 'formik';

import { convertValues } from '@utils';
import { colors } from '@global';
import * as C from '@components';

import * as I from '../interface';
import * as S from './styles';

export const Horizontal = ({
  max = 10000,
  min = 0,
  textMin = 'Min: ',
  textMax = 'Max: ',
  maxW,
  name,
  disabled,
  isLoading,
  label,
  type = 'number',
  step = 'default',
  position = 'horizontal',
  variant = 'doubleThumb',
}: I.SliderRangeProps) => {
  const [field, metaMin, helpersMin] = useField(name[0]);
  const [__, metaMax, helpersMax] = useField(name[1]);

  const [inputMin, setInputMin] = useState(0);
  const [inputMax, setInputMax] = useState(100);

  const verifyValuesOnInput = (e: any) => {
    if (e.currentTarget.id === 'min-range') {
      if (inputMin >= inputMax) setInputMax(inputMin);
    } else if (inputMin >= inputMax) setInputMin(inputMax);
  };

  const verifyValuesOnMouseLeave = (e: any) => {
    if (e.currentTarget.id === 'min-range') {
      if (inputMin >= inputMax) setInputMin(inputMax);
    } else if (inputMin >= inputMax) setInputMax(inputMin);
  };

  const returnProgressbar = (value: number) => {
    const v = ((value - min) / (max - min)) * 100;
    return v;
  };

  const returnProgressBarToValue = (value: number) => {
    const v = min + (value / 100) * (max - min);
    return v;
  };

  const convertValueForView = (value: number) => {
    if (value.toString() === '') return;
    const types = {
      hour: `${convertValues({ type: 'hour', value })} h`,
      number: value === 0 ? value : value.toFixed(2),
      km: `${value === 0 ? value : value.toFixed(2)} km`,
      money: convertValues({ type: 'money', value }),
    };

    return types[type];
  };

  const loadingProps = {
    color: colors.primary,
    size: 20,
  };

  useEffect(() => {
    if (metaMin.value) setInputMin(returnProgressbar(metaMin.value));
    if (metaMax.value) setInputMax(returnProgressbar(metaMax.value));

    if (!metaMin.value) helpersMin.setValue(min);
    if (!metaMax.value) helpersMax.setValue(min);
  }, []);

  useEffect(() => {
    helpersMin.setValue(returnProgressBarToValue(inputMin));
    helpersMax.setValue(returnProgressBarToValue(inputMax));
  }, [inputMin, inputMax]);

  return (
    <S.Container maxW={maxW} positionLabel={label?.position}>
      {label?.name && (
        <S.HStack>
          <S.Label
            htmlFor={field.name}
            boldLabel={label?.bold}
            positionLabel={label?.position}
          >
            {label?.name} {label?.required && '*'}
          </S.Label>
          {label?.tooltip && (
            <C.Tooltip description={label?.tooltip} isLoading={isLoading} />
          )}
        </S.HStack>
      )}

      <S.SubContainer>
        <S.Section>
          <S.MinText>
            {textMin} {convertValueForView(metaMin.value)}
          </S.MinText>
          {variant === 'doubleThumb' && (
            <S.MaxText>
              {textMax} {convertValueForView(metaMax.value)}
            </S.MaxText>
          )}
        </S.Section>
        <S.Wrapper>
          <S.Slider position={position}>
            <S.Bar position={position} left={inputMin} right={100 - inputMax} />
          </S.Slider>

          <S.Field>
            {isLoading ? (
              <S.LeftLoading {...loadingProps} />
            ) : (
              <S.SliderRange
                id="min-range"
                type="range"
                min={0}
                max={100}
                step={step === 'default' ? 1 : step === 'little' ? 10 : 100}
                value={inputMin}
                onChange={e => {
                  setInputMin(+e.currentTarget.value);
                }}
                onInput={verifyValuesOnInput}
                onMouseLeave={verifyValuesOnMouseLeave}
                disabled={disabled || isLoading}
              />
            )}

            {variant === 'doubleThumb' ? (
              isLoading ? (
                <S.RightLoading {...loadingProps} />
              ) : (
                <S.SliderRange
                  type="range"
                  min={0}
                  max={100}
                  step={step === 'default' ? 1 : step === 'little' ? 10 : 100}
                  value={inputMax}
                  onChange={e => {
                    setInputMax(+e.currentTarget.value);
                  }}
                  onInput={verifyValuesOnInput}
                  onMouseLeave={verifyValuesOnMouseLeave}
                  disabled={disabled || isLoading}
                />
              )
            ) : null}
          </S.Field>
        </S.Wrapper>
      </S.SubContainer>
    </S.Container>
  );
};
