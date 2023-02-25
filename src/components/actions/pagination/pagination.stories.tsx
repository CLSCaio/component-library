import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Pagination, PaginationProps } from '@components';

export default {
  title: 'Actions/Pagination',
  component: Pagination,
} as Meta;

export const Overview: Story<PaginationProps> = args => {
  const [_, setPage] = useState(1);

  return <Pagination {...args} setPage={setPage} totalPages={10} />;
};
