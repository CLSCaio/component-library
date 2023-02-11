import { FormComponentsProps, Tsize, TFormikProps } from '@types';

type FormikPropsExtends<Type> = TFormikProps<Type> & FormProviderStyles;

export interface FormProviderProps<Type> {
  components: FormComponentsProps[];
  button: {
    isLoading?: boolean;
    label: string;
  };
  form: FormikPropsExtends<Type>;
}

export interface FormProviderStyles {
  maxW?: Tsize;
}

export type { FormComponentsProps };
