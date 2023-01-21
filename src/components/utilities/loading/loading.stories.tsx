import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Loading, LoadingProps, Button } from '../../..';

export default {
  title: 'Utilities/Loading',
  component: Loading,
} as Meta;

export const Overview: Story<LoadingProps> = ({ isLoading, ...args }) => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setloading(false);
      }, 1500);
    }
  }, [loading]);

  return (
    <>
      <Loading isLoading={loading} {...args} />
      <Button
        type="button"
        onClick={() => setloading(true)}
        label="set loading true"
      />
    </>
  );
};
