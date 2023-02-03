import { FormikContextType } from 'formik';

import { TFormComponentsProps } from '../../../types';

import { ButtonProps } from '../../actions';

export interface FormProps {
  components: TFormComponentsProps[];
  button: ButtonProps;
  form: FormikContextType<any>;
}
