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
  withHover: true,
  titles: [
    { name: 'Id', width: 50 },
    { name: 'Nome', textTransform: 'capitalize' },
    { name: 'Descrição' },
    { name: 'Email', width: 150, textAlign: 'center' },
    { name: 'Ativo', textAlign: 'center' },
    { name: 'Tipo' },
    { name: 'Delete', width: 50, textAlign: 'center' },
  ],
  list: [
    {
      id: 1,
      name: 'caio sousa',
      description: 'Table row 1',
      email: 'caio@teste.com',
      ativo: 'sim',
      tipo: 'admin',
      delete: <MdOutlineDeleteForever />,
    },

    {
      id: 2,
      name: 'Sabrina',
      description: 'Table row 2',
      email: 'sabrina@teste.com',
      ativo: 'sim',
      tipo: 'comum',
      delete: <MdOutlineDeleteForever />,
    },

    {
      id: 3,
      name: 'Julio',
      description: 'Table row 3',
      email: 'julio@teste.com',
      ativo: 'nao',
      tipo: 'admin',
      delete: <MdOutlineDeleteForever />,
    },

    {
      id: 4,
      name: 'Igor',
      description: 'Table row 4',
      email: 'igor@teste.com',
      ativo: 'nao',
      tipo: 'comum',
      delete: <MdOutlineDeleteForever />,
    },

    {
      id: 5,
      name: 'Enio',
      description: 'Table row 5',
      email: 'enio@teste.com',
      ativo: 'sim',
      tipo: 'comum',
      delete: <MdOutlineDeleteForever />,
    },

    {
      id: 6,
      name: 'Pedro',
      description: 'Table row 6',
      email: 'pedro@teste.com',
      ativo: 'sim',
      tipo: 'admin',
      delete: <MdOutlineDeleteForever />,
    },
  ],
};
