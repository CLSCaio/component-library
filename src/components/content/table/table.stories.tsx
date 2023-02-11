import React from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { Meta, Story } from '@storybook/react';

import { Table, TableProps } from '@components';

export default {
  title: 'Content/Table',
  component: Table,
} as Meta;

export const Overview: Story<TableProps> = args => <Table {...args} />;

Overview.args = {
  size: 500,
  withHover: true,
  titles: [
    { name: 'Id', width: 50 },
    { name: 'Name', textTransform: 'capitalize' },
    { name: 'Description' },
    { name: 'Email', width: 150, textAlign: 'center' },
    { name: 'Active', textAlign: 'center' },
    { name: 'Type' },
    { name: 'Delete', width: 50, textAlign: 'center' },
  ],
  list: [
    {
      id: 1,
      name: 'caio sousa',
      description: 'Table row 1',
      email: 'caio@teste.com',
      ativo: 'yes',
      tipo: 'admin',
      delete: <MdOutlineDeleteForever />,
    },

    {
      id: 2,
      name: 'Sabrina',
      description: 'Table row 2',
      email: 'sabrina@teste.com',
      ativo: 'no',
      tipo: 'comum',
      delete: <MdOutlineDeleteForever />,
    },

    {
      id: 3,
      name: 'Julio',
      description: 'Table row 3',
      email: 'julio@teste.com',
      ativo: 'no',
      tipo: 'admin',
      delete: <MdOutlineDeleteForever />,
    },

    {
      id: 4,
      name: 'Igor',
      description: 'Table row 4',
      email: 'igor@teste.com',
      ativo: 'no',
      tipo: 'comum',
      delete: <MdOutlineDeleteForever />,
    },

    {
      id: 5,
      name: 'Enio',
      description: 'Table row 5',
      email: 'enio@teste.com',
      ativo: 'no',
      tipo: 'comum',
      delete: <MdOutlineDeleteForever />,
    },

    {
      id: 6,
      name: 'Pedro',
      description: 'Table row 6',
      email: 'pedro@teste.com',
      ativo: 'yes',
      tipo: 'admin',
      delete: <MdOutlineDeleteForever />,
    },
  ],
};
