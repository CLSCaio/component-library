/* eslint-disable object-shorthand */
import React from 'react';
import { FormikProvider as FP, useFormik } from 'formik';

import * as I from './interface';
import * as S from './styles';

export const FormikProvider = <Type extends {}>({
  children,
  onSubmit,
  initialValues,
  validationSchema,
  maxW,
}: I.FormikProviderProps<Type>) => {
  const form = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema,
    onSubmit,
  });

  return (
    <FP value={form}>
      <S.Form onSubmit={form.handleSubmit} maxW={maxW}>
        {children}
      </S.Form>
    </FP>
  );
};
