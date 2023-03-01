import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { BiBlock } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai';

import ClipLoader from 'react-spinners/ClipLoader';

import * as C from '@components';

import { colors } from '@global';
import * as I from './interface';
import * as S from './styles';

export const Switch = ({
  label,
  readOnly,
  disabled,
  isLoading,
  bold,
  maxW,
  tooltip,
  align = 'row',
  name,
}: I.SwitchProps) => {
  const [field, meta, helpers] = useField(name);

  const [error, setError] = useState(false);
  const [errorStyle, setErrorStyle] = useState<'error' | undefined>(undefined);

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

  const block = isLoading || readOnly || disabled;

  return (
    <S.Container maxW={maxW}>
      <C.Group maxW="block" gap={[10]} align="center" direction={align}>
        <S.Field>
          <S.Toogle
            checked={meta.value}
            disabled={block}
            error={errorStyle}
            onClick={() => !block && helpers.setValue(!meta.value)}
          >
            {isLoading ? (
              <ClipLoader color={colors.primary} size={15} />
            ) : disabled ? (
              <BiBlock size={15} color={colors.support.error} />
            ) : (
              <S.Checkmark
                checked={meta.value}
                onClick={() => !block && helpers.setValue(!meta.value)}
              />
            )}
          </S.Toogle>
          <S.Switch {...field} type="checkbox" />
          {tooltip && <C.Tooltip description={tooltip} isLoading={isLoading} />}
        </S.Field>
        {label && (
          <S.Label htmlFor={name} bold={bold}>
            {label}
          </S.Label>
        )}
      </C.Group>
      {error && <C.ErrorMessage error={meta.error || 'Occorreu um erro'} />}
    </S.Container>
  );
};
