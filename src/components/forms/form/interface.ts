import { FormikContextType } from 'formik';

import { FormComponentsProps } from '@types';

export interface FormProps {
  components: FormComponentsProps[];
  button: {
    isLoading?: boolean;
    label: string;
    className?: string;
    id?: string;
  };
  form: FormikContextType<any>;
}
