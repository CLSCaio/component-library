import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Table, TableProps } from '../../..';

export default {
  title: 'Content/Table',
  component: Table,
} as Meta;

export const Overview: Story<TableProps> = args => <Table {...args} />;

Overview.args = {
  list: {
    titles: [
      'Uma table 1',
      'Uma table 2',
      'Uma table 3',
      'Uma table 4',
      'Uma table 5',
    ],
    columns: [
      [
        'Uma Table 1 com innerHtml 1',
        'Uma Table 2 com innerHtml 1',
        'Uma Table 3 com innerHtml 1',
        'Uma Table 4 com innerHtml 1',
        'Uma Table 5 com innerHtml 1',
      ],
      [
        'Uma Table 1 com innerHtml 2',
        'Uma Table 2 com innerHtml 2',
        'Uma Table 3 com innerHtml 2',
        'Uma Table 4 com innerHtml 2',
        'Uma Table 5 com innerHtml 2',
      ],
      [
        'Uma Table 1 com innerHtml 3',
        'Uma Table 2 com innerHtml 3',
        'Uma Table 3 com innerHtml 3',
        'Uma Table 4 com innerHtml 3',
        'Uma Table 5 com innerHtml 3',
      ],
      [
        'Uma Table 1 com innerHtml 4',
        'Uma Table 2 com innerHtml 4',
        'Uma Table 3 com innerHtml 4',
        'Uma Table 4 com innerHtml 4',
        'Uma Table 5 com innerHtml 4',
      ],
      [
        'Uma Table 1 com innerHtml 5',
        'Uma Table 2 com innerHtml 5',
        'Uma Table 3 com innerHtml 5',
        'Uma Table 4 com innerHtml 5',
        'Uma Table 5 com innerHtml 5',
      ],
    ],
    onClick: () => console.log,
  },
};
