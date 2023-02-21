import React from 'react';

import {
  Button,
  Input,
  Select,
  SelectSearch,
  SliderRange,
  Checkbox,
  FormikProvider,
} from '@components';

import * as I from './interface';

export const FormProvider = <Type extends {}>({
  components,
  button,
  form,
}: I.FormProviderProps<Type>) => (
  <FormikProvider {...form}>
    {components.map(
      (
        {
          as,
          name,
          inputProps,
          selectProps,
          selectSearchProps,
          sliderRangeProps,
          checkboxProps,
        },
        i,
      ) => (
        <>
          {as === 'input' && (
            <Input
              key={`formProvider-input-${+i}`}
              name={name[0]}
              {...inputProps}
            />
          )}
          {as === 'select' && (
            <Select
              key={`formProvider-select-${+i}`}
              name={name[0]}
              {...selectProps}
            />
          )}
          {as === 'selectSearch' && (
            <SelectSearch
              key={`formProvider-selectSearch-${+i}`}
              name={name[0]}
              {...selectSearchProps}
            />
          )}
          {as === 'sliderRange' && (
            <SliderRange
              key={`formProvider-sliderRange-${+i}`}
              name={[name[0], 'max']}
              {...sliderRangeProps}
            />
          )}
          {as === 'checkbox' && (
            <Checkbox
              key={`formProvider-checkbox-${+i}`}
              name={name[0]}
              label={checkboxProps?.label || ''}
              {...checkboxProps}
            />
          )}
        </>
      ),
    )}

    <Button {...button} type="submit" />
  </FormikProvider>
);
