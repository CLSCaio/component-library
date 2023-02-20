import React, { useEffect, useState } from 'react';
import { useField } from 'formik';

import * as C from '@components';

import { convertValues } from '@utils';
import * as I from './interface';
import * as S from './styles';

export const SliderRange = ({
  max = 10000,
  min = 0,
  textMin = 'Min: ',
  textMax = 'Max: ',
  maxW,
  name,
  border,
  disabled,
  isLoading,
  label,
  readOnly,
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
    if (!value) return;
    const types = {
      hour: `${convertValues({ type: 'hour', value })} h`,
      number: value.toFixed(0),
      km: `${value.toFixed(2)} km`,
      money: convertValues({ type: 'money', value }),
    };

    return types[type];
  };

  useEffect(() => {
    if (metaMin.value) setInputMin(returnProgressbar(metaMin.value));
    if (metaMax.value) setInputMax(returnProgressbar(metaMax.value));

    helpersMin.setValue(metaMin.value || min);
    helpersMax.setValue(metaMax.value || max);
  }, []);

  useEffect(() => {
    helpersMin.setValue(returnProgressBarToValue(inputMin));
    helpersMax.setValue(returnProgressBarToValue(inputMax));
  }, [inputMin, inputMax]);

  useEffect(() => {
    if (metaMin.value) setInputMin(returnProgressbar(metaMin.value));
    if (metaMin.value > max) {
      setInputMin(returnProgressbar(max));
      helpersMin.setValue(max);
    }
  }, [metaMin.value, metaMax.value]);

  return (
    <S.Container maxW={maxW}>
      {label?.name && (
        <C.Group gap={[10, 10]} align="center" maxW="maxContent">
          <S.Label
            htmlFor={field.name}
            disabled={disabled || readOnly || isLoading}
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

      <C.Group direction="column" maxW="block">
        <S.Section>
          <p>
            {textMin} {convertValueForView(metaMin.value)}
          </p>
          <p>
            {textMax} {convertValueForView(metaMax.value)}
          </p>
        </S.Section>
        <S.Wrapper position={position}>
          <S.Slider variant={variant}>
            <S.Bar variant={variant} left={inputMin} right={100 - inputMax} />
          </S.Slider>

          <S.Field>
            <S.Input
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
            />

            {variant === 'doubleThumb' && (
              <S.Input
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
              />
            )}
          </S.Field>
        </S.Wrapper>
      </C.Group>
    </S.Container>
  );
};
