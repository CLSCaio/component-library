import { IconType } from 'react-icons';

import * as yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

export type TTransformType = 'capitalize' | 'lowercase' | 'uppercase';
export type TBordersType = 'outline' | 'inline';
export type TXy = [top: number, right: number, bottom: number, left: number];
export type Tsize = 'block' | number | 'maxContent' | 'default';

export type THeaderBarDefaultProps = {
  closeIcon?: IconType;
  openIcon?: IconType;
  titleIcon?: IconType;
  title?: string;
  img?: {
    url: string;
    alt?: string;
  };
};

export type TFormikProps<Type> = {
  onSubmit: (values: Type) => void | Promise<void>;
  initialValues: Type;
  validationSchema: yup.ObjectSchema<ObjectShape>;
};
