import { ReactNode } from 'react';

import { Tsize, TFormikProps } from '@types';

type FormikPropsExtends<Type> = TFormikProps<Type> & FormikProviderStyles;

export interface FormikProviderProps<Type> extends FormikPropsExtends<Type> {
  children: ReactNode;
}

export interface FormikProviderStyles {
  maxW?: Tsize;
}
