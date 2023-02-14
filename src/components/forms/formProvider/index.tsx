import React from 'react';

import {
  Input,
  Button,
  Select,
  SelectSearch,
  FormikProvider,
} from '@components';

import * as I from './interface';

export const FormProvider = <Type extends {}>({
  components,
  button,
  form,
}: I.FormProviderProps<Type>) => (
  <FormikProvider {...form}>
    {components.map(({ as, options, ...rest }, i) => (
      <>
        {as === 'input' && <Input key={`formProvider-input${+i}`} {...rest} />}
        {as === 'select' && (
          <Select
            key={`formProvider-select${+i}`}
            {...rest}
            options={options || []}
          />
        )}
        {as === 'selectSearch' && (
          <SelectSearch
            key={`formProvider-selectSearch${+i}`}
            {...rest}
            options={options || []}
          />
        )}
      </>
    ))}

    <Button {...button} type="submit" />
  </FormikProvider>
);
