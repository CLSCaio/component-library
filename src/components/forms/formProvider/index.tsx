import React from 'react';

import {
  Button,
  Input,
  Select,
  SelectSearch,
  SliderRange,
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
        </>
      ),
    )}

    <Button {...button} type="submit" />
  </FormikProvider>
);
