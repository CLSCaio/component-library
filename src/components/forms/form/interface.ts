import { FormikContextType } from 'formik';

import { FormComponentsProps } from 'src/@types';

import { ButtonProps } from 'src/components';

export interface FormProps {
  components: FormComponentsProps[];
  button: ButtonProps;
  form: FormikContextType<any>;
}
