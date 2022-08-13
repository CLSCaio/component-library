import React, { ReactNode } from 'react';

export type Router = {
  path: string;
  name: string;
  component: any;
  public?: boolean;
};

export interface RouterProps {
  routes: Router[];
}
